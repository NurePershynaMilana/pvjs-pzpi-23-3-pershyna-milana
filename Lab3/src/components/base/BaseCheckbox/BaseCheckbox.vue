<script setup>
defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  label: {
    type: String,
    default: ''
  }
})

defineEmits(['update:modelValue'])
</script>

<template>
  <label class="base-checkbox">
    <input
      type="checkbox"
      class="base-checkbox__input"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
    />
    <span
      :class="['base-checkbox__box', { 'base-checkbox__box--checked': modelValue }]"
      aria-hidden="true"
    />
    <span v-if="label" class="base-checkbox__label">{{ label }}</span>
  </label>
</template>

<style lang="scss" scoped src="./BaseCheckbox.scss"></style>
