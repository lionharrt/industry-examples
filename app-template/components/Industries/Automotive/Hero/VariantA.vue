<template>
  <section class="relative h-screen w-full bg-[#0A0A0A] text-primary flex items-center justify-center overflow-hidden">
    <!-- Full-screen video-style background -->
    <div class="absolute inset-0 z-0">
      <ParallaxImage src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=2000" speed="0.2" />
      <div class="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-transparent to-[#0A0A0A]"></div>
    </div>
    
    <div class="relative z-10 text-center space-y-12 max-w-7xl px-6">
      <div class="overflow-hidden">
        <h1 class="text-[12vw] font-black italic tracking-tighter leading-none hero-title opacity-0 translate-y-full uppercase text-primary drop-shadow-2xl">
          {{ title }}
        </h1>
      </div>
      <div class="flex items-center justify-center gap-8 hero-stats opacity-0">
        <div class="h-[2px] w-24 bg-[#E60000]"></div>
        <p class="text-xl font-bold uppercase tracking-[0.5em] text-[#B4B4B4]">
          PERFORMANCE_REIMAGINED
        </p>
        <div class="h-[2px] w-24 bg-[#E60000]"></div>
      </div>
      <p class="text-2xl font-light italic max-w-3xl mx-auto hero-subtitle opacity-0">
        {{ subtitle }}
      </p>
      <div class="pt-12">
        <button class="group relative px-12 py-5 overflow-hidden hero-button opacity-0">
          <div class="absolute inset-0 bg-[#E60000] skew-x-[-15deg] group-hover:bg-white transition-colors duration-500"></div>
          <span class="relative z-10 text-primary group-hover:text-black font-black uppercase italic tracking-widest text-xl">{{ cta }}</span>
        </button>
      </div>
    </div>

    <!-- UI Elements -->
    <div class="absolute bottom-12 left-12 flex flex-col gap-4 opacity-40">
      <div class="flex gap-2">
        <div v-for="i in 5" :key="i" class="w-2 h-10 border border-white" :class="{ 'bg-white': i < 4 }"></div>
      </div>
      <p class="text-[10px] font-black uppercase tracking-widest">DRIVE_MODE: SPORT+</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'

defineProps<{ title: string, subtitle: string, cta: string }>()

onMounted(() => {
  const tl = gsap.timeline({ delay: 0.5 })
  tl.to('.hero-title', { opacity: 1, y: 0, duration: 1.2, ease: 'power4.out' })
    .to('.hero-stats', { opacity: 1, duration: 0.8 }, '-=0.5')
    .to('.hero-subtitle', { opacity: 1, duration: 0.8 }, '-=0.5')
    .to('.hero-button', { opacity: 1, duration: 0.5 }, '-=0.3')
})
</script>
