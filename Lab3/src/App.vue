<script setup>
import AppNav from '@/components/layout/AppNav/AppNav.vue';
</script>

<template>
    <AppNav />
    <main class="page">
        <div class="container">
            <RouterView />
        </div>
    </main>
</template>
