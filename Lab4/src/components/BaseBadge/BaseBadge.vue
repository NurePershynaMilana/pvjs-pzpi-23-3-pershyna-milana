<script setup>
import { computed } from 'vue'
import { formatEventType } from '@/utils/formatters'
import './BaseBadge.scss'

const props = defineProps({
  variant: {
    type: String,
    required: true,
  },
})

const label = computed(() => formatEventType(props.variant))
</script>

<template>
  <span :class="['base-badge', `base-badge--${variant}`]">
    {{ label }}
  </span>
</template>
