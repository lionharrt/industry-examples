<template>
  <section class="h-screen relative flex items-center justify-center bg-black overflow-hidden">
    <!-- High-grain video background -->
    <div class="absolute inset-0 z-0 opacity-60 mix-blend-screen grayscale contrast-150">
      <video 
        autoplay 
        muted 
        loop 
        playsinline
        class="w-full h-full object-cover"
      >
        <source :src="video || 'https://storage.googleapis.com/industry-examples.firebasestorage.app/fashion.mp4'" type="video/mp4">
      </video>
    </div>
    
    <div class="absolute inset-0 bg-black/40 z-1"></div>

    <div class="relative z-10 text-center px-12">
      <div class="overflow-hidden">
        <h1 ref="titleRef" class="text-[12vw] font-black uppercase text-white leading-none tracking-[0.2em] translate-y-full italic">
          {{ title }}
        </h1>
      </div>
      <button class="mt-24 px-16 py-6 border border-white text-white font-black uppercase text-xs tracking-[1em] hover:bg-white hover:text-black transition-all">Explore_Archive</button>
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
