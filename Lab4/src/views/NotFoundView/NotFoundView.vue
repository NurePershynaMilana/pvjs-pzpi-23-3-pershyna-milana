<script setup>
import { useRouter } from 'vue-router'
import { ROUTE_NAMES } from '@/constants'
import BaseButton from '@/components/BaseButton'
import './NotFoundView.scss'

defineOptions({ name: 'NotFoundView' })

const router = useRouter()

function goHome() {
  router.push({ name: ROUTE_NAMES.HOME })
}
</script>

<template>
  <div class="not-found-view">
    <p class="not-found-view__code">404</p>
    <h1 class="not-found-view__title">Сторінку не знайдено</h1>
    <p class="not-found-view__lead">
      Здається, такої сторінки немає або вона була переміщена.
    </p>
    <BaseButton variant="primary" @click="goHome">← На головну</BaseButton>
  </div>
</template>
