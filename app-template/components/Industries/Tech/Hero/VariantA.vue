<template>
  <section class="h-screen bg-background text-primary flex items-center justify-center p-6 relative overflow-hidden">
    <!-- Animated background grid -->
    <div class="absolute inset-0 opacity-10" :style="{ backgroundImage: 'radial-gradient(circle at 2px 2px, #6A0DAD 1px, transparent 0)', backgroundSize: '40px 40px' }"></div>
    
    <div class="relative z-10 text-center space-y-12">
      <div ref="tagRef" class="inline-flex items-center gap-4 px-4 py-2 rounded-full border border-secondary/30 bg-secondary/10 text-secondary text-[10px] font-black uppercase tracking-widest opacity-0">
        <div class="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
        <span>Network Active</span>
      </div>
      <h1 ref="titleRef" class="text-[10vw] font-black leading-none uppercase tracking-tighter">
        {{ title }}
      </h1>
      <p ref="subtitleRef" class="text-primary/40 text-sm md:text-xl max-w-2xl mx-auto font-medium opacity-0">
        {{ subtitle }}
      </p>
      <div ref="buttonsRef" class="flex gap-6 justify-center opacity-0">
        <button class="px-8 py-4 bg-accent rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all shadow-[0_0_30px_rgba(106,13,173,0.3)]">Deploy Now</button>
        <button class="px-8 py-4 border border-white/10 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white/5 transition-all">Documentation</button>
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
}>()

const titleRef = ref(null)
const subtitleRef = ref(null)
const tagRef = ref(null)
const buttonsRef = ref(null)

onMounted(() => {
  const tl = gsap.timeline({ delay: 0.5 })
  tl.to(tagRef.value, { opacity: 1, y: 0, duration: 1 })
    .from(titleRef.value, { y: 50, opacity: 0, duration: 1.2, ease: 'expo.out' }, '-=0.5')
    .to(subtitleRef.value, { opacity: 1, duration: 1 }, '-=0.7')
    .to(buttonsRef.value, { opacity: 1, y: 0, duration: 1 }, '-=0.8')
})
</script>
