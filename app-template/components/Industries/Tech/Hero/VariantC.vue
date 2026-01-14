<template>
  <section class="h-screen bg-[#0B0E14] relative flex items-center justify-center p-12 overflow-hidden">
    <!-- Background Video -->
    <div class="absolute inset-0 z-0">
      <video 
        autoplay 
        muted 
        loop 
        playsinline
        class="w-full h-full object-cover opacity-30"
      >
        <source :src="video || 'https://storage.googleapis.com/industry-examples.firebasestorage.app/tech.mp4'" type="video/mp4">
      </video>
    </div>
    <!-- Animated particle-like background -->
    <canvas ref="canvas" class="absolute inset-0 opacity-40 z-1"></canvas>
    
    <div class="relative z-10 text-center">
      <h1 ref="titleRef" class="text-[12vw] font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#6A0DAD] via-[#008080] to-[#6A0DAD] leading-none tracking-tighter animate-gradient-x">
        {{ title }}
      </h1>
      <p class="mt-12 text-[#008080] text-xs font-black uppercase tracking-[1.5em] opacity-0 animate-fade-in-up">
        {{ subtitle }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

defineProps<{
  title: string
  subtitle: string
  video?: string
}>()

const canvas = ref(null)
const titleRef = ref(null)

onMounted(() => {
  // Simple particle logic or similar can be added here
})
</script>

<style scoped>
@keyframes gradient-x {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
.animate-gradient-x {
  background-size: 200% 200%;
  animation: gradient-x 10s ease infinite;
}
@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up {
  animation: fade-in-up 1s ease forwards 1s;
}
</style>
