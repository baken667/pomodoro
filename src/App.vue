<script setup lang="ts">
import { useTitle } from '@vueuse/core'

import useTimer from '@/stores/timer.store'
import AppLayout from './components/AppLayout.vue'
import SettingsDialog from './components/SettingsDialog.vue'
import TimerViewer from './components/TimerViewer.vue'
import { watch } from 'vue'

const timerStore = useTimer()

watch(
  () => timerStore.getTimer,
  (value) => {
    if (timerStore.pause) {
      useTitle('PAUSE')
    } else {
      useTitle(`${value} | ${timerStore.getCurrentStageName}`)
    }
  }
)

watch(
  () => timerStore.pause,
  (value) => {
    if (value) {
      useTitle(`Pause | ${timerStore.getTimer} | ${timerStore.getCurrentStageName}`)
    }
  }
)
</script>

<template>
  <AppLayout>
    <SettingsDialog />
    <TimerViewer :stage-name="timerStore.getCurrentStageName" :time="timerStore.getTimer" />
  </AppLayout>
</template>
