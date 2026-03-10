<template>
  <section class="h-screen relative flex items-center justify-center bg-[#FAF9F6] overflow-hidden">
    <!-- Background Video -->
    <div class="absolute inset-0 z-0">
      <video 
        autoplay 
        muted 
        loop 
        playsinline
        class="w-full h-full object-cover opacity-20 grayscale"
      >
        <source :src="video || 'https://storage.googleapis.com/industry-examples.firebasestorage.app/architecture.mp4'" type="video/mp4">
      </video>
    </div>
    <!-- Geometric composition background -->
    <div class="absolute inset-0 z-1 flex items-center justify-center opacity-5 pointer-events-none">
      <div v-for="i in 5" :key="i" class="absolute border-[5px] md:border-[10px] border-[#28282B]" :style="{ width: i * 20 + 'vw', height: i * 20 + 'vw', transform: 'rotate(' + (i * 15) + 'deg)' }"></div>
    </div>
    
    <div class="relative z-10 text-center px-6 md:px-12 w-full max-w-[100vw]">
      <div class="overflow-hidden py-12 md:py-24 -my-12 md:-my-24 px-4 md:px-24">
        <h1 ref="titleRef" class="text-5xl sm:text-7xl md:text-[min(11vw,180px)] font-black uppercase text-[#28282B] leading-[0.8] tracking-tight translate-y-full italic inline-block">
          {{ title }}
        </h1>
      </div>
      <div class="mt-12 md:mt-24 flex flex-col items-center gap-4 md:gap-8">
        <div class="h-16 md:h-32 w-px bg-[#28282B]/20"></div>
        <p class="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] md:tracking-[1.5em] text-[#A9A9A9] animate-pulse">
          {{ subtitle }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

defineProps<{
  title: string
  subtitle: string
  video?: string
}>()

const titleRef = ref(null)

onMounted(() => {
  gsap.to(titleRef.value, {
    y: 0,
    duration: 2,
    ease: 'expo.out',
    delay: 0.5
  })
})
</script>
