<template>
  <section class="py-16 md:py-24 bg-primary text-white overflow-hidden px-6">
    <div class="max-w-7xl mx-auto relative">
      <!-- Decorative circle -->
      <div class="absolute -top-40 -right-40 w-64 md:w-96 h-64 md:h-96 border border-white/10 rounded-full hidden md:block"></div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
        <div class="space-y-6 md:space-y-8 text-center lg:text-left">
          <h2 class="text-4xl md:text-6xl font-serif leading-tight">Investment in your <span class="text-accent italic">wellbeing.</span></h2>
          <p class="text-lg md:text-xl text-white/60 leading-relaxed font-light">Choose a path that fits your recovery goals. We offer flexible options for individual sessions and comprehensive programs.</p>
        </div>
        
        <div class="relative space-y-8 lg:space-y-0">
          <div v-for="(tier, index) in tiers" :key="index" 
               class="bg-white text-primary p-8 md:p-12 rounded-[30px] md:rounded-[40px] shadow-2xl transition-all duration-500 pricing-focus-card opacity-0 translate-y-20"
               :class="{ 'z-10 relative': index === 0, 'lg:-mt-12 lg:ml-12 lg:opacity-50 lg:scale-90': index === 1 }"
          >
            <div class="flex justify-between items-start mb-6 md:mb-8">
              <div>
                <h3 class="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-primary/30 mb-2">{{ tier.name }}</h3>
                <div class="text-4xl md:text-6xl font-serif text-primary">{{ tier.price }}</div>
              </div>
              <div v-if="index === 0" class="bg-accent text-white px-3 md:px-4 py-1 rounded-full text-[8px] md:text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">Recommended</div>
            </div>
            
            <ul class="space-y-4 md:space-y-6 mb-10 md:mb-12">
              <li v-for="feature in tier.features" :key="feature" class="flex items-center gap-3 md:gap-4 text-sm md:text-lg text-primary/60">
                <span class="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></span>
                {{ feature }}
              </li>
            </ul>
            
            <button class="w-full py-4 md:py-6 rounded-2xl bg-primary text-white font-bold uppercase tracking-widest text-[10px] md:text-sm hover:bg-accent transition-all">
              Start Your Journey
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
  gsap.to('.pricing-focus-card', {
    scrollTrigger: {
      trigger: '.pricing-focus-card',
      start: 'top 85%',
    },
    opacity: 1,
    y: 0,
    duration: 1.5,
    stagger: 0.3,
    ease: 'expo.out'
  })
})
</script>
