<script setup>
defineProps({
  value: {
    type: [Number, String],
    required: true
  },
  label: {
    type: String,
    required: true
  },
  variant: {
    type: String,
    default: 'default',
    validator: (v) => ['default', 'info', 'success', 'danger'].includes(v)
  }
})
</script>

<template>
  <div :class="['stat-card', `stat-card--${variant}`]">
    <span class="stat-card__value">{{ value }}</span>
    <span class="stat-card__label">{{ label }}</span>
  </div>
</template>

<style lang="scss" scoped src="./StatCard.scss"></style>
