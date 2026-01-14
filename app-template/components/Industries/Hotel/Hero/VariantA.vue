<template>
  <section class="h-screen bg-background text-primary flex items-center justify-center p-6 relative overflow-hidden">
    <!-- Atmospheric overlay -->
    <div class="absolute inset-0 z-0 opacity-20 pointer-events-none bg-gradient-to-b from-accent/20 to-transparent"></div>
    
    <div class="relative z-10 text-center space-y-12">
      <div ref="timeRef" class="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.5em] opacity-40">
        <span>Amalfi Coast</span>
        <div class="w-1 h-1 bg-primary rounded-full"></div>
        <span>18:42</span>
      </div>
      <h1 ref="titleRef" class="text-[12vw] font-serif italic leading-none tracking-tighter shadow-sm">
        {{ title }}
      </h1>
      <p ref="subtitleRef" class="text-sm md:text-xl font-medium tracking-[0.2em] max-w-2xl mx-auto opacity-0 translate-y-4">
        {{ subtitle }}
      </p>
      <div ref="btnRef" class="opacity-0 translate-y-4">
        <button class="px-12 py-5 bg-primary text-background font-black uppercase tracking-widest text-[10px] rounded-full hover:bg-accent hover:text-white transition-all duration-700 shadow-2xl">Begin Escape</button>
      </div>
    </div>
    
    <!-- Floating leaf or petal animation -->
    <div class="absolute top-1/4 left-1/4 w-12 h-12 bg-[#8A9A5B]/20 rounded-full blur-2xl animate-float"></div>
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
const btnRef = ref(null)
const timeRef = ref(null)

onMounted(() => {
  const tl = gsap.timeline({ delay: 0.5 })
  tl.from(timeRef.value, { opacity: 0, y: -20, duration: 1 })
    .from(titleRef.value, { scale: 1.1, opacity: 0, duration: 2, ease: 'power3.out' }, '-=0.5')
    .to(subtitleRef.value, { opacity: 1, y: 0, duration: 1 }, '-=1.2')
    .to(btnRef.value, { opacity: 1, y: 0, duration: 1 }, '-=0.8')
})
</script>

<style scoped>
@keyframes float {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(20px, -20px); }
}
.animate-float {
  animation: float 10s infinite ease-in-out;
}
</style>
