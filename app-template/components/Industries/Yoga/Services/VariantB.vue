<template>
  <section class="py-16 md:py-32 bg-white px-6">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div v-for="(service, index) in services" :key="service.name" 
             class="group relative h-[400px] md:h-[500px] overflow-hidden bg-[#f5f1e9] service-tile opacity-0"
             :class="{ 'md:col-span-2': index === 2 }"
        >
          <!-- Subtle Background Texture -->
          <div class="absolute inset-0 opacity-5 group-hover:opacity-20 transition-opacity duration-1000">
            <img 
              :src="index === 0 ? 'https://images.unsplash.com/photo-1518310383802-640c2de311b2' : (index === 1 ? 'https://images.unsplash.com/photo-1599447421416-3414500d18a5' : 'https://images.unsplash.com/photo-1506126613408-eca07ce68773')" 
              class="w-full h-full object-cover grayscale"
            >
          </div>
          
          <div class="relative z-10 p-8 md:p-16 h-full flex flex-col justify-center max-w-2xl mx-auto text-center items-center">
            <span class="text-accent text-[8px] md:text-[9px] font-black tracking-[0.4em] uppercase mb-4 md:mb-6">Experience 0{{ index + 1 }}</span>
            <h3 class="text-3xl md:text-6xl font-serif text-primary mb-4 md:mb-8 leading-tight">{{ service.name }}</h3>
            <p class="text-sm md:text-base text-primary/40 leading-relaxed font-light mb-8 md:mb-10 group-hover:text-primary transition-colors duration-500 line-clamp-3 md:line-clamp-none">
              {{ service.description }}
            </p>
            <div class="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
              <button class="bg-primary text-white px-8 md:px-10 py-3 md:py-4 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest hover:bg-accent transition-colors">
                Book Session
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
  gsap.to('.service-tile', {
    scrollTrigger: {
      trigger: '.service-tile',
      start: 'top 85%',
    },
    opacity: 1,
    duration: 1.5,
    stagger: 0.4,
    ease: 'power4.out'
  })
})
</script>
