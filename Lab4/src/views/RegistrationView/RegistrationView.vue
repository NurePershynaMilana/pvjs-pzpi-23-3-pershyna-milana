<script setup>
import { computed, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { useEvents } from '@/composables/useEvents'
import { ROUTE_NAMES } from '@/constants'
import { formatDate } from '@/utils/formatters'
import BaseButton from '@/components/BaseButton'
import BaseBadge from '@/components/BaseBadge'
import RegistrationForm from '@/components/RegistrationForm'
import './RegistrationView.scss'

defineOptions({ name: 'RegistrationView' })

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
  router.push({
    name: ROUTE_NAMES.EVENT_DETAILS,
    params: { id: props.id },
  })
}
</script>

<template>
  <div class="registration-view">
    <BaseButton variant="ghost" class="registration-view__back" @click="goBack">
      ← Назад
    </BaseButton>

    <div v-if="event" class="registration-view__grid">
      <section class="registration-view__info">
        <BaseBadge :variant="event.type" />
        <h1 class="registration-view__title">{{ event.title }}</h1>
        <p class="registration-view__meta">
          <span>{{ formatDate(event.date) }}</span>
          <span v-if="event.location" class="registration-view__dot">·</span>
          <span v-if="event.location">{{ event.location }}</span>
        </p>
        <p class="registration-view__description">
          {{ event.fullDescription }}
        </p>
      </section>

      <RegistrationForm :event-id="event.id" />
    </div>

    <p v-else-if="isLoading" class="registration-view__loading">
      Завантаження події...
    </p>
  </div>
</template>
