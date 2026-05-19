<script setup>
import { useToast } from '@/composables/useToast'
import './ToastContainer.scss'

const { toasts, removeToast } = useToast()
</script>

<template>
  <Teleport to="body">
    <TransitionGroup
      tag="div"
      name="toast"
      class="toast-container"
    >
      <div
        v-for="toast in toasts"
        :key="toast.id"
        :class="[
          'toast-container__item',
          `toast-container__item--${toast.type}`,
        ]"
        role="status"
      >
        <span class="toast-container__message">{{ toast.message }}</span>
        <button
          type="button"
          class="toast-container__close"
          aria-label="Закрити повідомлення"
          @click="removeToast(toast.id)"
        >
          ×
        </button>
      </div>
    </TransitionGroup>
  </Teleport>
</template>
