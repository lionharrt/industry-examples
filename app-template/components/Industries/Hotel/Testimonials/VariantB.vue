<template>
  <section class="py-16 md:py-48 bg-primary text-background overflow-hidden relative">
    <div class="absolute inset-0 opacity-5" :style="{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '100px 100px' }"></div>
    
    <div ref="track" class="flex gap-16 md:gap-32 whitespace-nowrap relative z-10">
      <div v-for="(t, idx) in [...testimonials, ...testimonials]" :key="idx" class="flex items-center gap-8 md:gap-16 group cursor-default">
        <p class="text-5xl sm:text-7xl md:text-[8vw] font-serif italic tracking-tighter opacity-10 group-hover:opacity-100 transition-opacity duration-1000 leading-none">
          "{{ t.quote }}"
        </p>
        <div class="flex flex-col items-start gap-2 md:gap-4">
          <span class="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] md:tracking-[1em] text-white/40 italic leading-none">— {{ t.author }}</span>
          <div class="h-px w-16 md:w-24 bg-accent opacity-20 group-hover:w-full transition-all duration-1000"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

defineProps<{ testimonials: any[] }>()
const track = ref(null)

onMounted(() => {
  gsap.to(track.value, {
    xPercent: -50,
    repeat: -1,
    duration: 50,
    ease: "none"
  })
})
</script>
