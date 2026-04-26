<script setup>
defineProps({
  inline: { type: Boolean, default: false },
  text: { type: String, default: 'Loading...' }
})
</script>

<template>
  <div class="loader" :class="{ 'loader--inline': inline }">
    <div class="loader__spinner" />
    <p v-if="text" class="loader__text">{{ text }}</p>
  </div>
</template>

<style lang="scss" src="./LoadingSpinner.scss"></style>
