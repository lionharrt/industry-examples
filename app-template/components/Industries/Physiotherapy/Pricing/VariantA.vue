<template>
  <section class="py-16 md:py-24 bg-[#f8f9fa] px-6">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-12 md:mb-16 space-y-4">
        <h2 class="text-3xl md:text-4xl font-serif text-primary">Simple, Transparent Pricing</h2>
        <p class="text-sm md:text-base text-primary/50 max-w-md mx-auto">Invest in your health with our structured treatment plans.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
        <div v-for="(tier, index) in tiers" :key="index" 
             class="bg-white p-8 md:p-12 rounded-[30px] md:rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 pricing-card opacity-0 translate-y-10"
             :class="{ 'border-2 border-accent': index === 0 }"
        >
          <div class="mb-6 md:mb-8">
            <h3 class="text-xs md:text-sm font-bold uppercase tracking-widest text-primary/40 mb-3 md:mb-4">{{ tier.name }}</h3>
            <div class="text-4xl md:text-5xl font-serif text-primary">{{ tier.price }}</div>
          </div>
          
          <ul class="space-y-3 md:space-y-4 mb-10 md:mb-12">
            <li v-for="feature in tier.features" :key="feature" class="flex items-center gap-3 text-sm md:text-base text-primary/70">
              <svg viewBox="0 0 24 24" class="w-4 h-4 md:w-5 md:h-5 text-accent fill-none stroke-current" stroke-width="3">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              {{ feature }}
            </li>
          </ul>
          
          <button class="w-full py-4 md:py-5 rounded-xl font-bold uppercase tracking-widest text-[10px] md:text-xs transition-all"
                  :class="index === 0 ? 'bg-accent text-white hover:bg-primary' : 'bg-primary/5 text-primary hover:bg-primary hover:text-white'"
          >
            Book Now
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
  gsap.to('.pricing-card', {
    scrollTrigger: {
      trigger: '.pricing-card',
      start: 'top 85%',
    },
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out'
  })
})
</script>
