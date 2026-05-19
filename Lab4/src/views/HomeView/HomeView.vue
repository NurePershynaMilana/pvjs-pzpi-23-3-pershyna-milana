<script setup>
import { useEvents } from '@/composables/useEvents'
import EventList from '@/components/EventList'
import './HomeView.scss'

defineOptions({ name: 'HomeView' })

const { events, isLoading } = useEvents()
</script>

<template>
  <div class="home-view">
    <header class="home-view__header">
      <h1 class="home-view__title">Майбутні події</h1>
      <p class="home-view__lead">
        Обирайте подію зі списку нижче, дізнавайтеся деталі та реєструйтесь
        одним кліком.
      </p>
    </header>
    <EventList :events="events" :is-loading="isLoading" />
  </div>
</template>
