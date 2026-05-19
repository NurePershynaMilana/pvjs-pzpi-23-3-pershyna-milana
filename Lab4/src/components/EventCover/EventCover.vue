<script setup>
import { computed } from 'vue'
import './EventCover.scss'

const props = defineProps({
  event: {
    type: Object,
    required: true,
  },
  size: {
    type: String,
    default: 'sm',
    validator: (v) => ['sm', 'lg'].includes(v),
  },
})

const classes = computed(() => [
  'event-cover',
  `event-cover--${props.size}`,
  `event-cover--${props.event.type}`,
])
</script>

<template>
  <div :class="classes">
    <div class="event-cover__content">
      <h3 class="event-cover__title">{{ event.title }}</h3>
      <p v-if="event.coverSlogan" class="event-cover__slogan">
        {{ event.coverSlogan }}
      </p>
    </div>
  </div>
</template>
