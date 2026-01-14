<template>
  <section class="h-screen bg-primary text-white flex items-center px-12 md:px-24 relative overflow-hidden">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-24 w-full z-10 items-center">
      <div class="space-y-12">
        <span class="text-[10px] font-black uppercase tracking-[1em] text-accent">Volume_Study_01</span>
        <h1 ref="titleRef" class="text-[8vw] font-black leading-none uppercase tracking-tighter">
          {{ title }}
        </h1>
        <div class="flex items-center gap-12 group cursor-pointer">
          <div class="w-24 h-24 bg-white text-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
            <Maximize2 :size="32" />
          </div>
          <p class="text-xl font-bold uppercase tracking-widest text-accent">{{ subtitle }}</p>
        </div>
      </div>
      <div class="relative h-[80vh] group overflow-hidden bg-background">
        <ParallaxImage src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200" speed="0.1" />
        <div class="absolute inset-0 border-[20px] border-primary group-hover:border-0 transition-all duration-1000"></div>
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
