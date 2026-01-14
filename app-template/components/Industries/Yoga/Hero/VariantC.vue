<template>
  <section class="relative h-screen w-full bg-[#f5f1e9] flex items-center justify-center overflow-hidden">
    <!-- Abstract Sand Dunes / Flow -->
    <div class="absolute inset-0 z-0">
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none" class="absolute bottom-0 w-full h-2/3 text-accent/5 fill-current flow-path-1">
        <path d="M0 1000 V800 Q250 700 500 800 T1000 800 V1000 Z" />
      </svg>
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none" class="absolute bottom-0 w-full h-1/2 text-accent/10 fill-current flow-path-2">
        <path d="M0 1000 V900 Q250 800 500 900 T1000 900 V1000 Z" />
      </svg>
    </div>
    
    <div class="relative z-10 flex flex-col items-center text-center px-6">
      <div class="mb-16 hero-circle opacity-0">
        <div class="w-32 h-32 rounded-full border border-accent/20 flex items-center justify-center p-4">
          <div class="w-full h-full rounded-full bg-accent/10 animate-ping"></div>
        </div>
      </div>
      
      <h1 class="text-4xl md:text-6xl font-light text-primary max-w-4xl leading-tight mb-12 hero-text opacity-0">
        {{ title }}
      </h1>
      
      <div class="flex flex-col md:flex-row gap-8 items-center hero-actions opacity-0">
        <button class="bg-accent text-white px-12 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-primary transition-all shadow-xl shadow-accent/20">
          {{ cta }}
        </button>
        <button class="text-primary font-bold uppercase tracking-widest text-xs flex items-center gap-3 group">
          Watch Intro
          <span class="w-8 h-8 rounded-full border border-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">▶</span>
        </button>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 hero-scroll opacity-0">
      <div class="text-[9px] font-black uppercase tracking-[0.4em] text-primary/20 rotate-90 whitespace-nowrap mb-8">Scroll to Flow</div>
      <div class="w-[1px] h-12 bg-gradient-to-b from-primary/20 to-transparent"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'

defineProps<{ title: string, cta: string }>()

onMounted(() => {
  const tl = gsap.timeline({ delay: 0.5 })
  tl.to('.hero-circle', { opacity: 1, scale: 1.2, duration: 1.5, ease: 'power2.out' })
    .to('.hero-text', { opacity: 1, y: -20, duration: 1.2 }, '-=0.8')
    .to('.hero-actions', { opacity: 1, duration: 1 }, '-=0.8')
    .to('.hero-scroll', { opacity: 1, y: -10, duration: 1 }, '-=0.5')
  
  gsap.to('.flow-path-1', { x: 50, duration: 20, repeat: -1, yoyo: true, ease: 'sine.inOut' })
  gsap.to('.flow-path-2', { x: -50, duration: 15, repeat: -1, yoyo: true, ease: 'sine.inOut' })
})
</script>
