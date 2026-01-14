<template>
  <section class="relative h-screen w-full bg-[#1A1A1A] text-primary flex items-center justify-center overflow-hidden">
    <!-- Kinetic Background Particles -->
    <div class="absolute inset-0 z-0 overflow-hidden">
      <div v-for="i in 20" :key="i" class="absolute h-[1px] bg-accent opacity-20" :style="{ width: Math.random() * 100 + '%', top: Math.random() * 100 + '%', left: '-50%', transform: 'rotate(-45deg)' }"></div>
    </div>
    
    <div class="relative z-10 text-center space-y-8 max-w-7xl px-6">
      <div class="overflow-hidden">
        <h1 class="text-[15vw] font-black italic tracking-tighter leading-none text-accent uppercase hero-title opacity-0 translate-y-full">
          {{ title }}
        </h1>
      </div>
      <p class="text-2xl font-bold uppercase tracking-[0.5em] hero-subtitle opacity-0">
        {{ subtitle }}
      </p>
      <div class="pt-12">
        <button class="bg-accent text-black px-12 py-5 text-xl font-black uppercase italic tracking-widest hover:bg-white hover:scale-110 transition-all duration-300 hero-button opacity-0">
          {{ cta }}
        </button>
      </div>
    </div>

    <!-- Slanted decorative element -->
    <div class="absolute bottom-0 right-0 w-1/2 h-32 bg-accent skew-x-[-45deg] translate-x-1/2 translate-y-1/2"></div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'

defineProps<{ title: string, subtitle: string, cta: string }>()

onMounted(() => {
  const tl = gsap.timeline({ delay: 0.5 })
  tl.to('.hero-title', { opacity: 1, y: 0, duration: 1, ease: 'expo.out' })
    .to('.hero-subtitle', { opacity: 1, duration: 0.8 }, '-=0.5')
    .to('.hero-button', { opacity: 1, duration: 0.5 }, '-=0.3')
})
</script>
