<template>
  <section class="h-[800px] relative bg-primary overflow-hidden">
    <!-- Abstract Map Representation -->
    <div class="absolute inset-0 opacity-20">
      <div class="absolute inset-0 bg-accent/20 mix-blend-overlay"></div>
      <div class="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
    </div>
    
    <div class="max-w-7xl mx-auto px-6 h-full flex items-center">
      <div class="bg-white p-16 rounded-[60px] max-w-lg shadow-2xl relative z-10 contact-card opacity-0 translate-y-20">
        <h2 class="text-5xl font-serif text-primary mb-8">{{ title }}</h2>
        
        <div class="space-y-8 mb-12">
          <div class="flex gap-6">
            <span class="text-accent font-bold text-lg">E.</span>
            <span class="text-xl font-light text-primary/70">{{ email }}</span>
          </div>
          <div class="flex gap-6">
            <span class="text-accent font-bold text-lg">P.</span>
            <span class="text-xl font-light text-primary/70">{{ phone }}</span>
          </div>
          <div class="flex gap-6">
            <span class="text-accent font-bold text-lg">A.</span>
            <span class="text-xl font-light text-primary/70">123 Wellness Blvd, Medical District, NY 10001</span>
          </div>
        </div>
        
        <div class="flex gap-4">
          <button class="flex-1 bg-accent text-white py-4 font-bold uppercase tracking-widest text-xs rounded-2xl hover:bg-primary transition-all">Book Now</button>
          <button class="w-14 h-14 border border-primary/10 rounded-2xl flex items-center justify-center hover:bg-primary/5 transition-all">
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-none stroke-current text-primary" stroke-width="2"><path d="M9 18l6-6-6-6" /></svg>
          </button>
        </div>
      </div>
    </div>
    
    <!-- Large Background Text -->
    <div class="absolute -bottom-20 -right-20 text-[20vw] font-serif text-white/5 pointer-events-none whitespace-nowrap">
      LUMINA PHYSIO
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
  gsap.to('.contact-card', {
    scrollTrigger: {
      trigger: '.contact-card',
      start: 'top 80%',
    },
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: 'expo.out'
  })
})
</script>
