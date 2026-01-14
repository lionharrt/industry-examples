<template>
  <section class="h-screen bg-background text-primary flex items-center justify-center p-6 relative overflow-hidden">
    <!-- Subtle architectural blueprint background -->
    <div class="absolute inset-0 z-0 opacity-10 pointer-events-none">
      <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0 20 L100 20 M0 50 L100 50 M0 80 L100 80 M20 0 L20 100 M50 0 L50 100 M80 0 L80 100" stroke="white" stroke-width="0.1" fill="none" />
      </svg>
    </div>
    
    <div class="relative z-10 text-center space-y-12">
      <h1 ref="titleRef" class="text-[8vw] font-bold uppercase leading-none tracking-tight shadow-xl">
        {{ title }}
      </h1>
      <div ref="lineRef" class="h-1 w-24 bg-accent mx-auto scale-x-0"></div>
      <p ref="subtitleRef" class="text-lg md:text-2xl font-medium tracking-widest text-accent opacity-0">
        {{ subtitle }}
      </p>
      <div ref="searchRef" class="max-w-2xl mx-auto bg-white/10 backdrop-blur-xl p-2 rounded-2xl border border-white/20 flex gap-4 opacity-0 translate-y-10">
        <input type="text" placeholder="Location, Neighborhood, or Zip" class="bg-transparent flex-1 px-6 py-4 outline-none text-primary placeholder:text-primary/40" />
        <button class="px-12 py-4 bg-accent text-background font-black uppercase tracking-widest text-xs rounded-xl hover:bg-white transition-colors">Search</button>
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
const lineRef = ref(null)
const subtitleRef = ref(null)
const searchRef = ref(null)

onMounted(() => {
  const tl = gsap.timeline({ delay: 0.5 })
  tl.from(titleRef.value, { y: 100, opacity: 0, duration: 1.5, ease: 'expo.out' })
    .to(lineRef.value, { scaleX: 1, duration: 1 }, '-=0.8')
    .to(subtitleRef.value, { opacity: 1, y: 0, duration: 1 }, '-=0.5')
    .to(searchRef.value, { opacity: 1, y: 0, duration: 1 }, '-=0.7')
})
</script>
