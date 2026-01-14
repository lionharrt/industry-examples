<template>
  <div class="app-root">
    <NavBar v-if="route.path !== '/'" />
    
    <main class="relative z-10">
      <NuxtPage />
    </main>

    <!-- Global Variant Selector -->
    <VariantSelector v-if="route.path !== '/'" />
  </div>
</template>

<script setup lang="ts">
/**
 * NUXT-GSAP-STARTER
 * A boilerplate for digital experiences.
 */
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useLenis } from '~/composables/useLenis'

const route = useRoute()
const { initLenis } = useLenis()

onMounted(() => {
  initLenis()
})
</script>

<style>
:root {
  --bg-color: #ffffff;
  --primary-color: #000000;
  --accent-color: #888888;
}

body {
  @apply bg-background text-primary antialiased;
  background-color: var(--bg-color);
  color: var(--primary-color);
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
