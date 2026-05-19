<script setup>
import { RouterLink } from 'vue-router'
import { ROUTE_NAMES } from '@/constants'
import './AppHeader.scss'
</script>

<template>
  <header class="app-header">
    <div class="app-header__inner">
      <RouterLink :to="{ name: ROUTE_NAMES.HOME }" class="app-header__logo">
        Події
      </RouterLink>
      <nav class="app-header__nav">
        <RouterLink :to="{ name: ROUTE_NAMES.HOME }" class="app-header__link">
          список подій
        </RouterLink>
      </nav>
    </div>
  </header>
</template>
