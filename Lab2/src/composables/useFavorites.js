import { ref } from 'vue'

export function useFavorites() {
  const favorites = ref([])

  function toggleFavorite(id) {
    const idx = favorites.value.indexOf(id)
    if (idx === -1) favorites.value.push(id)
    else favorites.value.splice(idx, 1)
  }

  function isFavorite(id) {
    return favorites.value.includes(id)
  }

  return { favorites, toggleFavorite, isFavorite }
}
