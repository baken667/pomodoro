<script setup lang="ts">
import { useTimer } from '@/stores'
import ControlButton from './ControlButton.vue'
import PlayIcon from './icons/PlayIcon.vue'
import PauseIcon from './icons/PauseIcon.vue'
import RotateIcon from './icons/RotateIcon.vue'
import TrashIcon from './icons/TrashIcon.vue'

const timerStore = useTimer()
</script>
<template>
  <div class="flex flex-row justify-center mt-4 gap-2">
    <ControlButton @click="timerStore.startTimer()" :disable="!timerStore.pause" tip="Play timer">
      <PlayIcon
        class="fill-base-content h-5 w-auto group-disabled:opacity-50 group-hover:fill-base-300"
      />
    </ControlButton>
    <ControlButton @click="timerStore.pauseTimer()" :disable="timerStore.pause" tip="Pause timer">
      <PauseIcon
        class="fill-base-content h-5 w-auto group-disabled:opacity-50 group-hover:fill-base-300"
      />
    </ControlButton>
    <ControlButton @click="timerStore.resetTimer()" tip="Reset timer">
      <RotateIcon class="fill-base-content h-5 w-auto group-hover:fill-base-300" />
    </ControlButton>
    <ControlButton @click="timerStore.resetPomodore()" tip="Reset pomodore">
      <TrashIcon class="fill-base-content h-5 w-auto group-hover:fill-base-300" />
    </ControlButton>
  </div>
</template>
