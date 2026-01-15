<template>
  <section class="relative h-screen w-full bg-background flex items-center justify-center overflow-hidden px-6">
    <!-- Video Background -->
    <div class="absolute inset-0 z-0">
      <video 
        autoplay 
        muted 
        loop 
        playsinline 
        class="w-full h-full object-cover opacity-40 scale-105 hero-video"
      >
        <source :src="video" type="video/mp4">
      </video>
      <div class="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background/80"></div>
    </div>
    
    <div class="relative z-10 text-center space-y-6 md:space-y-8 max-w-5xl">
      <div class="overflow-hidden">
        <h1 class="text-4xl sm:text-5xl md:text-8xl font-serif tracking-tight text-primary hero-title opacity-0 translate-y-20 leading-tight">
          {{ title }}
        </h1>
      </div>
      <p class="text-base sm:text-lg md:text-2xl text-primary/70 max-w-2xl mx-auto hero-subtitle opacity-0">
        {{ subtitle }}
      </p>
      <div class="pt-4 md:pt-8">
        <button class="bg-accent text-white px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg font-medium hover:bg-primary transition-all duration-500 hover:scale-105 hero-button opacity-0">
          {{ cta }}
        </button>
      </div>
    </div>

    <!-- Decorative fluid shape -->
    <div class="absolute -bottom-24 -left-24 w-64 md:w-96 h-64 md:h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'

defineProps<{ title: string, subtitle: string, cta: string, video: string }>()

onMounted(() => {
  const tl = gsap.timeline({ delay: 0.5 })
  tl.to('.hero-title', { opacity: 1, y: 0, duration: 1.5, ease: 'expo.out' })
    .to('.hero-subtitle', { opacity: 1, duration: 1 }, '-=1')
    .to('.hero-button', { opacity: 1, duration: 0.8 }, '-=0.5')
    .to('.hero-video', { scale: 1, duration: 20, ease: 'none' }, 0)
})
</script>
