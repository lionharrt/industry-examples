<template>
  <section class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-1">
        <div v-for="(service, index) in services" :key="service.name" 
             class="group relative h-[400px] overflow-hidden bg-primary service-item opacity-0"
             :class="{ 'lg:col-span-2': index === 2 }"
        >
          <!-- Background Image (Visible on Hover) -->
          <div class="absolute inset-0 z-0">
            <img 
              :src="index === 0 ? 'https://images.unsplash.com/photo-1576091160550-2173dba999ef' : (index === 1 ? 'https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d' : 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d')" 
              class="w-full h-full object-cover opacity-20 group-hover:opacity-60 transition-opacity duration-700 scale-110 group-hover:scale-100"
            >
          </div>
          
          <div class="relative z-10 p-12 h-full flex flex-col justify-end">
            <span class="text-accent text-sm font-bold tracking-[0.3em] uppercase mb-4">Service 0{{ index + 1 }}</span>
            <h3 class="text-4xl font-serif text-white mb-6">{{ service.name }}</h3>
            <p class="text-white/40 max-w-md group-hover:text-white transition-colors duration-500">
              {{ service.description }}
            </p>
            <div class="mt-8 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <button class="text-accent font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                Discover More <span class="text-xl">→</span>
              </button>
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

defineProps<{ services: Array<{ name: string, description: string }> }>()

onMounted(() => {
  gsap.to('.service-item', {
    scrollTrigger: {
      trigger: '.service-item',
      start: 'top 80%',
    },
    opacity: 1,
    duration: 1.5,
    stagger: 0.3,
    ease: 'power4.out'
  })
})
</script>
