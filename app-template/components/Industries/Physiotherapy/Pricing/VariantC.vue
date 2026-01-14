<template>
  <section class="py-24 bg-primary text-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 relative">
      <!-- Decorative circle -->
      <div class="absolute -top-40 -right-40 w-96 h-96 border border-white/10 rounded-full"></div>
      
      <div class="grid lg:grid-cols-2 gap-24 items-center">
        <div class="space-y-8">
          <h2 class="text-6xl font-serif leading-tight">Investment in your <span class="text-accent italic">wellbeing.</span></h2>
          <p class="text-xl text-white/60 leading-relaxed">Choose a path that fits your recovery goals. We offer flexible options for individual sessions and comprehensive programs.</p>
        </div>
        
        <div class="relative">
          <div v-for="(tier, index) in tiers" :key="index" 
               class="bg-white text-primary p-12 rounded-[40px] shadow-2xl transition-all duration-500 pricing-focus-card opacity-0 translate-y-20"
               :class="{ 'z-10 relative': index === 0, 'mt-8 lg:-mt-12 lg:ml-12 opacity-50 scale-90': index === 1 }"
          >
            <div class="flex justify-between items-start mb-8">
              <div>
                <h3 class="text-sm font-bold uppercase tracking-[0.3em] text-primary/30 mb-2">{{ tier.name }}</h3>
                <div class="text-6xl font-serif text-primary">{{ tier.price }}</div>
              </div>
              <div v-if="index === 0" class="bg-accent text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Recommended</div>
            </div>
            
            <ul class="space-y-6 mb-12">
              <li v-for="feature in tier.features" :key="feature" class="flex items-center gap-4 text-primary/60 text-lg">
                <span class="w-1.5 h-1.5 rounded-full bg-accent"></span>
                {{ feature }}
              </li>
            </ul>
            
            <button class="w-full py-6 rounded-2xl bg-primary text-white font-bold uppercase tracking-widest text-sm hover:bg-accent transition-all">
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
      start: 'top 80%',
    },
    opacity: 1,
    y: 0,
    duration: 1.5,
    stagger: 0.3,
    ease: 'expo.out'
  })
})
</script>
