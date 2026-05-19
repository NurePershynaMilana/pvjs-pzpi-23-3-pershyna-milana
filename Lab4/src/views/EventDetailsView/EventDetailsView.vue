<script setup>
import { computed, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { useEvents } from '@/composables/useEvents'
import { ROUTE_NAMES } from '@/constants'
import { formatDate } from '@/utils/formatters'
import BaseButton from '@/components/BaseButton'
import BaseBadge from '@/components/BaseBadge'
import EventCover from '@/components/EventCover'
import RegistrationList from '@/components/RegistrationList'
import './EventDetailsView.scss'

defineOptions({ name: 'EventDetailsView' })

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
})

const router = useRouter()
const { getEventById, isLoading } = useEvents()

const event = computed(() => getEventById(props.id))

watchEffect(() => {
  if (!isLoading.value && !event.value) {
    router.replace({ name: ROUTE_NAMES.NOT_FOUND })
  }
})

function goBack() {
  router.push({ name: ROUTE_NAMES.HOME })
}

function goToRegistration() {
  router.push({
    name: ROUTE_NAMES.EVENT_REGISTRATION,
    params: { id: props.id },
  })
}
</script>

<template>
  <div class="event-details-view">
    <BaseButton variant="ghost" class="event-details-view__back" @click="goBack">
      ← Назад
    </BaseButton>

    <template v-if="event">
      <div class="event-details-view__top">
        <EventCover :event="event" size="lg" class="event-details-view__cover" />

        <div class="event-details-view__info">
          <BaseBadge :variant="event.type" />
          <h1 class="event-details-view__title">{{ event.title }}</h1>
          <p class="event-details-view__meta">
            <span>{{ formatDate(event.date) }}</span>
            <span v-if="event.location" class="event-details-view__dot">·</span>
            <span v-if="event.location">{{ event.location }}</span>
          </p>
          <p class="event-details-view__description">
            {{ event.fullDescription }}
          </p>
          <BaseButton variant="accent" block @click="goToRegistration">
            Зареєструватися →
          </BaseButton>
        </div>
      </div>

      <RegistrationList :event-id="event.id" class="event-details-view__list" />
    </template>

    <p v-else-if="isLoading" class="event-details-view__loading">
      Завантаження події...
    </p>
  </div>
</template>
