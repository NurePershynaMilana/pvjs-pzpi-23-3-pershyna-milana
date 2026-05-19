<script setup>
import { useRegistrations } from '@/composables/useRegistrations'
import { formatRegistrationDate } from '@/utils/formatters'
import './RegistrationList.scss'

const props = defineProps({
  eventId: {
    type: String,
    required: true,
  },
})

const { getRegistrationsByEvent } = useRegistrations()
const items = getRegistrationsByEvent(props.eventId)
</script>

<template>
  <section class="registration-list">
    <h3 class="registration-list__title">Зареєстровані учасники</h3>

    <p v-if="items.length === 0" class="registration-list__empty">
      Поки що ніхто не зареєструвався. Будь першим!
    </p>

    <ul v-else class="registration-list__items">
      <li
        v-for="registration in items"
        :key="registration.id"
        :class="[
          'registration-list__item',
          { 'registration-list__item--pending': registration.isPending },
        ]"
      >
        <div class="registration-list__person">
          <span class="registration-list__name">
            {{ registration.name }}
            <span
              v-if="registration.isPending"
              class="registration-list__pending-mark"
              aria-label="Надсилається"
            >
              ...
            </span>
          </span>
          <span class="registration-list__email">{{ registration.email }}</span>
        </div>
        <time class="registration-list__date" :datetime="registration.registeredAt">
          {{ formatRegistrationDate(registration.registeredAt) }}
        </time>
      </li>
    </ul>
  </section>
</template>
