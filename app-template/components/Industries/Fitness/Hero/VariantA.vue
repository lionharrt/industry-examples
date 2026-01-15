<template>
  <section class="relative min-h-screen w-full bg-black text-white flex items-center justify-center overflow-hidden py-16 md:py-0">
    <!-- Sharp background pattern -->
    <div class="absolute inset-0 z-0 overflow-hidden opacity-10">
      <div v-for="i in 20" :key="i" class="absolute h-[1px] w-full bg-accent" :style="{ top: (i * 5) + '%' }"></div>
      <div v-for="i in 20" :key="i" class="absolute w-[1px] h-full bg-accent" :style="{ left: (i * 5) + '%' }"></div>
    </div>
    
    <div class="relative z-10 text-center space-y-6 md:space-y-10 max-w-5xl px-6">
      <div class="inline-block bg-accent text-black px-3 py-1 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-2">
        EST. 2026 // KINETIC_FORCE
      </div>
      <div class="overflow-hidden">
        <h1 class="text-5xl sm:text-7xl md:text-9xl font-black italic tracking-tighter leading-[0.9] text-white uppercase hero-title opacity-0 translate-y-full">
          {{ title?.split(' ')[0] }}<br/>
          <span class="text-accent">{{ title?.split(' ').slice(1).join(' ') }}</span>
        </h1>
      </div>
      <p class="text-sm md:text-xl font-bold uppercase tracking-widest hero-subtitle opacity-0 text-white/80 max-w-xl mx-auto">
        {{ subtitle }}
      </p>
      <div class="pt-6 md:pt-10">
        <button class="bg-accent text-black px-8 md:px-12 py-4 md:py-5 text-sm md:text-lg font-black uppercase italic tracking-widest hover:bg-white transition-all duration-300 hero-button opacity-0 border-2 md:border-4 border-accent hover:border-white shadow-[4px_4px_0_0_#ffffff] hover:shadow-none hover:translate-x-1 hover:translate-y-1">
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
  tl.to('.hero-title', { opacity: 1, y: 0, duration: 1, ease: 'expo.out' })
    .to('.hero-subtitle', { opacity: 1, duration: 0.8 }, '-=0.5')
    .to('.hero-button', { opacity: 1, duration: 0.5 }, '-=0.3')
})
</script>
