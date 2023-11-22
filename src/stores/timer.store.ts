import { StageNameEnum } from '@/types/stage-name.enum'
import moment from 'moment'
import { defineStore } from 'pinia'

interface IState {
  pomodoreInterval: number
  breakInterval: number
  longBreakInterval: number
  pomodoreStage: number
  timer: number
  pause: boolean
  autoBreak: boolean
  autoPomodore: boolean
}

const useTimer = defineStore('timer', {
  state: (): IState => ({
    pomodoreInterval: 25,
    breakInterval: 5,
    longBreakInterval: 15,
    pomodoreStage: 1,
    timer: 0,
    pause: true,
    autoBreak: true,
    autoPomodore: false
  }),
  actions: {
    startTimer(): void {
      this.pause = false
      // set time
      if (this.timer === 0) {
        switch (this.pomodoreStage) {
          case 2:
            this.timer = this.breakInterval * 60
            break
          case 4:
            this.timer = this.breakInterval * 60
            break
          case 6:
            this.timer = this.breakInterval * 60
            break
          case 8:
            this.timer = this.breakInterval * 60
            break
          case 10:
            this.timer = this.longBreakInterval * 60
            break
          default:
            console.log('pomodore time!')
            this.timer = this.pomodoreInterval * 60
            break
        }
      }

      const audio = new Audio('/audio/notification.wav')

      const timerInstance = setInterval(() => {
        if (!this.pause) {
          this.timer--

          if (this.timer <= 0) {
            clearInterval(timerInstance)
            audio.play()
            this.changeStage()
          }
        } else {
          clearInterval(timerInstance)
        }
      }, 1000)
    },
    pauseTimer(): void {
      this.pause = !this.pause
    },
    resetTimer(): void {
      this.pause = true
      this.timer = 0
    },
    resetPomodore(): void {
      this.resetTimer()
      this.pomodoreStage = 1
    },
    changeStage() {
      this.resetTimer()
      if (this.pomodoreStage !== 10) {
        this.pomodoreStage++
      } else {
        this.pomodoreStage = 1
      }
      if (this.autoBreak) {
        if (this.pomodoreStage % 2 === 0) {
          this.startTimer()
        }
      }
      if (this.autoPomodore) {
        if (this.pomodoreStage % 2 !== 0) {
          console.log('start timer')
          this.startTimer()
        }
      }
    },
    setPomodoreInterval(val: number) {
      console.log(val)
      this.pomodoreInterval = val
      this.resetPomodore()
    },
    setBreakInterval(val: number) {
      this.breakInterval = val
      this.resetPomodore()
    },
    setLongBreakInterval(val: number) {
      this.longBreakInterval = val
      this.resetPomodore()
    },
    setAutoBreak(val: boolean) {
      this.autoBreak = val
      this.resetPomodore()
    },
    setAutoPomadore(val: boolean) {
      this.autoPomodore = val
      this.resetPomodore()
    }
  },
  getters: {
    getCurrentStageName: (state): StageNameEnum => {
      switch (state.pomodoreStage) {
        case 10:
          return StageNameEnum.LONGBREAK
        default:
          if (state.pomodoreStage % 2 === 0) {
            return StageNameEnum.BREAK
          }
          return StageNameEnum.POMODORE
      }
    },
    getProgress: (state) => {
      let fullTime: number = 0

      switch (state.pomodoreStage) {
        case 10:
          fullTime = state.longBreakInterval * 60
          break
        default:
          if (state.pomodoreStage % 2 === 0) {
            fullTime = state.breakInterval * 60
          } else {
            fullTime = state.pomodoreInterval * 60
          }
          break
      }

      return Math.round((state.timer / fullTime) * 100)
    },
    getTimer: (state): string => {
      return moment.utc(state.timer * 1000).format('mm:ss')
    }
  },
  persist: {
    paths: [
      'pomodoreInterval',
      'breakInterval',
      'longBreakInterval',
      'pomodoreStage',
      'timer',
      'autoBreak',
      'autoPomodore'
    ]
  }
})

export default useTimer
