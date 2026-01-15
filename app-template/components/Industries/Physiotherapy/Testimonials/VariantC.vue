<template>
  <section class="min-h-[500px] md:min-h-[600px] flex bg-[#f0fff0]">
    <div class="w-full max-w-7xl mx-auto flex flex-col md:flex-row">
      <div class="w-full md:w-1/2 p-10 md:p-12 lg:p-24 flex flex-col justify-center border-b md:border-b-0 md:border-r border-primary/5">
        <h2 class="text-4xl md:text-6xl font-serif text-primary mb-8 md:mb-12 opacity-20 uppercase md:vertical-text">Kind Words</h2>
        <div class="space-y-4">
          <div class="w-12 h-1 bg-accent"></div>
          <p class="text-base md:text-lg text-primary/60 font-medium max-w-sm">Hear from our community about their journey back to full health and mobility.</p>
        </div>
      </div>
      
      <div class="w-full md:w-1/2 p-10 md:p-12 lg:p-24 space-y-16 md:space-y-24 bg-white/50 backdrop-blur-sm">
        <div v-for="(t, index) in testimonials" :key="index" class="space-y-4 md:space-y-6 testimonial-item opacity-0">
          <p class="text-lg md:text-xl font-light text-primary leading-relaxed">
            {{ t.quote }}
          </p>
          <div class="flex items-center gap-4">
            <span class="font-bold uppercase tracking-widest text-[9px] md:text-[10px] text-accent">{{ t.author }}</span>
            <span class="w-4 h-[1px] bg-primary/20"></span>
            <span class="text-[9px] md:text-[10px] uppercase tracking-widest text-primary/30">{{ t.role }}</span>
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
  gsap.to('.testimonial-item', {
    scrollTrigger: {
      trigger: '.testimonial-item',
      start: 'top 85%',
    },
    opacity: 1,
    y: -20,
    duration: 1,
    stagger: 0.3,
    ease: 'power2.out'
  })
})
</script>

<style scoped>
@media (min-width: 768px) {
  .vertical-text {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    transform: rotate(180deg);
  }
}
</style>
