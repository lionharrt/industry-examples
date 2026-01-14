<template>
  <section class="py-32 bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-24 items-center">
        <div class="space-y-12 about-content opacity-0 -translate-x-10">
          <div class="space-y-6">
            <span class="text-accent font-bold uppercase tracking-[0.3em] text-xs">Our Vision</span>
            <h2 class="text-5xl font-serif text-primary leading-tight">{{ title }}</h2>
          </div>
          <p class="text-xl text-primary/60 leading-relaxed font-light">
            {{ content }}
          </p>
          <div class="grid grid-cols-3 gap-12 pt-8">
            <div v-for="stat in stats" :key="stat.label" class="space-y-3">
              <div class="text-5xl font-serif text-accent">{{ stat.value }}</div>
              <div class="text-[9px] font-black uppercase tracking-[0.2em] text-primary/30">{{ stat.label }}</div>
            </div>
          </div>
        </div>
        
        <div class="relative about-image-container opacity-0 translate-x-10">
          <div class="aspect-[4/5] rounded-[100px] overflow-hidden shadow-2xl relative z-10">
            <img src="https://images.unsplash.com/photo-1599447421416-3414500d18a5" alt="About Zen Flow" class="w-full h-full object-cover scale-110 about-img">
          </div>
          <!-- Abstract organic shadow -->
          <div class="absolute -top-10 -right-10 w-full h-full bg-accent/5 rounded-[100px] -z-10 blur-2xl"></div>
          <div class="absolute bottom-12 -left-12 w-48 h-48 bg-primary/5 rounded-full -z-10 blur-3xl animate-pulse"></div>
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
      start: 'top 80%',
    },
    opacity: 1,
    x: 0,
    duration: 1.5,
    ease: 'power3.out'
  })
  
  gsap.to('.about-image-container', {
    scrollTrigger: {
      trigger: '.about-image-container',
      start: 'top 80%',
    },
    opacity: 1,
    x: 0,
    duration: 1.5,
    ease: 'power3.out'
  })

  gsap.to('.about-img', {
    scrollTrigger: {
      trigger: '.about-img',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    },
    scale: 1,
    y: 50
  })
})
</script>
