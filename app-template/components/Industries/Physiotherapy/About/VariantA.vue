<template>
  <section class="py-24 bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-20 items-center">
        <div class="space-y-10 about-content opacity-0 -translate-x-10">
          <h2 class="text-4xl md:text-5xl font-serif text-primary">{{ title }}</h2>
          <p class="text-xl text-primary/70 leading-relaxed">
            {{ content }}
          </p>
          <div class="grid grid-cols-3 gap-8 pt-6">
            <div v-for="stat in stats" :key="stat.label" class="space-y-2">
              <div class="text-4xl font-serif text-accent">{{ stat.value }}</div>
              <div class="text-xs font-bold uppercase tracking-widest text-primary/40">{{ stat.label }}</div>
            </div>
          </div>
        </div>
        
        <div class="relative about-image opacity-0 translate-x-10">
          <div class="aspect-square rounded-2xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d" alt="About" class="w-full h-full object-cover">
          </div>
          <div class="absolute -bottom-10 -left-10 w-64 h-64 bg-accent/20 rounded-full -z-10 blur-3xl"></div>
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
    duration: 1.2,
    ease: 'power3.out'
  })
  
  gsap.to('.about-image', {
    scrollTrigger: {
      trigger: '.about-image',
      start: 'top 80%',
    },
    opacity: 1,
    x: 0,
    duration: 1.2,
    ease: 'power3.out'
  })
})
</script>
