<template>
  <section class="py-24 bg-[#f8f9fa]">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16 space-y-4">
        <h2 class="text-4xl font-serif text-primary">Simple, Transparent Pricing</h2>
        <p class="text-primary/50">Invest in your health with our structured treatment plans.</p>
      </div>

      <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div v-for="(tier, index) in tiers" :key="index" 
             class="bg-white p-12 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 pricing-card opacity-0 translate-y-10"
             :class="{ 'border-2 border-accent': index === 0 }"
        >
          <div class="mb-8">
            <h3 class="text-xl font-bold uppercase tracking-widest text-primary/40 mb-4">{{ tier.name }}</h3>
            <div class="text-5xl font-serif text-primary">{{ tier.price }}</div>
          </div>
          
          <ul class="space-y-4 mb-12">
            <li v-for="feature in tier.features" :key="feature" class="flex items-center gap-3 text-primary/70">
              <svg viewBox="0 0 24 24" class="w-5 h-5 text-accent fill-none stroke-current" stroke-width="3">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              {{ feature }}
            </li>
          </ul>
          
          <button class="w-full py-5 rounded-xl font-bold uppercase tracking-widest text-sm transition-all"
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
