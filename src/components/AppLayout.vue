<script setup lang="ts">
import AppFooter from './AppFooter.vue'
import AppHeader from './AppHeader.vue'
</script>
<template>
  <div class="min-h-screen max-w-3xl w-full mx-auto flex flex-col">
    <AppHeader />
    <main class="grow">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
