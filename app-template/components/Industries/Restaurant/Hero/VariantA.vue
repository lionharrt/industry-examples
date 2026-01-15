<template>
  <section class="h-screen flex items-center justify-center bg-[#1A1A1A] text-white relative overflow-hidden px-6">
    <!-- Subtle parallax background ingredients -->
    <div class="absolute inset-0 z-0 opacity-30">
      <ParallaxImage 
        :src="image || '1414235077428-338989a2e8c0'" 
        alt="Ingredients"
        :speed="0.1"
      />
    </div>
    
    <div class="relative z-10 text-center max-w-5xl mx-auto">
      <h1 ref="titleRef" class="text-5xl sm:text-8xl md:text-[12vw] font-serif font-light leading-none tracking-tighter text-[#D4AF37]">
        {{ title }}
      </h1>
      <div ref="lineRef" class="h-[1px] w-12 md:w-24 bg-[#A0522D] mx-auto my-6 md:my-8 scale-x-0"></div>
      <p ref="subtitleRef" class="text-[8px] sm:text-[10px] md:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] font-medium opacity-0">
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
  image?: string
}>()

const titleRef = ref(null)
const lineRef = ref(null)
const subtitleRef = ref(null)

onMounted(() => {
  const tl = gsap.timeline({ delay: 0.5 })
  
  tl.from(titleRef.value, {
    y: 50,
    opacity: 0,
    duration: 1.5,
    ease: 'power4.out'
  })
  .to(lineRef.value, {
    scaleX: 1,
    duration: 1,
    ease: 'expo.inOut'
  }, '-=0.8')
  .to(subtitleRef.value, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power2.out'
  }, '-=0.5')
})
</script>
