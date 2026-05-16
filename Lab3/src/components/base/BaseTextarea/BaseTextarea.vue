<script setup>
defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  error: {
    type: String,
    default: ''
  },
  id: {
    type: String,
    default: ''
  },
  rows: {
    type: Number,
    default: 4
  }
})

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="base-textarea">
    <label v-if="label" :for="id" class="base-textarea__label">{{ label }}</label>
    <textarea
      :id="id"
      :value="modelValue"
      :placeholder="placeholder"
      :rows="rows"
      :class="['base-textarea__field', { 'base-textarea__field--error': error }]"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <span v-if="error" class="base-textarea__error">{{ error }}</span>
  </div>
</template>

<style lang="scss" scoped src="./BaseTextarea.scss"></style>
