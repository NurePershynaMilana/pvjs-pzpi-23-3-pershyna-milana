import { ref, watch } from 'vue'

export function useLocalStorage(key, defaultValue) {
  const stored = readFromStorage(key, defaultValue)
  const data = ref(stored)

  watch(
    data,
    (newValue) => {
      try {
        localStorage.setItem(key, JSON.stringify(newValue))
      } catch (e) {
        console.error(`useLocalStorage: failed to save "${key}"`, e)
      }
    },
    { deep: true },
  )

  return data
}

function readFromStorage(key, defaultValue) {
  let raw = null
  try {
    raw = localStorage.getItem(key)
  } catch (e) {
    console.warn(`useLocalStorage: localStorage unavailable for "${key}"`, e)
    return defaultValue
  }

  if (raw === null) return defaultValue

  try {
    const parsed = JSON.parse(raw)
    if (Array.isArray(defaultValue) && !Array.isArray(parsed)) {
      return defaultValue
    }
    return parsed
  } catch (e) {
    console.warn(`useLocalStorage: failed to parse "${key}", using default`, e)
    return defaultValue
  }
}
