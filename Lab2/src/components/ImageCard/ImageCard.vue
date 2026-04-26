<script setup>
import { getThumbnailUrl } from '../../api/picsum'
import StarIcon from '../icons/StarIcon.vue'

defineProps({
  image: { type: Object, required: true },
  isFavorite: { type: Boolean, default: false }
})

defineEmits(['toggle-favorite'])
</script>

<template>
  <article class="card">
    <div class="card__media">
      <img
        class="card__image"
        :src="getThumbnailUrl(image.id)"
        :alt="image.author"
        loading="lazy"
      />
    </div>

    <div class="card__body">
      <h3 class="card__author">{{ image.author }}</h3>
      <span class="card__id">#{{ image.id }}</span>
    </div>

    <button
      class="card__fav"
      :class="{ 'card__fav--active': isFavorite }"
      type="button"
      :aria-label="isFavorite ? 'Remove from favorites' : 'Add to favorites'"
      @click="$emit('toggle-favorite', image.id)"
    >
      <StarIcon :filled="isFavorite" />
    </button>
  </article>
</template>

<style lang="scss" src="./ImageCard.scss"></style>
