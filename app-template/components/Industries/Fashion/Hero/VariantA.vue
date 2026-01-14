<template>
  <section class="h-screen bg-black text-primary flex flex-col items-center justify-center p-6 relative overflow-hidden">
    <!-- Grainy overlay effect -->
    <div class="absolute inset-0 z-1 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    
    <div class="relative z-10 text-center">
      <h1 ref="titleRef" class="text-[18vw] font-black uppercase leading-[0.75] tracking-tighter mix-blend-difference">
        {{ title?.split(' ')[0] }}<br/>
        <span class="text-accent italic">{{ title?.split(' ')[1] }}</span>
      </h1>
      <p ref="subtitleRef" class="text-xs font-bold uppercase tracking-[1.5em] mt-12 opacity-0">
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
