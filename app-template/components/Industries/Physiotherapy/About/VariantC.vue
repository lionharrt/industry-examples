<template>
  <section class="py-32 bg-primary text-white relative overflow-hidden">
    <!-- Geometric Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" stroke-width="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>

    <div class="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-12">
      <div class="flex justify-center">
        <div class="w-1 h-20 bg-accent animate-pulse"></div>
      </div>
      
      <h2 class="text-3xl md:text-5xl font-light leading-tight about-h2 opacity-0">
        {{ title }}
      </h2>
      
      <p class="text-xl md:text-2xl text-white/60 font-light leading-relaxed about-p opacity-0">
        {{ content }}
      </p>

      <div class="flex flex-wrap justify-center gap-12 pt-12 about-stats opacity-0">
        <div v-for="stat in stats" :key="stat.label" class="text-center">
          <div class="text-5xl font-light mb-2 text-accent">{{ stat.value }}</div>
          <div class="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

defineProps<{ title: string, content: string, stats: Array<{ label: string, value: string }> }>()

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.about-h2',
      start: 'top 80%',
    }
  })
  
  tl.to('.about-h2', { opacity: 1, y: -20, duration: 1 })
    .to('.about-p', { opacity: 1, y: -20, duration: 1 }, '-=0.5')
    .to('.about-stats', { opacity: 1, y: -20, duration: 1 }, '-=0.5')
})
</script>
