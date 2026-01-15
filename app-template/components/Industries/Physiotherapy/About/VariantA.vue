<template>
  <section class="py-16 md:py-24 bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
        <div class="space-y-8 md:space-y-10 about-content opacity-0 lg:-translate-x-10">
          <h2 class="text-3xl md:text-5xl font-serif text-primary leading-tight">{{ title }}</h2>
          <p class="text-lg md:text-xl text-primary/70 leading-relaxed font-light">
            {{ content }}
          </p>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8 pt-4 md:pt-6">
            <div v-for="stat in stats" :key="stat.label" class="space-y-1 md:space-y-2">
              <div class="text-3xl md:text-4xl font-serif text-accent">{{ stat.value }}</div>
              <div class="text-[10px] font-bold uppercase tracking-widest text-primary/40">{{ stat.label }}</div>
            </div>
          </div>
        </div>
        
        <div class="relative about-image opacity-0 lg:translate-x-10 mt-8 lg:mt-0">
          <div class="aspect-square rounded-2xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d" alt="About" class="w-full h-full object-cover">
          </div>
          <div class="absolute -bottom-6 md:-bottom-10 -left-6 md:-left-10 w-48 md:w-64 h-48 md:h-64 bg-accent/20 rounded-full -z-10 blur-3xl"></div>
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
  gsap.to('.about-content', {
    scrollTrigger: {
      trigger: '.about-content',
      start: 'top 85%',
    },
    opacity: 1,
    x: 0,
    duration: 1.2,
    ease: 'power3.out'
  })
  
  gsap.to('.about-image', {
    scrollTrigger: {
      trigger: '.about-image',
      start: 'top 85%',
    },
    opacity: 1,
    x: 0,
    duration: 1.2,
    ease: 'power3.out'
  })
})
</script>
