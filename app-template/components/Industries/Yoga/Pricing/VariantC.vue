<template>
  <section class="py-32 bg-primary text-white overflow-hidden relative">
    <!-- Abstract circular background element -->
    <div class="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full border border-white/5 pointer-events-none"></div>
    
    <div class="max-w-7xl mx-auto px-6 relative">
      <div class="grid lg:grid-cols-2 gap-24 items-center">
        <div class="space-y-10">
          <h2 class="text-6xl md:text-8xl font-serif tracking-tighter leading-none italic opacity-20">Invest <br/> In Soul.</h2>
          <p class="text-xl text-white/40 font-light leading-relaxed max-w-md italic">Choosing a membership is choosing yourself. Every session is a step closer to profound internal peace.</p>
        </div>
        
        <div class="relative space-y-8">
          <div v-for="(tier, index) in tiers" :key="index" 
               class="bg-white text-primary p-12 rounded-[60px] shadow-2xl transition-all duration-700 pricing-yoga-alt opacity-0 translate-x-20"
               :class="{ 'scale-105 z-10': index === 1 }"
          >
            <div class="flex justify-between items-start mb-10">
              <div>
                <h3 class="text-[10px] font-black uppercase tracking-[0.4em] text-primary/20 mb-4">{{ tier.name }}</h3>
                <div class="text-6xl font-serif text-primary tracking-tight">{{ tier.price }}</div>
              </div>
              <div v-if="index === 1" class="px-4 py-1 rounded-full bg-accent text-white text-[8px] font-black uppercase tracking-widest">Soul Favorite</div>
            </div>
            
            <ul class="grid grid-cols-2 gap-6 mb-12 border-t border-primary/5 pt-10">
              <li v-for="feature in tier.features" :key="feature" class="flex items-center gap-3 text-primary/50 text-xs font-medium">
                <div class="w-1 h-1 rounded-full bg-accent"></div>
                {{ feature }}
              </li>
            </ul>
            
            <button class="w-full py-6 rounded-3xl bg-primary text-white font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-accent transition-all duration-500">
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
      start: 'top 80%',
    },
    opacity: 1,
    x: 0,
    duration: 2,
    stagger: 0.4,
    ease: 'expo.out'
  })
})
</script>
