<template>
  <section class="py-32 bg-[#f5f1e9]">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-24 space-y-6">
        <h2 class="text-5xl font-serif text-primary">Commit to Your Growth</h2>
        <p class="text-primary/40 font-light">Flexible memberships for every stage of your practice.</p>
      </div>

      <div class="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div v-for="(tier, index) in tiers" :key="index" 
             class="bg-white p-16 rounded-[80px] shadow-sm hover:shadow-2xl transition-all duration-700 pricing-card-yoga opacity-0 translate-y-10"
             :class="{ 'border-2 border-accent/20': index === 1 }"
        >
          <div class="mb-12">
            <h3 class="text-xs font-bold uppercase tracking-[0.4em] text-primary/30 mb-6">{{ tier.name }}</h3>
            <div class="text-6xl font-serif text-primary">{{ tier.price }}</div>
          </div>
          
          <ul class="space-y-6 mb-16">
            <li v-for="feature in tier.features" :key="feature" class="flex items-center gap-4 text-primary/60 font-light">
              <div class="w-1.5 h-1.5 rounded-full bg-accent"></div>
              {{ feature }}
            </li>
          </ul>
          
          <button class="w-full py-6 rounded-full font-bold uppercase tracking-widest text-[10px] transition-all"
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
