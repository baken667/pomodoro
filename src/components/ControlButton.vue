<script setup lang="ts">
defineProps<{
  disable?: boolean
  tip?: string
}>()
</script>
<template>
  <div class="tooltip tooltip-bottom" :data-tip="tip">
    <button class="btn btn-outline group btn-circle" :disabled="disable">
      <slot />
    </button>
  </div>
</template>
