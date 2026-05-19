<script setup>
import EventCard from '@/components/EventCard'
import './EventList.scss'

defineProps({
  events: {
    type: Array,
    default: () => [],
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="event-list">
    <p v-if="isLoading && events.length === 0" class="event-list__status">
      Завантаження подій...
    </p>
    <p
      v-else-if="!isLoading && events.length === 0"
      class="event-list__status"
    >
      Подій поки що немає.
    </p>
    <div v-else class="event-list__grid">
      <EventCard v-for="event in events" :key="event.id" :event="event" />
    </div>
  </div>
</template>
