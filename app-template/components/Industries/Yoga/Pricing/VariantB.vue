<template>
  <section class="py-32 bg-white">
    <div class="max-w-5xl mx-auto px-6">
      <div class="divide-y divide-primary/5 border-y border-primary/5">
        <div v-for="(tier, index) in tiers" :key="index" 
             class="py-16 flex flex-col md:flex-row md:items-center justify-between gap-12 pricing-row-yoga opacity-0"
        >
          <div class="flex-1 space-y-4">
            <h3 class="text-4xl font-serif text-primary">{{ tier.name }}</h3>
            <div class="flex flex-wrap gap-6">
              <span v-for="feature in tier.features" :key="feature" class="text-[9px] uppercase tracking-widest text-primary/30 flex items-center gap-2">
                <span class="w-1 h-1 rounded-full bg-accent"></span>
                {{ feature }}
              </span>
            </div>
          </div>
          
          <div class="flex items-center gap-16">
            <div class="text-5xl font-serif text-primary">{{ tier.price }}<span class="text-xs text-primary/20 uppercase tracking-widest ml-2">/mo</span></div>
            <button class="bg-primary text-white px-10 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-accent transition-all duration-500">
              Get Started
            </button>
          </div>
        </div>
      </div>
      
      <div class="mt-20 text-center">
        <p class="text-[9px] font-bold uppercase tracking-[0.4em] text-primary/20 italic">*All memberships include a 15-minute consultation with a master teacher.</p>
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
  gsap.to('.pricing-row-yoga', {
    scrollTrigger: {
      trigger: '.pricing-row-yoga',
      start: 'top 85%',
    },
    opacity: 1,
    y: -30,
    duration: 1.5,
    stagger: 0.3,
    ease: 'power4.out'
  })
})
</script>
