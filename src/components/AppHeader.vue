<script setup lang="ts">
import { useTimer } from '@/stores'
import BarsIcon from '@/components/icons/BarsIcon.vue'

const timerStore = useTimer()
</script>
<template>
  <header class="navbar bg-base-100 border-b border-b-base-content px-4">
    <div class="flex-1">
      <span class="text-xl font-bold">Pomodoro timer</span>
    </div>
    <div class="flex-none">
      <button class="btn btn-outline btn-circle group" onclick="settingsDialog.showModal()" :disabled="!timerStore.pause">
        <BarsIcon class="fill-base-content group-hover:fill-base-100 group-disabled:opacity-30 w-auto h-5" />
      </button>
    </div>
  </header>
</template>
