import { ref } from 'vue'
import { events as eventsData } from '@/data/events'
import { sleep } from '@/utils/delay'
import { EVENTS_FETCH_DELAY_MS } from '@/constants'

const events = ref([])
const isLoading = ref(true)
const error = ref(null)

async function fetchEvents() {
  isLoading.value = true
  error.value = null
  try {
    await sleep(EVENTS_FETCH_DELAY_MS)
    events.value = eventsData
  } catch (e) {
    error.value = e
  } finally {
    isLoading.value = false
  }
}

fetchEvents()

export function useEvents() {
  const getEventById = (id) => events.value.find((event) => event.id === id)

  return {
    events,
    isLoading,
    error,
    fetchEvents,
    getEventById,
  }
}
