<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: [String, Number, Boolean],
    default: ''
  },
  options: {
    type: Array,
    required: true
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

const emit = defineEmits(['update:modelValue'])

const normalizedOptions = computed(() =>
  props.options.map((opt) =>
    typeof opt === 'object' ? opt : { value: opt, label: opt }
  )
)

function handleChange(event) {
  const raw = event.target.value
  const match = normalizedOptions.value.find(
    (opt) => String(opt.value) === raw
  )
  emit('update:modelValue', match ? match.value : raw)
}
</script>

<template>
  <div class="base-select">
    <label v-if="label" :for="id" class="base-select__label">{{ label }}</label>
    <select
      :id="id"
      :value="String(modelValue)"
      :class="['base-select__field', { 'base-select__field--error': error }]"
      @change="handleChange"
    >
      <option
        v-for="opt in normalizedOptions"
        :key="String(opt.value)"
        :value="String(opt.value)"
      >
        {{ opt.label }}
      </option>
    </select>
    <span v-if="error" class="base-select__error">{{ error }}</span>
  </div>
</template>

<style lang="scss" scoped src="./BaseSelect.scss"></style>
