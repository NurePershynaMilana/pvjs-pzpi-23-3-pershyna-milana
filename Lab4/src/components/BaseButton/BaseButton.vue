<script setup>
import { computed } from 'vue'
import './BaseButton.scss'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'ghost', 'accent'].includes(v),
  },
  type: {
    type: String,
    default: 'button',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  block: {
    type: Boolean,
    default: false,
  },
})

const classes = computed(() => [
  'base-button',
  `base-button--${props.variant}`,
  {
    'base-button--block': props.block,
    'base-button--disabled': props.disabled,
    'base-button--loading': props.loading,
  },
])
</script>

<template>
  <button
    :type="type"
    :class="classes"
    :disabled="disabled || loading"
  >
    <span v-if="loading" class="base-button__label">Завантаження...</span>
    <span v-else class="base-button__label"><slot /></span>
  </button>
</template>
