import { computed } from 'vue'
import { useLocalStorage } from './useLocalStorage'
import { submitRegistration } from '@/utils/api'
import { STORAGE_KEYS } from '@/constants'

const registrations = useLocalStorage(STORAGE_KEYS.REGISTRATIONS, [])

registrations.value = registrations.value.filter((r) => !r.isPending)

let tempCounter = 0
const makeTempId = () => {
  tempCounter += 1
  return `temp-${Date.now()}-${tempCounter}`
}

async function registerUser(eventId, userData) {
  const tempId = makeTempId()
  const optimisticEntry = {
    id: tempId,
    eventId,
    name: userData.name.trim(),
    email: userData.email.trim(),
    registeredAt: new Date().toISOString(),
    isPending: true,
  }

  registrations.value.push(optimisticEntry)

  try {
    const realId = await submitRegistration({
      eventId,
      name: optimisticEntry.name,
      email: optimisticEntry.email,
    })

    const idx = registrations.value.findIndex((r) => r.id === tempId)
    if (idx !== -1) {
      registrations.value[idx] = {
        ...optimisticEntry,
        id: realId,
        isPending: false,
      }
    }

    return { success: true }
  } catch (e) {
    registrations.value = registrations.value.filter((r) => r.id !== tempId)
    return { success: false, error: e.message }
  }
}

export function useRegistrations() {
  const getRegistrationsByEvent = (eventId) =>
    computed(() => registrations.value.filter((r) => r.eventId === eventId))

  return {
    registrations,
    getRegistrationsByEvent,
    registerUser,
  }
}
