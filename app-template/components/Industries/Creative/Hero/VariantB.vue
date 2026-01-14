<template>
  <section class="h-screen bg-[#111111] flex items-center px-12 md:px-24 relative overflow-hidden">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 w-full z-10">
      <div class="flex flex-col justify-center">
        <h1 ref="titleRef" class="text-[10vw] font-black leading-none uppercase mb-8 text-white mix-blend-difference">
          {{ title }}
        </h1>
        <div ref="lineRef" class="h-2 w-0 bg-[#B0BF1A] mb-8"></div>
        <p ref="descRef" class="text-xl text-white/60 font-medium max-w-sm opacity-0">
          {{ subtitle }}
        </p>
      </div>
    </div>
    
    <!-- Large background text -->
    <div class="absolute -right-24 bottom-24 text-[30vw] font-black text-white/[0.03] uppercase select-none pointer-events-none">
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
