<template>
  <section class="min-h-screen bg-[#111111] flex items-center px-6 md:px-24 relative overflow-hidden py-24 md:py-0">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full z-10">
      <div class="flex flex-col justify-center text-center lg:text-left">
        <h1 ref="titleRef" class="text-6xl sm:text-8xl md:text-[8vw] font-black leading-tight md:leading-none uppercase mb-6 md:mb-8 text-white mix-blend-difference">
          {{ title }}
        </h1>
        <div ref="lineRef" class="h-1 md:h-2 w-0 bg-[#B0BF1A] mb-6 md:mb-8 mx-auto lg:mx-0"></div>
        <p ref="descRef" class="text-lg md:text-xl text-white/60 font-medium max-w-sm opacity-0 mx-auto lg:mx-0">
          {{ subtitle }}
        </p>
      </div>
    </div>
    
    <!-- Large background text -->
    <div class="absolute -right-12 md:-right-24 bottom-12 md:bottom-24 text-[40vw] md:text-[30vw] font-black text-white/[0.03] uppercase select-none pointer-events-none leading-none">
      IDEA
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
const descRef = ref(null)

onMounted(() => {
  const tl = gsap.timeline({ delay: 0.3 })
  tl.from(titleRef.value, { x: -100, opacity: 0, duration: 1, ease: 'expo.out' })
    .to(lineRef.value, { width: '100px', duration: 0.8, ease: 'power4.inOut' }, '-=0.5')
    .to(descRef.value, { opacity: 1, y: 0, duration: 1 }, '-=0.4')
})
</script>
