<template>
  <section class="py-32 bg-primary text-white">
    <div class="max-w-5xl mx-auto px-6">
      <div class="space-y-0 divide-y divide-white/5">
        <div 
          v-for="(service, index) in services" 
          :key="service.name"
          class="group py-20 flex flex-col md:flex-row md:items-center justify-between gap-12 service-list-item opacity-0"
        >
          <div class="flex items-start gap-12">
            <span class="text-accent font-serif italic text-3xl opacity-40 group-hover:opacity-100 transition-opacity duration-500">0{{ index + 1 }}</span>
            <div class="space-y-4">
              <h3 class="text-4xl md:text-5xl font-light tracking-tight group-hover:translate-x-4 transition-transform duration-700">{{ service.name }}</h3>
              <p class="text-white/30 max-w-lg font-light leading-relaxed group-hover:text-white/60 transition-colors duration-500">{{ service.description }}</p>
            </div>
          </div>
          
          <div class="relative w-20 h-20 flex items-center justify-center">
            <div class="absolute inset-0 border border-white/10 rounded-full group-hover:scale-125 group-hover:bg-accent group-hover:border-accent transition-all duration-700"></div>
            <svg viewBox="0 0 24 24" class="w-8 h-8 fill-none stroke-current relative z-10 transition-transform duration-500 group-hover:rotate-45" stroke-width="1">
              <path d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
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

defineProps<{ services: Array<{ name: string, description: string }> }>()

onMounted(() => {
  gsap.to('.service-list-item', {
    scrollTrigger: {
      trigger: '.service-list-item',
      start: 'top 85%',
    },
    opacity: 1,
    y: -30,
    duration: 1.5,
    stagger: 0.3,
    ease: 'expo.out'
  })
})
</script>
