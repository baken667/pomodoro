<script setup lang="ts">
import type { StageNameEnum } from '@/types/stage-name.enum'
import TimerControl from './TimerControl.vue'

defineProps<{
  time: string
  stageName: StageNameEnum
}>()
</script>
<template>
  <div class="hero bg-base-200">
    <div class="hero-content text-center py-8">
      <div>
        <h1 class="sm:text-8xl text-6xl font-bold">{{ time }}</h1>
        <p class="sm:text-xl text-lg capitalize">{{ stageName }}!</p>
        <TimerControl />
      </div>
    </div>
  </div>
</template>
