<template>
  <section class="min-h-screen flex bg-[#f5f1e9] items-center">
    <div class="w-full max-w-7xl mx-auto flex flex-col lg:flex-row">
      <!-- Image Side -->
      <div class="w-full lg:w-1/2 p-12 lg:p-24 relative overflow-hidden">
        <div class="aspect-square rounded-full overflow-hidden shadow-2xl relative z-10">
          <img src="https://images.unsplash.com/photo-1593111774240-d529f12cf4bb" alt="Zen" class="w-full h-full object-cover">
        </div>
        <div class="absolute -top-20 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>
      
      <!-- Content Side -->
      <div class="w-full lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center space-y-16">
        <div v-for="(t, index) in testimonials" :key="index" class="space-y-8 testimonial-fade opacity-0">
          <div class="space-y-4">
            <p class="text-2xl font-light text-primary/80 leading-relaxed italic">
              "{{ t.quote }}"
            </p>
            <div class="flex items-center gap-4">
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
      start: 'top 80%',
    },
    opacity: 1,
    y: -30,
    duration: 1.5,
    stagger: 0.5,
    ease: 'power2.out'
  })
})
</script>
