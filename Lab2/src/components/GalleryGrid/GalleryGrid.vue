<script setup>
import ImageCard from '../ImageCard/ImageCard.vue'

defineProps({
  images: { type: Array, required: true },
  favorites: { type: Array, required: true }
})

defineEmits(['toggle-favorite'])
</script>

<template>
  <div class="gallery">
    <ImageCard
      v-for="image in images"
      :key="image.id"
      :image="image"
      :is-favorite="favorites.includes(image.id)"
      @toggle-favorite="$emit('toggle-favorite', $event)"
    />
  </div>
</template>

<style lang="scss" src="./GalleryGrid.scss"></style>
