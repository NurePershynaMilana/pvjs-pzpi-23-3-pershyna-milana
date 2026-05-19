import { ref } from 'vue'
import { TOAST_TYPES, TOAST_DURATION_MS } from '@/constants'

const toasts = ref([])
let counter = 0

function addToast(message, type) {
  counter += 1
  const id = `${Date.now()}-${counter}`
  const toast = { id, message, type, createdAt: new Date().toISOString() }
  toasts.value.push(toast)
  setTimeout(() => removeToast(id), TOAST_DURATION_MS)
  return id
}

function removeToast(id) {
  toasts.value = toasts.value.filter((t) => t.id !== id)
}

export function useToast() {
  const showSuccess = (message) => addToast(message, TOAST_TYPES.SUCCESS)
  const showError = (message) => addToast(message, TOAST_TYPES.ERROR)
  const showInfo = (message) => addToast(message, TOAST_TYPES.INFO)

  return {
    toasts,
    showSuccess,
    showError,
    showInfo,
    removeToast,
  }
}
