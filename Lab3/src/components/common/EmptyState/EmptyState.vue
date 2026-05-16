<script setup>
defineProps({
  message: {
    type: String,
    default: 'Nothing here yet'
  }
})
</script>

<template>
  <div class="empty-state">
    <p class="empty-state__message">{{ message }}</p>
    <slot />
  </div>
</template>

<style lang="scss" scoped src="./EmptyState.scss"></style>
