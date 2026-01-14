<template>
  <section class="py-24 bg-[#f0fff0]">
    <div class="max-w-5xl mx-auto px-6">
      <div class="space-y-0">
        <div 
          v-for="(service, index) in services" 
          :key="service.name"
          class="group border-b border-primary/10 py-16 flex flex-col md:flex-row md:items-center justify-between gap-8 service-row opacity-0"
        >
          <div class="flex items-start gap-8">
            <span class="text-accent font-serif text-2xl">0{{ index + 1 }}</span>
            <div class="space-y-2">
              <h3 class="text-3xl font-light text-primary group-hover:text-accent transition-colors duration-300">{{ service.name }}</h3>
              <p class="text-primary/50 max-w-md">{{ service.description }}</p>
            </div>
          </div>
          
          <div class="relative w-12 h-12 flex items-center justify-center">
            <div class="absolute inset-0 border border-primary/10 rounded-full group-hover:scale-125 group-hover:bg-accent group-hover:border-accent transition-all duration-500"></div>
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-none stroke-current relative z-10 transition-colors group-hover:text-white" stroke-width="1">
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
  gsap.to('.service-row', {
    scrollTrigger: {
      trigger: '.service-row',
      start: 'top 85%',
    },
    opacity: 1,
    y: -20,
    duration: 1.2,
    stagger: 0.3,
    ease: 'expo.out'
  })
})
</script>
