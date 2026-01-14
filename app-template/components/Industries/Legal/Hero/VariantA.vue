<template>
  <section class="relative h-screen w-full bg-background text-white flex items-center justify-center overflow-hidden">
    <!-- Abstract Architectural Background -->
    <div class="absolute inset-0 z-0">
      <ParallaxImage src="https://images.unsplash.com/photo-1453904300235-0f2f60b15b5d?auto=format&fit=crop&w=2000" speed="0.1" />
      <div class="absolute inset-0 bg-background/80 backdrop-blur-[2px]"></div>
    </div>
    
    <div class="relative z-10 text-center space-y-12 max-w-5xl px-6">
      <div class="overflow-hidden">
        <h1 class="text-6xl md:text-8xl font-serif italic tracking-tighter leading-tight hero-title opacity-0 translate-y-full">
          {{ title }}
        </h1>
      </div>
      <div class="h-px w-32 bg-accent mx-auto hero-line scale-x-0"></div>
      <p class="text-xl font-light uppercase tracking-[0.4em] text-secondary hero-subtitle opacity-0">
        {{ subtitle }}
      </p>
      <div class="pt-12">
        <button class="border border-accent text-accent px-12 py-4 text-sm font-black uppercase tracking-widest hover:bg-accent hover:text-background transition-all duration-700 hero-button opacity-0">
          {{ cta }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'

defineProps<{ title: string, subtitle: string, cta: string }>()

onMounted(() => {
  const tl = gsap.timeline({ delay: 0.5 })
  tl.to('.hero-title', { opacity: 1, y: 0, duration: 1.5, ease: 'power4.out' })
    .to('.hero-line', { scaleX: 1, duration: 1 }, '-=0.5')
    .to('.hero-subtitle', { opacity: 1, duration: 1 }, '-=0.5')
    .to('.hero-button', { opacity: 1, duration: 0.8 }, '-=0.3')
})
</script>
