<template>
  <section class="py-16 md:py-24 bg-white px-6">
    <div class="max-w-5xl mx-auto">
      <div class="divide-y divide-primary/10">
        <div v-for="(tier, index) in tiers" :key="index" 
             class="py-10 md:py-12 flex flex-col sm:flex-row sm:items-center justify-between gap-8 pricing-row opacity-0"
        >
          <div class="flex-1">
            <h3 class="text-2xl md:text-3xl font-serif text-primary mb-3 md:mb-2">{{ tier.name }}</h3>
            <div class="flex flex-wrap gap-2 md:gap-4">
              <span v-for="feature in tier.features" :key="feature" class="text-[8px] md:text-[10px] uppercase tracking-widest text-primary/40 bg-primary/5 px-3 py-1 rounded-full whitespace-nowrap">
                {{ feature }}
              </span>
            </div>
          </div>
          
          <div class="flex items-center justify-between sm:justify-end gap-8 md:gap-12">
            <div class="text-3xl md:text-4xl font-serif text-primary">{{ tier.price }}</div>
            <button class="bg-primary text-white px-6 md:px-8 py-3 md:py-4 text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-accent transition-all duration-300">
              Inquire
            </button>
          </div>
        </div>
      </div>
      
      <div class="mt-12 md:mt-16 text-center text-primary/40 text-[10px] md:text-sm">
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
