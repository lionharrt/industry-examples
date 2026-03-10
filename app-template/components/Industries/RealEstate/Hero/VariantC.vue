<template>
  <section class="h-screen relative flex items-center justify-center bg-black overflow-hidden">
    <!-- Cinema drone video background -->
    <div class="absolute inset-0 z-0 opacity-60">
      <video 
        autoplay 
        muted 
        loop 
        playsinline
        class="w-full h-full object-cover"
        poster="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000"
      >
        <source :src="video || 'https://storage.googleapis.com/industry-examples.firebasestorage.app/real-estate.mp4'" type="video/mp4">
      </video>
    </div>
    
    <div class="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-black/60 z-[1]"></div>

    <div class="relative z-10 text-center px-6 md:px-12 max-w-5xl">
      <div class="overflow-hidden">
        <h1 ref="titleRef" class="text-[14vw] md:text-[10vw] font-bold uppercase text-white leading-none tracking-tight translate-y-full italic shadow-2xl">
          {{ title }}
        </h1>
      </div>
      <div class="mt-12 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-white/80 opacity-0 animate-fade-in">
        <div v-for="stat in stats" :key="stat.label" class="space-y-1 md:space-y-2">
          <p class="text-3xl md:text-4xl font-black italic text-accent">{{ stat.value }}</p>
          <p class="text-[10px] uppercase tracking-widest font-bold text-white">{{ stat.label }}</p>
        </div>
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
const stats = [
  { label: 'Active Listings', value: '42' },
  { label: 'Avg Sale Price', value: '$8.2M' },
  { label: 'Closed 2025', value: '$1.4B' }
]

onMounted(() => {
  gsap.to(titleRef.value, {
    y: 0,
    duration: 2,
    ease: 'expo.out',
    delay: 0.5
  })
})
</script>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fade-in 1s ease forwards 1.5s;
}
</style>
