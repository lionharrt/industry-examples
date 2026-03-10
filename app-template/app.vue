<template>
  <div class="app-root">
    <NavBar v-if="route.path !== '/'" />
    
    <main class="relative z-10">
      <NuxtPage />
    </main>

    <!-- Global Variant Selector -->
    <VariantSelector v-if="showVariantSelector" />
  </div>
</template>

<script setup lang="ts">
/**
 * NUXT-GSAP-STARTER
 * A boilerplate for digital experiences.
 */
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useLenis } from '~/composables/useLenis'

const route = useRoute()
const { initLenis } = useLenis()

const showVariantSelector = computed(() => {
  return route.path !== '/' && route.query.toolbar !== 'false' && route.query.hideToolbar !== 'true'
})

onMounted(() => {
  initLenis()
})
</script>

<style>
body {
  @apply bg-background text-primary antialiased;
}

.app-root {
  @apply relative min-h-screen;
}

/* Base GSAP reveal styles */
.gsap-reveal {
  opacity: 0;
  transform: translateY(30px);
}
</style>
