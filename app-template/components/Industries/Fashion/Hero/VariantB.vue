<template>
  <section class="h-screen bg-white text-black flex items-center px-12 md:px-24 relative overflow-hidden">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-24 w-full z-10 items-center">
      <div class="space-y-12">
        <span class="text-accent text-[10px] font-black uppercase tracking-[1em]">Collection_01</span>
        <h1 ref="titleRef" class="text-[10vw] font-black leading-none uppercase tracking-tighter">
          {{ title }}
        </h1>
        <div class="flex items-center gap-12 group cursor-pointer">
          <div class="w-24 h-24 rounded-full bg-black text-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
            <ArrowRight :size="32" />
          </div>
          <p class="text-xl font-bold uppercase tracking-widest">{{ subtitle }}</p>
        </div>
      </div>
      <div class="relative h-[80vh] overflow-hidden group">
        <ParallaxImage src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200" speed="0.1" />
        <div class="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
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
