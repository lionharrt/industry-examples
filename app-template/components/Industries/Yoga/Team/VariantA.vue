<template>
  <section class="py-16 md:py-32 bg-white px-6">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-12 md:mb-24 space-y-4 md:space-y-6">
        <span class="text-accent font-bold uppercase tracking-[0.4em] text-[9px] md:text-[10px]">Soul Guides</span>
        <h2 class="text-3xl md:text-5xl font-serif text-primary leading-tight">Master Teachers</h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-16 max-w-5xl mx-auto">
        <div v-for="(member, index) in team" :key="index" 
             class="group relative teacher-card opacity-0 translate-y-10"
        >
          <div class="aspect-[4/5] overflow-hidden rounded-[60px] md:rounded-[80px] mb-6 md:mb-8 relative shadow-xl">
            <img :src="member.image" :alt="member.name" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.5s] group-hover:scale-110">
            <div class="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <div class="text-center space-y-2 md:space-y-3">
            <h3 class="text-2xl md:text-3xl font-serif text-primary leading-tight">{{ member.name }}</h3>
            <p class="text-accent font-bold uppercase tracking-widest text-[8px] md:text-[9px]">{{ member.role }}</p>
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
  gsap.to('.teacher-card', {
    scrollTrigger: {
      trigger: '.teacher-card',
      start: 'top 85%',
    },
    opacity: 1,
    y: 0,
    duration: 1.5,
    stagger: 0.4,
    ease: 'power3.out'
  })
})
</script>
