<template>
  <section class="py-16 md:py-24 bg-primary text-white overflow-hidden px-6">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        <div v-for="(t, index) in testimonials" :key="index" 
             class="space-y-6 md:space-y-8 testimonial-card opacity-0 md:translate-x-10"
        >
          <div class="text-accent">
            <svg viewBox="0 0 24 24" class="w-10 h-10 md:w-12 md:h-12 fill-current">
              <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017C10.4647 13 10.017 12.5523 10.017 12V5C10.017 4.44772 10.4647 4 11.017 4H19.017C20.6739 4 22.017 5.34315 22.017 7V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM3.01697 21L3.01697 18C3.01697 16.8954 3.91241 16 5.01697 16H8.01697C8.56925 16 9.01697 15.5523 9.01697 15V9C9.01697 8.44772 8.56925 8 8.01697 8H4.01697C3.46469 8 3.01697 8.44772 3.01697 9V12C3.01697 12.5523 2.56925 13 2.01697 13H0.0169678C-0.535317 13 -0.983032 12.5523 -0.983032 12V5C-0.983032 4.44772 -0.535317 4 0.0169678 4H8.01697C9.67382 4 11.017 5.34315 11.017 7V15C11.017 18.3137 8.33068 21 5.01697 21H3.01697Z" />
            </svg>
          </div>
          <p class="text-2xl md:text-3xl font-serif italic leading-tight font-light">{{ t.quote }}</p>
          <div class="flex items-center gap-4">
            <div class="w-10 md:w-12 h-[1px] md:h-1 bg-accent"></div>
            <div>
              <div class="font-bold uppercase tracking-widest text-[10px] md:text-xs">{{ t.author }}</div>
              <div class="text-white/40 text-[9px] md:text-[10px] mt-1">{{ t.role }}</div>
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
  gsap.to('.testimonial-card', {
    scrollTrigger: {
      trigger: '.testimonial-card',
      start: 'top 85%',
    },
    opacity: 1,
    x: 0,
    duration: 1.2,
    stagger: 0.4,
    ease: 'power3.out'
  })
})
</script>
