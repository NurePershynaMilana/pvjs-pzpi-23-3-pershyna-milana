<script setup>
import { useRouter } from 'vue-router'
import { ROUTE_NAMES } from '@/constants'
import { formatDate } from '@/utils/formatters'
import BaseButton from '@/components/BaseButton'
import BaseBadge from '@/components/BaseBadge'
import EventCover from '@/components/EventCover'
import './EventCard.scss'

const props = defineProps({
  event: {
    type: Object,
    required: true,
  },
})

const router = useRouter()

function goToDetails() {
  router.push({
    name: ROUTE_NAMES.EVENT_DETAILS,
    params: { id: props.event.id },
  })
}

function goToRegistration() {
  router.push({
    name: ROUTE_NAMES.EVENT_REGISTRATION,
    params: { id: props.event.id },
  })
}
</script>

<template>
  <article class="event-card">
    <EventCover :event="event" size="sm" class="event-card__cover" />

    <div class="event-card__body">
      <div class="event-card__meta">
        <BaseBadge :variant="event.type" />
        <span class="event-card__date">{{ formatDate(event.date) }}</span>
      </div>

      <h2 class="event-card__title">{{ event.title }}</h2>
      <p class="event-card__description">{{ event.shortDescription }}</p>

      <div class="event-card__actions">
        <BaseButton variant="ghost" @click="goToDetails">Деталі</BaseButton>
        <BaseButton variant="accent" @click="goToRegistration">
          Реєстрація
        </BaseButton>
      </div>
    </div>
  </article>
</template>
