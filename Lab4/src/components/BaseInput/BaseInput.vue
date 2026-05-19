<script setup>
import { computed } from 'vue'
import './BaseInput.scss'

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    required: true,
  },
  error: {
    type: String,
    default: null,
  },
  autocomplete: {
    type: String,
    default: 'off',
  },
})

const emit = defineEmits(['update:modelValue', 'blur', 'input'])

const fieldId = computed(() => `base-input-${props.name}`)

function onInput(event) {
  emit('update:modelValue', event.target.value)
  emit('input', props.name)
}

function onBlur() {
  emit('blur', props.name)
}

const classes = computed(() => [
  'base-input',
  { 'base-input--invalid': !!props.error },
])
</script>

<template>
  <div :class="classes">
    <label v-if="label" :for="fieldId" class="base-input__label">
      {{ label }}
    </label>
    <input
      :id="fieldId"
      :name="name"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      class="base-input__field"
      @input="onInput"
      @blur="onBlur"
    />
    <p v-if="error" class="base-input__error">{{ error }}</p>
  </div>
</template>
