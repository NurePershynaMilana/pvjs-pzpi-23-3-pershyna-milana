<script setup>
import { useRouter } from 'vue-router'
import BaseButton from '@/components/base/BaseButton/BaseButton.vue'

const router = useRouter()

function goHome() {
  router.push({ name: 'list' })
}
</script>

<template>
  <div class="not-found">
    <h1 class="not-found__code">404</h1>
    <p class="not-found__message">Page not found</p>
    <BaseButton variant="primary" @click="goHome">Back to home</BaseButton>
  </div>
</template>

<style lang="scss" scoped src="./NotFoundView.scss"></style>
