<template>
  <section class="relative min-h-screen w-full bg-white flex items-center overflow-hidden">
    <div class="flex flex-col lg:flex-row w-full min-h-screen">
      <!-- Text Side -->
      <div class="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-24 z-10 py-24 lg:py-0">
        <div class="max-w-xl space-y-8 md:space-y-10">
          <div class="space-y-4">
            <span class="text-accent font-bold tracking-[0.3em] uppercase text-xs md:text-sm block hero-tag opacity-0">Premium Care</span>
            <h1 class="text-4xl sm:text-5xl md:text-7xl font-serif text-primary leading-tight hero-title opacity-0 -translate-x-10">
              {{ title }}
            </h1>
          </div>
          <p class="text-base sm:text-lg text-primary/60 hero-subtitle opacity-0">
            {{ subtitle }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 md:gap-6 hero-actions opacity-0 pt-4">
            <button class="bg-primary text-white px-8 py-4 text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors duration-300">
              {{ cta }}
            </button>
            <button class="border border-primary/20 text-primary px-8 py-4 text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-primary/5 transition-colors duration-300">
              Our Services
            </button>
          </div>
        </div>
      </div>
      
      <!-- Image Side -->
      <div class="w-full lg:w-1/2 h-80 lg:h-auto relative overflow-hidden flex-1">
        <img 
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef" 
          alt="Physiotherapy" 
          class="w-full h-full object-cover hero-image scale-110"
        >
        <div class="absolute inset-0 bg-accent/10 mix-blend-multiply"></div>
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
  tl.to('.hero-tag', { opacity: 1, duration: 1 })
    .to('.hero-title', { opacity: 1, x: 0, duration: 1.2, ease: 'power4.out' }, '-=0.5')
    .to('.hero-subtitle', { opacity: 1, duration: 1 }, '-=0.8')
    .to('.hero-actions', { opacity: 1, duration: 0.8 }, '-=0.5')
    .to('.hero-image', { scale: 1, duration: 2, ease: 'power2.out' }, 0)
})
</script>
