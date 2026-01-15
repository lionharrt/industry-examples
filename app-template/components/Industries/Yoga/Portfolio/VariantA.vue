<template>
  <section class="py-16 md:py-32 bg-white overflow-hidden px-6">
    <div class="max-w-7xl mx-auto">
      <div class="mb-12 md:mb-20 space-y-3 md:space-y-4 text-center">
        <span class="text-accent font-bold uppercase tracking-[0.4em] text-[8px] md:text-[9px]">Our Sanctuary</span>
        <h2 class="text-3xl md:text-5xl font-serif text-primary">Space for Stillness</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 h-auto md:h-[800px]">
        <div v-for="(item, index) in items" :key="index" 
             class="relative overflow-hidden group portfolio-piece opacity-0 min-h-[300px] md:min-h-0"
             :class="index === 0 ? 'md:col-span-8 h-[400px] md:h-auto' : 'md:col-span-4 h-[300px] md:h-auto'"
        >
          <img :src="item.image" :alt="item.title" class="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110">
          <div class="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-700 backdrop-blur-[2px] flex items-center justify-center p-8 md:p-12">
            <div class="text-white text-center transform scale-90 group-hover:scale-100 transition-transform duration-700">
              <h3 class="text-2xl md:text-4xl font-serif mb-3 md:mb-4 leading-tight">{{ item.title }}</h3>
              <div class="w-10 md:w-12 h-[1px] bg-accent mx-auto mb-4 md:mb-6"></div>
              <p class="text-[9px] md:text-[10px] font-bold uppercase tracking-widest">Explore Atmosphere</p>
            </div>
          </div>
          <!-- Mobile Tap Indicator -->
          <div class="absolute top-4 right-4 md:hidden text-white/50">
            <svg viewBox="0 0 24 24" class="w-5 h-5 fill-none stroke-current" stroke-width="2"><path d="M15 3l6 6-6 6M3 9h18" /></svg>
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

defineProps<{ items: Array<{ title: string, image: string }> }>()

onMounted(() => {
  gsap.to('.portfolio-piece', {
    scrollTrigger: {
      trigger: '.portfolio-piece',
      start: 'top 85%',
    },
    opacity: 1,
    scale: 1,
    duration: 1.5,
    stagger: 0.3,
    ease: 'power4.out'
  })
})
</script>
