<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="app-nav">
    <div class="container app-nav__inner">
      <h1 class="app-nav__brand">Task Manager</h1>
      <nav class="app-nav__links">
        <RouterLink to="/" class="app-nav__link">Tasks</RouterLink>
        <RouterLink to="/stats" class="app-nav__link">Statistics</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped src="./AppNav.scss"></style>
