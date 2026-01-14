<template>
  <section class="py-24 bg-white">
    <div class="max-w-5xl mx-auto px-6">
      <div class="divide-y divide-primary/10">
        <div v-for="(tier, index) in tiers" :key="index" 
             class="py-12 flex flex-col md:flex-row md:items-center justify-between gap-8 pricing-row opacity-0"
        >
          <div class="flex-1">
            <h3 class="text-3xl font-serif text-primary mb-2">{{ tier.name }}</h3>
            <div class="flex flex-wrap gap-4">
              <span v-for="feature in tier.features" :key="feature" class="text-[10px] uppercase tracking-widest text-primary/40 bg-primary/5 px-3 py-1 rounded-full">
                {{ feature }}
              </span>
            </div>
          </div>
          
          <div class="flex items-center gap-12">
            <div class="text-4xl font-serif text-primary">{{ tier.price }}</div>
            <button class="bg-primary text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-accent transition-all duration-300">
              Inquire
            </button>
          </div>
        </div>
      </div>
      
      <div class="mt-16 text-center text-primary/40 text-sm">
        *All initial assessments include a comprehensive movement analysis.
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
  gsap.to('.pricing-row', {
    scrollTrigger: {
      trigger: '.pricing-row',
      start: 'top 85%',
    },
    opacity: 1,
    y: -20,
    duration: 1,
    stagger: 0.2,
    ease: 'power2.out'
  })
})
</script>
