<script setup>
defineProps({
  priority: {
    type: String,
    required: true
  },
  withSuffix: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <span :class="['priority-badge', `priority-badge--${priority.toLowerCase()}`]">
    {{ priority }}<span v-if="withSuffix"> priority</span>
  </span>
</template>

<style lang="scss" scoped src="./PriorityBadge.scss"></style>
