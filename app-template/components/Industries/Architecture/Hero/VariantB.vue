<template>
  <section class="h-screen bg-primary text-white flex items-center px-6 md:px-24 relative overflow-hidden">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 w-full z-10 items-center">
      <div class="space-y-6 md:space-y-12 text-center md:text-left">
        <span class="text-[10px] font-black uppercase tracking-[0.5em] md:tracking-[1em] text-accent">Volume_Study_01</span>
        <h1 ref="titleRef" class="text-5xl sm:text-7xl md:text-[8vw] font-black leading-none uppercase tracking-tighter">
          {{ title }}
        </h1>
        <div class="flex flex-col md:flex-row items-center gap-6 md:gap-12 group cursor-pointer justify-center md:justify-start">
          <div class="w-16 h-16 md:w-24 md:h-24 bg-white text-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
            <Maximize2 :size="32" class="hidden md:block" />
            <Maximize2 :size="24" class="md:hidden" />
          </div>
          <p class="text-lg md:text-xl font-bold uppercase tracking-widest text-accent">{{ subtitle }}</p>
        </div>
      </div>
      <div class="relative h-[40vh] md:h-[80vh] group overflow-hidden bg-background hidden md:block">
        <ParallaxImage src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200" speed="0.1" />
        <div class="absolute inset-0 border-[10px] md:border-[20px] border-primary group-hover:border-0 transition-all duration-1000"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Maximize2 } from 'lucide-vue-next'
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

defineProps<{
  title: string
  subtitle: string
}>()

const titleRef = ref(null)

onMounted(() => {
  gsap.from(titleRef.value, { x: 100, opacity: 0, duration: 1.5, ease: 'expo.out' })
})
</script>
