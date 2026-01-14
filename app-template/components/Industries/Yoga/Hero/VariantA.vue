<template>
  <section class="relative h-screen w-full bg-background flex items-center justify-center overflow-hidden">
    <!-- Immersive Video Background -->
    <div class="absolute inset-0 z-0">
      <video 
        autoplay 
        muted 
        loop 
        playsinline 
        class="w-full h-full object-cover opacity-30 scale-110 hero-video"
      >
        <source :src="video" type="video/mp4">
      </video>
      <div class="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background/90"></div>
    </div>
    
    <div class="relative z-10 text-center space-y-12 max-w-5xl px-6">
      <div class="space-y-4 overflow-hidden">
        <span class="text-accent font-bold tracking-[0.4em] uppercase text-xs block hero-tag opacity-0 translate-y-10">Inner Balance</span>
        <h1 class="text-6xl md:text-[10vw] font-serif tracking-tight leading-none text-primary hero-title opacity-0 translate-y-20">
          {{ title }}
        </h1>
      </div>
      <p class="text-xl md:text-2xl text-primary/60 max-w-2xl mx-auto hero-subtitle opacity-0">
        {{ subtitle }}
      </p>
      <div class="pt-8">
        <button class="bg-primary text-white px-12 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-accent transition-all duration-700 hover:scale-105 hero-button opacity-0">
          {{ cta }}
        </button>
      </div>
    </div>

    <!-- Floating organic elements -->
    <div class="absolute top-1/4 -left-20 w-96 h-96 bg-accent/5 rounded-full blur-[120px] animate-pulse"></div>
    <div class="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-pulse" style="animation-delay: 2s"></div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'

defineProps<{ title: string, subtitle: string, cta: string, video: string }>()

onMounted(() => {
  const tl = gsap.timeline({ delay: 0.5 })
  tl.to('.hero-tag', { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' })
    .to('.hero-title', { opacity: 1, y: 0, duration: 1.5, ease: 'expo.out' }, '-=0.8')
    .to('.hero-subtitle', { opacity: 1, duration: 1.2 }, '-=1')
    .to('.hero-button', { opacity: 1, duration: 1 }, '-=0.8')
    .to('.hero-video', { scale: 1, duration: 30, ease: 'none' }, 0)
})
</script>
