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
      <div v-for="i in 5" :key="i" class="absolute border-[10px] border-[#28282B]" :style="{ width: i * 20 + 'vw', height: i * 20 + 'vw', transform: 'rotate(' + (i * 15) + 'deg)' }"></div>
    </div>
    
    <div class="relative z-10 text-center px-12 max-w-5xl">
      <div class="overflow-hidden">
        <h1 ref="titleRef" class="text-[12vw] font-black uppercase text-[#28282B] leading-none tracking-[0.1em] translate-y-full italic mix-blend-multiply">
          {{ title }}
        </h1>
      </div>
      <div class="mt-24 flex flex-col items-center gap-8">
        <div class="h-32 w-px bg-[#28282B]/20"></div>
        <p class="text-xs font-black uppercase tracking-[1.5em] text-[#A9A9A9] animate-pulse">
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
