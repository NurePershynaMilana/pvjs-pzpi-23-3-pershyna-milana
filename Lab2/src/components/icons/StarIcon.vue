<script setup>
defineProps({
  filled: { type: Boolean, default: false }
})
</script>

<template>
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M12 2.5l2.95 6.32 6.55.77-4.85 4.62 1.32 6.79L12 17.77l-5.97 3.23 1.32-6.79L2.5 9.59l6.55-.77L12 2.5z"
      :fill="filled ? 'currentColor' : 'none'"
      stroke="currentColor"
      stroke-width="1.6"
      stroke-linejoin="round"
    />
  </svg>
</template>
