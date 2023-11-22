<script setup lang="ts">
import { useTimer } from '@/stores'
import SettingsIntervalInput from './SettingsIntervalInput.vue'
import { onMounted, reactive, ref } from 'vue'
import SettingsAutoChangeCheckbox from './SettingsAutoChangeCheckbox.vue'

const timerStore = useTimer()

const formValues = reactive({
  pomodoreInterval: 0,
  breakInterval: 0,
  longBreakInterval: 0,
  autoBreak: false,
  autoPomodore: false
})

function setData() {
  formValues.pomodoreInterval = timerStore.pomodoreInterval
  formValues.breakInterval = timerStore.breakInterval
  formValues.longBreakInterval = timerStore.longBreakInterval
  formValues.autoBreak = timerStore.autoBreak
  formValues.autoPomodore = timerStore.autoPomodore
}

onMounted(() => {
  setData()
})

function save() {
  timerStore.setBreakInterval(formValues.breakInterval)
  timerStore.setLongBreakInterval(formValues.longBreakInterval)
  timerStore.setPomodoreInterval(formValues.pomodoreInterval)
  timerStore.setAutoBreak(formValues.autoBreak)
  timerStore.setAutoPomadore(formValues.autoPomodore)

  dialogRef.value?.close()
}

const dialogRef = ref<null | HTMLDialogElement>(null)
</script>
<template>
  <dialog id="settingsDialog" class="modal" ref="dialogRef">
    <div class="modal-box">
      <div>
        <div role="alert" class="alert alert-warning ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <span>Warning: Pressing 'Save' will reset the timer and Pomodoro progress.</span>
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <SettingsIntervalInput
          label="Pomodore time"
          label-alt="minutes"
          @change="formValues.pomodoreInterval = $event"
          :value="timerStore.pomodoreInterval"
        />
        <SettingsIntervalInput
          label="Break time"
          label-alt="minutes"
          @change="formValues.breakInterval = $event"
          :value="timerStore.breakInterval"
        />
        <SettingsIntervalInput
          label="Long break time"
          label-alt="minutes"
          @change="formValues.longBreakInterval = $event"
          :value="timerStore.longBreakInterval"
        />
        <SettingsAutoChangeCheckbox
          label="Auto break"
          :value="timerStore.autoBreak"
          @change="formValues.autoBreak = $event"
        />
        <SettingsAutoChangeCheckbox
          label="Auto pomadore"
          :value="timerStore.autoPomodore"
          @change="formValues.autoPomodore = $event"
        />
      </div>
      <div class="modal-action">
        <form method="dialog">
          <button class="btn">Close</button>
        </form>
        <button
          class="btn btn-primary"
          :disabled="
            formValues.breakInterval <= 0 ||
            formValues.longBreakInterval <= 0 ||
            formValues.pomodoreInterval <= 0
          "
          @click="save"
        >
          Save
        </button>
      </div>
    </div>
  </dialog>
</template>
