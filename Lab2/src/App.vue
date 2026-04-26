<script setup>
import ImageGallery from './components/ImageGallery/ImageGallery.vue'
</script>

<template>
  <div class="app">
    <header class="app__header">
      <h1 class="app__title">Image Gallery</h1>
      <p class="app__subtitle">Browse, search and favorite photos from Picsum</p>
    </header>

    <main class="app__main">
      <ImageGallery />
    </main>
  </div>
</template>

<style lang="scss" src="./App.scss"></style>
