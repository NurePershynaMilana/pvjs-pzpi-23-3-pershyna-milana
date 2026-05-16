<script setup>
defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  type: {
    type: String,
    default: 'text'
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
  }
})

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="base-input">
    <label v-if="label" :for="id" class="base-input__label">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :class="['base-input__field', { 'base-input__field--error': error }]"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <span v-if="error" class="base-input__error">{{ error }}</span>
  </div>
</template>

<style lang="scss" scoped src="./BaseInput.scss"></style>
