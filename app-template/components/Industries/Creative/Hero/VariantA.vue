<template>
  <section class="h-screen bg-[#111111] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
    <!-- Acid green floating blobs -->
    <div class="absolute top-1/4 -left-20 w-96 h-96 bg-[#B0BF1A] rounded-full blur-[120px] opacity-20 animate-pulse"></div>
    <div class="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#FF5F1F] rounded-full blur-[120px] opacity-20 animate-pulse delay-700"></div>

    <div class="relative z-10 text-center">
      <h1 ref="titleRef" class="text-[15vw] font-black uppercase leading-[0.8] tracking-tighter mb-12">
        <span class="block">CREATIVE</span>
        <span class="block text-[#FF5F1F]">CHAOS</span>
      </h1>
      <p ref="subtitleRef" class="text-xs font-black uppercase tracking-[1em] text-white/40">
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
const subtitleRef = ref(null)

onMounted(() => {
  if (titleRef.value) {
    gsap.from(titleRef.value.children, {
      y: 200,
      rotate: 10,
      opacity: 0,
      duration: 1.5,
      stagger: 0.2,
      ease: 'power4.out'
    })
  }
  if (subtitleRef.value) {
    gsap.from(subtitleRef.value, {
      opacity: 0,
      scale: 0.8,
      duration: 1.2,
      delay: 1.2,
      ease: 'back.out(2)'
    })
  }
})
</script>
