<template>
  <section class="h-screen bg-black text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
    <!-- Grainy overlay effect -->
    <div class="absolute inset-0 z-1 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    
    <div class="relative z-10 text-center px-4">
      <h1 ref="titleRef" class="text-6xl sm:text-8xl md:text-[12vw] font-black uppercase leading-[0.8] tracking-tighter">
        <div v-for="(word, i) in title?.split(' ')" :key="i" :class="{ 'text-[#dc143c] italic': i === 1 }">
          {{ word }}
        </div>
      </h1>
      <p ref="subtitleRef" class="text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] md:tracking-[1.5em] mt-8 md:mt-12 opacity-0 leading-relaxed">
        {{ subtitle }}
      </p>
    </div>
    
    <!-- Vertical line animation -->
    <div class="absolute left-1/2 top-0 w-px h-0 bg-white/20 animate-line-down"></div>
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
  gsap.from(titleRef.value, {
    scale: 1.5,
    opacity: 0,
    duration: 2,
    ease: 'expo.out'
  })
  gsap.to(subtitleRef.value, {
    opacity: 1,
    y: -20,
    duration: 1.5,
    delay: 1,
    ease: 'power2.out'
  })
})
</script>

<style scoped>
@keyframes line-down {
  0% { h: 0; top: 0; }
  50% { h: 100vh; top: 0; }
  100% { h: 0; top: 100vh; }
}
.animate-line-down {
  animation: line-down 3s infinite ease-in-out;
}
</style>
