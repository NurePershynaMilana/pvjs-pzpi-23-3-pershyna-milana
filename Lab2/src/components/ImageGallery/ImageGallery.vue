<script setup>
import { ref, computed, onMounted } from 'vue'
import SearchBar from '../SearchBar/SearchBar.vue'
import GalleryGrid from '../GalleryGrid/GalleryGrid.vue'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner.vue'
import ErrorMessage from '../ErrorMessage/ErrorMessage.vue'
import { fetchImagesPage } from '../../api/picsum'
import { dedupeById, filterImages } from '../../utils/filters'
import { useFavorites } from '../../composables/useFavorites'
import { useInfiniteScroll } from '../../composables/useInfiniteScroll'

const images = ref([])
const isLoading = ref(false)
const isLoadingMore = ref(false)
const error = ref(null)
const searchQuery = ref('')
const showFavoritesOnly = ref(false)
const currentPage = ref(1)
const hasMore = ref(true)
const sentinel = ref(null)

const { favorites, toggleFavorite } = useFavorites()

async function fetchInitial() {
  isLoading.value = true
  error.value = null
  images.value = []
  currentPage.value = 1
  hasMore.value = true
  try {
    const data = await fetchImagesPage(1)
    images.value = data
    if (data.length === 0) hasMore.value = false
  } catch (e) {
    error.value = e.message || 'Failed to load images'
  } finally {
    isLoading.value = false
  }
}

async function loadMore() {
  if (isLoading.value || isLoadingMore.value || !hasMore.value || error.value) return
  isLoadingMore.value = true
  try {
    const nextPage = currentPage.value + 1
    const data = await fetchImagesPage(nextPage)
    if (data.length === 0) {
      hasMore.value = false
    } else {
      const fresh = dedupeById(images.value, data)
      images.value.push(...fresh)
      currentPage.value = nextPage
    }
  } catch (e) {
    error.value = e.message || 'Failed to load more images'
  } finally {
    isLoadingMore.value = false
  }
}

const filteredImages = computed(() =>
  filterImages(images.value, {
    query: searchQuery.value,
    favorites: favorites.value,
    favoritesOnly: showFavoritesOnly.value,
  })
)

useInfiniteScroll(sentinel, loadMore)

onMounted(fetchInitial)
</script>

<template>
  <section class="image-gallery">
    <SearchBar
      v-model="searchQuery"
      v-model:show-favorites-only="showFavoritesOnly"
    />

    <LoadingSpinner v-if="isLoading" />

    <ErrorMessage
      v-else-if="error && images.length === 0"
      :message="error"
      @retry="fetchInitial"
    />

    <template v-else>
      <p
        v-if="filteredImages.length === 0"
        class="image-gallery__empty"
      >
        No images found
      </p>

      <template v-else>
        <GalleryGrid
          :images="filteredImages"
          :favorites="favorites"
          @toggle-favorite="toggleFavorite"
        />

        <div
          v-if="hasMore && !error"
          ref="sentinel"
          class="image-gallery__sentinel"
          aria-hidden="true"
        />

        <LoadingSpinner v-if="isLoadingMore" inline text="Loading more..." />

        <ErrorMessage
          v-if="error"
          :message="error"
          @retry="loadMore"
        />

        <p
          v-if="!hasMore && currentPage >= 2"
          class="image-gallery__end"
        >
          You have reached the end
        </p>
      </template>
    </template>
  </section>
</template>

<style lang="scss" src="./ImageGallery.scss"></style>
