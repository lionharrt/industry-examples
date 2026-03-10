<template>
  <section class="min-h-screen bg-white text-black flex items-center px-6 md:px-24 relative overflow-hidden py-24 md:py-0">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 w-full z-10 items-center">
      <div class="space-y-6 md:space-y-12 text-center lg:text-left">
        <span class="text-[#dc143c] text-[10px] font-black uppercase tracking-[0.5em] md:tracking-[1em]">Collection_01</span>
        <h1 ref="titleRef" class="text-6xl sm:text-8xl md:text-[10vw] font-black leading-none uppercase tracking-tighter">
          {{ title }}
        </h1>
        <div class="flex flex-col md:flex-row items-center gap-6 md:gap-12 group cursor-pointer justify-center lg:justify-start">
          <div class="w-16 h-16 md:w-24 md:h-24 rounded-full bg-black text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
            <ArrowRight :size="24" class="md:hidden" />
            <ArrowRight :size="32" class="hidden md:block" />
          </div>
          <p class="text-lg md:text-xl font-bold uppercase tracking-widest">{{ subtitle }}</p>
        </div>
      </div>
      <div class="relative aspect-[3/4] md:h-[80vh] overflow-hidden group max-w-md mx-auto lg:max-w-none w-full">
        <ParallaxImage src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200" speed="0.1" />
        <div class="absolute inset-0 bg-[#dc143c]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

defineProps<{
  title: string
  subtitle: string
}>()

const titleRef = ref(null)

onMounted(() => {
  gsap.from(titleRef.value, {
    x: -200,
    skewX: 20,
    opacity: 0,
    duration: 1.5,
    ease: 'expo.out'
  })
})
</script>
