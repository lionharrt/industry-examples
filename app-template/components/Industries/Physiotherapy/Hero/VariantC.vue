<template>
  <section class="relative h-screen w-full bg-[#f0fff0] flex items-center justify-center overflow-hidden">
    <!-- Abstract Shapes -->
    <div class="absolute inset-0 z-0">
      <div class="absolute top-1/4 -left-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl blob-1"></div>
      <div class="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl blob-2"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-primary/5 rounded-[40%] animate-spin-slow"></div>
    </div>
    
    <div class="relative z-10 flex flex-col items-center text-center px-6">
      <div class="mb-12">
        <svg viewBox="0 0 100 100" class="w-24 h-24 text-accent hero-svg opacity-0">
          <path d="M50 10 Q70 50 50 90 Q30 50 50 10" fill="currentColor" opacity="0.2" />
          <path d="M50 20 Q65 50 50 80 Q35 50 50 20" fill="currentColor" />
        </svg>
      </div>
      
      <h1 class="text-4xl md:text-6xl font-light text-primary max-w-4xl leading-tight mb-8 hero-text opacity-0">
        {{ title }}
      </h1>
      
      <p class="text-lg text-primary/60 max-w-xl mb-12 hero-subtext opacity-0">
        {{ subtitle }}
      </p>
      
      <button class="group relative px-12 py-4 hero-cta opacity-0">
        <span class="relative z-10 text-primary font-bold tracking-widest uppercase transition-colors group-hover:text-white">{{ cta }}</span>
        <div class="absolute inset-0 bg-accent transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></div>
        <div class="absolute inset-0 border border-primary/20"></div>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'

defineProps<{ title: string, subtitle: string, cta: string }>()

onMounted(() => {
  const tl = gsap.timeline({ delay: 0.5 })
  tl.to('.hero-svg', { opacity: 1, scale: 1.2, duration: 1.5, ease: 'back.out' })
    .to('.hero-text', { opacity: 1, y: -20, duration: 1.2 }, '-=0.8')
    .to('.hero-subtext', { opacity: 1, duration: 1 }, '-=0.8')
    .to('.hero-cta', { opacity: 1, duration: 0.8 }, '-=0.5')
  
  gsap.to('.blob-1', { x: 50, y: 50, duration: 10, repeat: -1, yoyo: true, ease: 'sine.inOut' })
  gsap.to('.blob-2', { x: -50, y: -30, duration: 12, repeat: -1, yoyo: true, ease: 'sine.inOut' })
})
</script>

<style scoped>
.animate-spin-slow {
  animation: spin 20s linear infinite;
}
@keyframes spin {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}
</style>
