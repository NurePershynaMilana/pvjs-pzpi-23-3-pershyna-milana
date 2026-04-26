<script setup>
import SearchIcon from '../icons/SearchIcon.vue'
import CloseIcon from '../icons/CloseIcon.vue'

defineProps({
  modelValue: { type: String, default: '' },
  showFavoritesOnly: { type: Boolean, default: false }
})

defineEmits(['update:modelValue', 'update:showFavoritesOnly'])
</script>

<template>
  <div class="search-bar">
    <div class="search-bar__input-wrap">
      <SearchIcon class="search-bar__icon" />
      <input
        class="search-bar__input"
        type="text"
        placeholder="Search by author"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <button
        v-if="modelValue"
        class="search-bar__clear"
        type="button"
        aria-label="Clear search"
        @click="$emit('update:modelValue', '')"
      >
        <CloseIcon />
      </button>
    </div>

    <div
      class="search-bar__toggle"
      :class="{ 'search-bar__toggle--shifted': showFavoritesOnly }"
      role="group"
    >
      <span class="search-bar__toggle-thumb" aria-hidden="true" />
      <button
        class="search-bar__toggle-btn"
        :class="{ 'search-bar__toggle-btn--active': !showFavoritesOnly }"
        type="button"
        @click="$emit('update:showFavoritesOnly', false)"
      >
        All
      </button>
      <button
        class="search-bar__toggle-btn"
        :class="{ 'search-bar__toggle-btn--active': showFavoritesOnly }"
        type="button"
        @click="$emit('update:showFavoritesOnly', true)"
      >
        Favorites
      </button>
    </div>
  </div>
</template>

<style lang="scss" src="./SearchBar.scss"></style>
