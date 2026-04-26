<script setup>
import WarningIcon from '../icons/WarningIcon.vue'

defineProps({
  message: { type: String, required: true }
})

defineEmits(['retry'])
</script>

<template>
  <div class="error">
    <WarningIcon class="error__icon" />
    <h3 class="error__title">Something went wrong</h3>
    <p class="error__text">{{ message }}</p>
    <button class="error__retry" type="button" @click="$emit('retry')">
      Try again
    </button>
  </div>
</template>

<style lang="scss" src="./ErrorMessage.scss"></style>
