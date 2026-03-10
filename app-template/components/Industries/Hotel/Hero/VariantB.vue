<template>
  <section class="min-h-screen bg-white text-primary flex items-center px-6 md:px-24 relative overflow-hidden py-24 lg:py-0">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 w-full z-10 items-center">
      <div class="space-y-8 md:space-y-12 text-center lg:text-left px-8">
        <span class="text-accent text-[10px] font-black uppercase tracking-[0.5em] md:tracking-[1em]">The_Wanderer</span>
        <h1 ref="titleRef" class="text-5xl sm:text-6xl md:text-7xl lg:text-[6vw] font-serif leading-[0.9] tracking-tight italic px-12">
          {{ title }}
        </h1>
        <p ref="descRef" class="text-lg md:text-xl text-primary/60 font-medium max-w-sm mx-auto lg:mx-0 opacity-0 italic leading-relaxed">
          {{ subtitle }}
        </p>
        <div ref="btnRef" class="opacity-0 flex justify-center lg:justify-start">
          <button class="px-8 md:px-12 py-4 md:py-6 border-2 border-primary text-primary font-black uppercase tracking-widest text-[10px] md:text-xs rounded-full hover:bg-primary hover:text-white transition-all duration-700 group flex items-center gap-4">
            <span>Check Availability</span>
            <Calendar :size="16" class="group-hover:rotate-12 transition-transform" />
          </button>
        </div>
      </div>
      <div class="relative h-[50vh] lg:h-[80vh] group rounded-3xl lg:rounded-[4rem] overflow-hidden max-w-md mx-auto lg:max-w-none w-full">
        <ParallaxImage src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200" speed="0.1" />
        <div class="absolute inset-0 bg-background/10 mix-blend-overlay group-hover:opacity-0 transition-opacity"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Calendar } from 'lucide-vue-next'
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

defineProps<{
  title: string
  subtitle: string
}>()

const titleRef = ref(null)
const descRef = ref(null)
const btnRef = ref(null)

onMounted(() => {
  gsap.from(titleRef.value, { x: -100, opacity: 0, duration: 1.5, ease: 'expo.out' })
  gsap.to(descRef.value, { opacity: 1, y: 0, duration: 1, delay: 0.8 })
  gsap.to(btnRef.value, { opacity: 1, y: 0, duration: 1, delay: 1 })
})
</script>
