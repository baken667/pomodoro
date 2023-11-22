<script setup lang="ts">
import { onMounted, ref } from 'vue'

const props = defineProps<{
  value: number
  label: string
  labelAlt: string
}>()

const emit = defineEmits(['change'])
const inputValue = ref(0)

function changeValue() {
  emit('change', inputValue.value)
}

onMounted(() => {
  inputValue.value = props.value
})
</script>
<template>
  <div class="form-control w-full">
    <label class="label">
      <span class="label-text">{{ label }}</span>
      <span class="label-text-alt">{{ labelAlt }}</span>
    </label>
    <input
      @input="changeValue"
      type="number"
      v-model="inputValue"
      class="input input-bordered w-full input-md appearance-none"
    />
  </div>
</template>
