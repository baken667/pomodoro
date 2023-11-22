<script setup lang="ts">
import { useTimer } from '@/stores'
import { computed } from 'vue'

const timerStore = useTimer()

const circumreference = computed(() => {
  return 2 * Math.PI * 50
})

const offset = computed(() => {
  return circumreference.value * ((100 - timerStore.getProgress) / 100)
})
</script>
<template>
  <svg
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    stroke="none"
    class=" -rotate-90"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <circle cx="50" cy="50" r="45" class="stroke-base-300" stroke-width="10" />
      <circle cx="50" cy="50" r="45" class="stroke-primary" :stroke-dasharray="circumreference" :stroke-dashoffset="offset" stroke-width="10" />
    </g>
  </svg>
</template>
