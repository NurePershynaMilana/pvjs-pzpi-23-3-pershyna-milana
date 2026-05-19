<script setup>
import { RouterView } from 'vue-router'
import AppHeader from '@/components/AppHeader'
import ToastContainer from '@/components/ToastContainer'
</script>

<template>
  <div class="app">
    <AppHeader />
    <main class="app__main">
      <RouterView v-slot="{ Component }">
        <KeepAlive include="HomeView">
          <component :is="Component" />
        </KeepAlive>
      </RouterView>
    </main>
    <ToastContainer />
  </div>
</template>
