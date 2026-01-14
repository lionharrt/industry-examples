<template>
  <section class="h-screen bg-background flex items-center px-12 md:px-24 relative overflow-hidden">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-24 w-full z-10 items-center">
      <div class="space-y-12">
        <h1 ref="titleRef" class="text-[7vw] font-black leading-tight uppercase text-primary">
          {{ title }}
        </h1>
        <div class="flex items-center gap-8">
          <div class="w-16 h-px bg-secondary"></div>
          <p ref="descRef" class="text-lg text-primary/40 font-medium max-w-sm">
            {{ subtitle }}
          </p>
        </div>
        <button class="group relative px-12 py-6 overflow-hidden rounded-2xl bg-white text-black font-black uppercase tracking-widest text-xs">
          <span class="relative z-10">Start Scaling</span>
          <div class="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
        </button>
      </div>
      
      <div class="relative group">
        <!-- Floating UI Mockup -->
        <div class="aspect-video bg-[#161B22] border border-white/10 rounded-3xl p-8 shadow-2xl rotate-2 group-hover:rotate-0 transition-transform duration-1000 overflow-hidden">
          <div class="flex gap-2 mb-8">
            <div v-for="i in 3" :key="i" class="w-3 h-3 rounded-full bg-white/10"></div>
          </div>
          <div class="space-y-4">
            <div class="h-4 w-1/3 bg-accent/20 rounded-full"></div>
            <div class="h-4 w-full bg-white/5 rounded-full"></div>
            <div class="h-4 w-full bg-white/5 rounded-full"></div>
            <div class="h-32 w-full bg-gradient-to-br from-accent/10 to-secondary/10 rounded-2xl border border-white/5"></div>
          </div>
        </div>
        <!-- Abstract gradient glow -->
        <div class="absolute -inset-24 bg-accent blur-[150px] opacity-20 -z-1 group-hover:opacity-40 transition-opacity"></div>
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
const descRef = ref(null)

onMounted(() => {
  gsap.from(titleRef.value, {
    scale: 0.9,
    opacity: 0,
    duration: 1.5,
    ease: 'expo.out'
  })
})
</script>
