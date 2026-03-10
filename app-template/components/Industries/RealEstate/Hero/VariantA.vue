<template>
  <section class="h-screen bg-[#000080] text-white flex items-center justify-center p-6 relative overflow-hidden">
    <!-- Sophisticated Architectural Background -->
    <div class="absolute inset-0 z-0 opacity-40">
      <ParallaxImage 
        src="1600585154340-be6161a56a0c" 
        :speed="0.1" 
      />
      <div class="absolute inset-0 bg-[#000080]/60 backdrop-blur-[2px]"></div>
    </div>

    <!-- Animated Geometric Overlays -->
    <div class="absolute inset-0 z-0 opacity-20 pointer-events-none">
      <div class="absolute inset-0 bg-[linear-gradient(to_right,var(--primary-color)10_1px,transparent_1px),linear-gradient(to_bottom,var(--primary-color)10_1px,transparent_1px)] bg-[size:4vw_4vw]"></div>
    </div>
    
    <div class="relative z-10 text-center space-y-8 md:space-y-12 w-full max-w-4xl px-4">
      <div class="inline-block px-4 py-1 border border-accent rounded-full mb-4 opacity-0 animate-fade-in">
        <span class="text-[10px] uppercase tracking-[0.5em] text-accent font-black">ESTABLISHED 2026</span>
      </div>
      <h1 ref="titleRef" class="text-[12vw] md:text-[8vw] font-bold uppercase leading-none tracking-tight shadow-xl text-primary">
        {{ title }}
      </h1>
      <div ref="lineRef" class="h-px w-24 md:w-48 bg-accent mx-auto scale-x-0"></div>
      <p ref="subtitleRef" class="text-lg md:text-2xl font-medium tracking-[0.3em] text-accent opacity-0 px-4">
        {{ subtitle }}
      </p>
      <div ref="searchRef" class="mx-auto bg-primary/5 backdrop-blur-2xl p-2 rounded-2xl border border-primary/10 flex flex-col md:flex-row gap-2 md:gap-4 opacity-0 translate-y-10 max-w-2xl shadow-2xl">
        <input type="text" placeholder="Location, Neighborhood, or Zip" class="bg-transparent flex-1 px-6 py-4 outline-none text-primary placeholder:text-primary/30 text-sm md:text-base" />
        <button class="w-full md:w-auto px-12 py-4 bg-[#f7e7ce] text-[#000080] font-black uppercase tracking-widest text-xs rounded-xl hover:bg-white transition-all transform hover:scale-[1.02]">Search</button>
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

<style scoped>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fade-in 1s ease forwards 1.2s;
}
</style>
