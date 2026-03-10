<template>
  <section class="h-screen relative flex items-center justify-center bg-[#3B2F2F] overflow-hidden">
    <!-- Slow Ken Burns effect video background -->
    <div class="absolute inset-0 z-0 opacity-40">
      <video 
        autoplay 
        muted 
        loop 
        playsinline
        class="w-full h-full object-cover scale-110 animate-ken-burns"
      >
        <source :src="video || 'https://storage.googleapis.com/industry-examples.firebasestorage.app/hotel.mp4'" type="video/mp4">
      </video>
    </div>
    
    <div class="absolute inset-0 bg-gradient-to-b from-[#3B2F2F]/60 via-transparent to-[#3B2F2F]/60 z-1"></div>

    <div class="relative z-10 text-center px-6 max-w-5xl">
      <div class="overflow-hidden px-12">
        <h1 ref="titleRef" class="text-5xl sm:text-7xl md:text-[8vw] font-serif uppercase text-[#C2B280] leading-none tracking-tight translate-y-full italic px-12">
          {{ title }}
        </h1>
      </div>
      <div class="mt-12 md:mt-24 flex flex-col items-center gap-8 md:gap-12 opacity-0 animate-fade-in">
        <p class="text-white/60 text-base md:text-lg font-medium italic tracking-widest max-w-2xl leading-relaxed">{{ subtitle }}</p>
        <div class="flex gap-8 md:gap-12">
          <div class="w-px h-16 md:h-24 bg-[#E2725B]"></div>
          <div class="w-px h-16 md:h-24 bg-white/20"></div>
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
@keyframes ken-burns {
  0% { transform: scale(1); }
  100% { transform: scale(1.2); }
}
.animate-ken-burns {
  animation: ken-burns 30s infinite alternate ease-in-out;
}
@keyframes fade-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fade-in 1s ease forwards 1.5s;
}
</style>
