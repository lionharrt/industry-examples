<template>
  <section class="h-screen relative bg-primary overflow-hidden flex items-center">
    <!-- Ethereal Flow Background -->
    <div class="absolute inset-0 opacity-30">
      <div class="absolute inset-0 bg-accent/10 mix-blend-overlay"></div>
      <svg viewBox="0 0 1000 1000" class="w-[150%] h-[150%] absolute top-[-25%] left-[-25%] animate-spin-slow-yoga opacity-20">
        <circle cx="500" cy="500" r="400" fill="none" stroke="white" stroke-width="0.5" stroke-dasharray="4 10" />
        <circle cx="500" cy="500" r="300" fill="none" stroke="white" stroke-width="0.5" stroke-dasharray="2 20" />
      </svg>
    </div>
    
    <div class="max-w-7xl mx-auto px-6 w-full relative z-10">
      <div class="bg-white p-20 rounded-[100px] max-w-2xl shadow-2xl contact-card-yoga opacity-0">
        <h2 class="text-6xl font-serif text-primary mb-12 italic leading-tight">{{ title }}</h2>
        
        <div class="space-y-10 mb-16 border-l border-primary/5 pl-12">
          <div class="group">
            <span class="text-accent font-bold text-xs block mb-2 uppercase tracking-[0.3em]">E.</span>
            <span class="text-3xl font-light text-primary/70 group-hover:text-primary transition-colors cursor-pointer">{{ email }}</span>
          </div>
          <div class="group">
            <span class="text-accent font-bold text-xs block mb-2 uppercase tracking-[0.3em]">P.</span>
            <span class="text-3xl font-light text-primary/70 group-hover:text-primary transition-colors cursor-pointer">{{ phone }}</span>
          </div>
          <div class="group">
            <span class="text-accent font-bold text-xs block mb-2 uppercase tracking-[0.3em]">A.</span>
            <span class="text-2xl font-light text-primary/70 group-hover:text-primary transition-colors cursor-pointer">45 Mindfulness Way, Suite 108, CA 90210</span>
          </div>
        </div>
        
        <div class="flex gap-6">
          <button class="flex-1 bg-accent text-white py-6 font-bold uppercase tracking-widest text-[10px] rounded-full hover:bg-primary transition-all duration-700 shadow-xl shadow-accent/20">Book Virtual Intro</button>
          <button class="w-20 h-20 border border-primary/5 rounded-full flex items-center justify-center hover:bg-primary/5 transition-all">
            <svg viewBox="0 0 24 24" class="w-8 h-8 fill-none stroke-current text-primary" stroke-width="1"><path d="M9 18l6-6-6-6" /></svg>
          </button>
        </div>
      </div>
    </div>
    
    <!-- Giant Backdrop Text -->
    <div class="absolute top-1/2 -right-40 -translate-y-1/2 text-[25vw] font-serif text-white/5 pointer-events-none whitespace-nowrap italic select-none">
      ZEN FLOW
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

defineProps<{ title: string, email: string, phone: string }>()

onMounted(() => {
  gsap.to('.contact-card-yoga', {
    scrollTrigger: {
      trigger: '.contact-card-yoga',
      start: 'top 80%',
    },
    opacity: 1,
    y: -50,
    duration: 2,
    ease: 'expo.out'
  })
})
</script>

<style scoped>
.animate-spin-slow-yoga {
  animation: spin 60s linear infinite;
}
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
