<template>
  <section class="h-screen bg-white text-primary flex items-center px-12 md:px-24 relative overflow-hidden">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-24 w-full z-10 items-center">
      <div class="space-y-12">
        <span class="text-accent text-[10px] font-black uppercase tracking-[1em]">The_Wanderer</span>
        <h1 ref="titleRef" class="text-[8vw] font-serif leading-[0.9] tracking-tighter italic">
          {{ title }}
        </h1>
        <p ref="descRef" class="text-xl text-primary/60 font-medium max-w-sm opacity-0 italic leading-relaxed">
          {{ subtitle }}
        </p>
        <div ref="btnRef" class="opacity-0">
          <button class="px-12 py-6 border-2 border-primary text-primary font-black uppercase tracking-widest text-xs rounded-[2rem] hover:bg-primary hover:text-white transition-all duration-700 group flex items-center gap-4">
            <span>Check Availability</span>
            <Calendar :size="16" class="group-hover:rotate-12 transition-transform" />
          </button>
        </div>
      </div>
      <div class="relative h-[80vh] group rounded-[4rem] overflow-hidden shadow-2xl">
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
