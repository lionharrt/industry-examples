<template>
  <section class="py-16 md:py-32 bg-[#f5f1e9] px-6">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-12 md:mb-24 space-y-4 md:space-y-6">
        <h2 class="text-3xl md:text-5xl font-serif text-primary leading-tight">Commit to Your Growth</h2>
        <p class="text-sm md:text-base text-primary/40 font-light max-w-md mx-auto">Flexible memberships for every stage of your practice.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
        <div v-for="(tier, index) in tiers" :key="index" 
             class="bg-white p-10 md:p-16 rounded-[60px] md:rounded-[80px] shadow-sm hover:shadow-2xl transition-all duration-700 pricing-card-yoga opacity-0 translate-y-10"
             :class="{ 'border-2 border-accent/20': index === 1 }"
        >
          <div class="mb-8 md:mb-12">
            <h3 class="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-primary/30 mb-4 md:mb-6">{{ tier.name }}</h3>
            <div class="text-5xl md:text-6xl font-serif text-primary leading-none">{{ tier.price }}</div>
          </div>
          
          <ul class="space-y-4 md:space-y-6 mb-10 md:mb-16">
            <li v-for="feature in tier.features" :key="feature" class="flex items-center gap-3 md:gap-4 text-sm md:text-base text-primary/60 font-light">
              <div class="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></div>
              {{ feature }}
            </li>
          </ul>
          
          <button class="w-full py-4 md:py-6 rounded-full font-bold uppercase tracking-widest text-[9px] md:text-[10px] transition-all"
                  :class="index === 1 ? 'bg-accent text-white hover:bg-primary' : 'bg-primary/5 text-primary hover:bg-primary hover:text-white'"
          >
            Select Pass
          </button>
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
  gsap.to('.pricing-card-yoga', {
    scrollTrigger: {
      trigger: '.pricing-card-yoga',
      start: 'top 85%',
    },
    opacity: 1,
    y: 0,
    duration: 1.5,
    stagger: 0.4,
    ease: 'power3.out'
  })
})
</script>
