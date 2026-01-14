<template>
  <section class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-20 space-y-4">
        <h2 class="text-4xl md:text-5xl font-serif text-primary">Our Specialists</h2>
        <p class="text-primary/50 max-w-xl mx-auto">Meet the experts dedicated to your physical health and wellbeing.</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div v-for="(member, index) in team" :key="index" 
             class="group relative team-card opacity-0 translate-y-10"
        >
          <div class="aspect-[4/5] overflow-hidden rounded-2xl mb-6">
            <img :src="member.image" :alt="member.name" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105">
          </div>
          <div class="space-y-2">
            <h3 class="text-2xl font-serif text-primary">{{ member.name }}</h3>
            <p class="text-accent font-bold uppercase tracking-widest text-xs">{{ member.role }}</p>
          </div>
          
          <div class="absolute top-6 right-6 flex flex-col gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div class="w-10 h-10 rounded-full bg-white/90 backdrop-blur shadow-lg flex items-center justify-center hover:bg-accent hover:text-white transition-colors cursor-pointer">
              <svg viewBox="0 0 24 24" class="w-5 h-5 fill-none stroke-current" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
            </div>
          </div>
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

defineProps<{ team: Array<{ name: string, role: string, image: string }> }>()

onMounted(() => {
  gsap.to('.team-card', {
    scrollTrigger: {
      trigger: '.team-card',
      start: 'top 85%',
    },
    opacity: 1,
    y: 0,
    duration: 1.2,
    stagger: 0.3,
    ease: 'power3.out'
  })
})
</script>
