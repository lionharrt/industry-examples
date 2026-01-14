<template>
  <section class="py-48 bg-background text-white px-12 md:px-24 relative overflow-hidden">
    <div class="absolute inset-0 opacity-5" :style="{ backgroundImage: 'radial-gradient(circle at 2px 2px, #C5A059 1px, transparent 0)', backgroundSize: '80px 80px' }"></div>
    
    <div ref="track" class="flex gap-24 whitespace-nowrap py-24 border-y border-accent/30 relative z-10">
      <div v-for="(item, idx) in items" :key="idx" class="flex items-center gap-12 group">
        <h3 class="text-[12vw] font-serif italic text-white/10 group-hover:text-white transition-colors cursor-default uppercase italic">{{ item.title }}</h3>
        <div class="w-px h-32 bg-accent opacity-30"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

defineProps<{ items: any[] }>()
const track = ref(null)

onMounted(() => {
  gsap.to(track.value, {
    xPercent: -50,
    repeat: -1,
    duration: 40,
    ease: "none"
  })
})
</script>
