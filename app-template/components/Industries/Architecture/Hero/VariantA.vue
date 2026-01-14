<template>
  <section class="h-screen bg-background text-primary flex items-center justify-center p-6 relative overflow-hidden">
    <!-- Animated blueprint lines -->
    <div class="absolute inset-0 z-0 opacity-20 pointer-events-none">
      <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path ref="path1" d="M10 10 L90 10 L90 90 L10 90 Z" stroke="#28282B" stroke-width="0.05" fill="none" />
        <path ref="path2" d="M10 50 L90 50 M50 10 L50 90" stroke="#28282B" stroke-width="0.05" fill="none" />
      </svg>
    </div>
    
    <div class="relative z-10 text-center space-y-12">
      <h1 ref="titleRef" class="text-[10vw] font-black uppercase leading-[0.8] tracking-tighter mix-blend-multiply">
        {{ title }}
      </h1>
      <div ref="lineRef" class="h-px w-48 bg-primary mx-auto scale-x-0"></div>
      <p ref="subtitleRef" class="text-xs font-black uppercase tracking-[1em] opacity-0">
        {{ subtitle }}
      </p>
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
const path1Ref = ref(null)
const path2Ref = ref(null)

onMounted(() => {
  const tl = gsap.timeline({ delay: 0.5 })
  tl.from(titleRef.value, { y: 100, opacity: 0, duration: 1.5, ease: 'expo.out' })
    .to(lineRef.value, { scaleX: 1, duration: 1 }, '-=0.8')
    .to(subtitleRef.value, { opacity: 1, y: 0, duration: 1 }, '-=0.5')
    
  gsap.from([path1Ref.value, path2Ref.value], {
    strokeDashoffset: 1000,
    duration: 3,
    ease: 'power4.inOut'
  })
})
</script>
