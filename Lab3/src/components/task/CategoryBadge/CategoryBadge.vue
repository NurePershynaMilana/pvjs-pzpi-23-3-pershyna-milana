<script setup>
defineProps({
  category: {
    type: String,
    required: true
  }
})
</script>

<template>
  <span :class="['category-badge', `category-badge--${category.toLowerCase()}`]">
    {{ category }}
  </span>
</template>

<style lang="scss" scoped src="./CategoryBadge.scss"></style>
