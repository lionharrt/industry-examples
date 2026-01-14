<template>
  <section class="h-screen bg-white text-background flex items-center px-12 md:px-24 relative overflow-hidden">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-24 w-full z-10 items-center">
      <div class="space-y-12">
        <span class="text-[10px] font-black uppercase tracking-[1em] text-secondary">Exclusive_Listings</span>
        <h1 ref="titleRef" class="text-[7vw] font-bold leading-[0.9] uppercase tracking-tighter shadow-sm">
          {{ title }}
        </h1>
        <p ref="descRef" class="text-xl text-secondary font-medium max-w-sm opacity-0">
          {{ subtitle }}
        </p>
        <button class="px-12 py-6 bg-background text-primary font-black uppercase tracking-widest text-xs rounded-full hover:bg-accent hover:text-background transition-all duration-500 shadow-2xl">View Properties</button>
      </div>
      <div class="relative h-[80vh] group rounded-3xl overflow-hidden shadow-2xl">
        <ParallaxImage src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200" speed="0.1" />
        <div class="absolute bottom-8 left-8 bg-white/90 backdrop-blur-xl p-8 rounded-2xl shadow-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
          <p class="text-xs font-black uppercase tracking-widest text-secondary mb-2">Featured Estate</p>
          <p class="text-2xl font-bold">Bel Air Modern</p>
          <p class="text-background font-black mt-4">$24,500,000</p>
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
