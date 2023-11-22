<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

const props = defineProps<{
  value: boolean
  label: string
}>()
const emit = defineEmits(['change'])

const inputValue = ref(false)

function changeValue() {
  emit('change', inputValue.value)
}

onMounted(() => {
  inputValue.value = props.value
})

watch(
  () => inputValue.value,
  () => {
    changeValue()
  }
)
</script>
<template>
  <div class="form-control">
    <label class="cursor-pointer label justify-start gap-3">
      <input type="checkbox" v-model="inputValue" class="checkbox checkbox-accent" />
      <span class="label-text">{{ label }}</span>
    </label>
  </div>
</template>
