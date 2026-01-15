<template>
  <section class="py-16 md:py-32 bg-primary text-white overflow-hidden relative px-6">
    <!-- Abstract circular background element -->
    <div class="absolute -top-40 -right-40 w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full border border-white/5 pointer-events-none hidden md:block"></div>
    
    <div class="max-w-7xl mx-auto relative">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
        <div class="space-y-6 md:space-y-10 text-center lg:text-left">
          <h2 class="text-4xl md:text-8xl font-serif tracking-tighter leading-none italic opacity-20">Invest <br class="hidden md:block"/> In Soul.</h2>
          <p class="text-lg md:text-xl text-white/40 font-light leading-relaxed max-w-md italic mx-auto lg:mx-0">Choosing a membership is choosing yourself. Every session is a step closer to profound internal peace.</p>
        </div>
        
        <div class="relative space-y-8 lg:space-y-12">
          <div v-for="(tier, index) in tiers" :key="index" 
               class="bg-white text-primary p-8 md:p-12 rounded-[40px] md:rounded-[60px] shadow-2xl transition-all duration-700 pricing-yoga-alt opacity-0 translate-x-20"
               :class="{ 'lg:scale-105 z-10': index === 1 }"
          >
            <div class="flex justify-between items-start mb-8 md:mb-10">
              <div>
                <h3 class="text-[10px] font-black uppercase tracking-[0.4em] text-primary/20 mb-3 md:mb-4">{{ tier.name }}</h3>
                <div class="text-4xl md:text-6xl font-serif text-primary tracking-tight leading-none">{{ tier.price }}</div>
              </div>
              <div v-if="index === 1" class="px-3 md:px-4 py-1 rounded-full bg-accent text-white text-[8px] font-black uppercase tracking-widest whitespace-nowrap">Soul Favorite</div>
            </div>
            
            <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-10 md:mb-12 border-t border-primary/5 pt-8 md:pt-10">
              <li v-for="feature in tier.features" :key="feature" class="flex items-center gap-3 text-primary/50 text-[11px] md:text-xs font-medium">
                <div class="w-1 h-1 rounded-full bg-accent flex-shrink-0"></div>
                {{ feature }}
              </li>
            </ul>
            
            <button class="w-full py-4 md:py-6 rounded-2xl md:rounded-3xl bg-primary text-white font-bold uppercase tracking-[0.2em] text-[9px] md:text-[10px] hover:bg-accent transition-all duration-500">
              Begin Now
            </button>
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

defineProps<{ tiers: Array<{ name: string, price: string, features: string[] }> }>()

onMounted(() => {
  gsap.to('.pricing-yoga-alt', {
    scrollTrigger: {
      trigger: '.pricing-yoga-alt',
      start: 'top 85%',
    },
    opacity: 1,
    x: 0,
    duration: 2,
    stagger: 0.4,
    ease: 'expo.out'
  })
})
</script>
