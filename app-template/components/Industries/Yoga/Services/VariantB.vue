<template>
  <section class="py-32 bg-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-4">
        <div v-for="(service, index) in services" :key="service.name" 
             class="group relative h-[500px] overflow-hidden bg-[#f5f1e9] service-tile opacity-0"
             :class="{ 'lg:col-span-2': index === 2 }"
        >
          <!-- Subtle Background Texture -->
          <div class="absolute inset-0 opacity-5 group-hover:opacity-20 transition-opacity duration-1000">
            <img 
              :src="index === 0 ? 'https://images.unsplash.com/photo-1545208393-2160281b8f55' : (index === 1 ? 'https://images.unsplash.com/photo-1599447421416-3414500d18a5' : 'https://images.unsplash.com/photo-1506126613408-eca07ce68773')" 
              class="w-full h-full object-cover grayscale"
            >
          </div>
          
          <div class="relative z-10 p-16 h-full flex flex-col justify-center max-w-2xl mx-auto text-center items-center">
            <span class="text-accent text-[9px] font-black tracking-[0.4em] uppercase mb-6">Experience 0{{ index + 1 }}</span>
            <h3 class="text-4xl md:text-6xl font-serif text-primary mb-8">{{ service.name }}</h3>
            <p class="text-primary/40 leading-relaxed font-light mb-10 group-hover:text-primary transition-colors duration-500">
              {{ service.description }}
            </p>
            <div class="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
              <button class="bg-primary text-white px-10 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-accent transition-colors">
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
      start: 'top 80%',
    },
    opacity: 1,
    duration: 1.5,
    stagger: 0.4,
    ease: 'power4.out'
  })
})
</script>
