<template>
  <section class="min-h-screen bg-background text-primary flex items-center px-6 md:px-24 relative overflow-hidden py-24 md:py-0">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 w-full z-10 items-center">
      <div class="space-y-8 md:space-y-12">
        <span class="text-[10px] font-black uppercase tracking-[1em] text-accent">Exclusive_Listings</span>
        <h1 ref="titleRef" class="text-[10vw] md:text-[7vw] font-bold leading-[0.9] uppercase tracking-tighter shadow-sm text-primary">
          {{ title }}
        </h1>
        <p ref="descRef" class="text-lg md:text-xl text-primary/60 font-medium max-w-sm opacity-0">
          {{ subtitle }}
        </p>
        <button class="px-8 md:px-12 py-4 md:py-6 bg-accent text-background font-black uppercase tracking-widest text-xs rounded-full hover:bg-primary hover:text-background transition-all duration-500 shadow-2xl">View Properties</button>
      </div>
      <div class="relative h-[50vh] md:h-[80vh] group rounded-3xl overflow-hidden shadow-2xl bg-primary/5">
        <ParallaxImage src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750" :speed="0.1" />
        <div class="absolute bottom-4 left-4 md:bottom-8 md:left-8 bg-background/90 backdrop-blur-xl p-6 md:p-8 rounded-2xl shadow-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
          <p class="text-[10px] font-black uppercase tracking-widest text-accent mb-1 md:mb-2">Featured Estate</p>
          <p class="text-xl md:text-2xl font-bold text-primary">Bel Air Modern</p>
          <p class="text-accent font-black mt-2 md:mt-4">$24,500,000</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

defineProps<{
  title: string
  subtitle: string
}>()

const titleRef = ref(null)
const descRef = ref(null)

onMounted(() => {
  gsap.from(titleRef.value, { x: -100, opacity: 0, duration: 1.5, ease: 'expo.out' })
  gsap.to(descRef.value, { opacity: 1, y: 0, duration: 1, delay: 0.8 })
})
</script>
