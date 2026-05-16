<script setup>
import { computed } from 'vue'
import { isOverdue, formatDate } from '@/utils/date'

const props = defineProps({
  deadline: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
})

const overdue = computed(() => !props.completed && isOverdue(props.deadline))

const text = computed(() => {
  const formatted = formatDate(props.deadline)
  return overdue.value ? `Overdue: ${formatted}` : `Due ${formatted}`
})
</script>

<template>
  <span :class="['deadline-label', { 'deadline-label--overdue': overdue }]">
    {{ text }}
  </span>
</template>

<style lang="scss" scoped src="./DeadlineLabel.scss"></style>
