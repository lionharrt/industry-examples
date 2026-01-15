<template>
  <section class="min-h-screen flex bg-[#f5f1e9] items-center px-6 py-16 md:py-0">
    <div class="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-0">
      <!-- Image Side -->
      <div class="w-full lg:w-1/2 relative flex items-center justify-center p-4 lg:p-24 overflow-hidden">
        <div class="aspect-square w-full max-w-md rounded-full overflow-hidden shadow-2xl relative z-10 border-4 md:border-8 border-white/50">
          <img src="https://images.unsplash.com/photo-1588286840104-8957b019727f" alt="Zen" class="w-full h-full object-cover">
        </div>
        <div class="absolute -top-10 -left-10 w-64 md:w-80 h-64 md:h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>
      
      <!-- Content Side -->
      <div class="w-full lg:w-1/2 flex flex-col justify-center space-y-12 md:space-y-16 lg:p-24">
        <div v-for="(t, index) in testimonials" :key="index" class="space-y-6 md:space-y-8 testimonial-fade opacity-0 text-center lg:text-left">
          <div class="space-y-4">
            <p class="text-xl md:text-2xl font-light text-primary/80 leading-relaxed italic px-4 lg:px-0">
              "{{ t.quote }}"
            </p>
            <div class="flex items-center justify-center lg:justify-start gap-4">
              <div class="w-8 h-[1px] bg-accent"></div>
              <span class="font-bold uppercase tracking-widest text-[9px] text-primary">{{ t.author }}</span>
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

defineProps<{ testimonials: Array<{ quote: string, author: string, role: string }> }>()

onMounted(() => {
  gsap.to('.testimonial-fade', {
    scrollTrigger: {
      trigger: '.testimonial-fade',
      start: 'top 85%',
    },
    opacity: 1,
    y: -20,
    duration: 1.5,
    stagger: 0.5,
    ease: 'power2.out'
  })
})
</script>
