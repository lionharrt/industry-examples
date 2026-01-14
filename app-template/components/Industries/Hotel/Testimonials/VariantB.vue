<template>
  <section class="py-48 bg-primary text-background overflow-hidden relative">
    <div class="absolute inset-0 opacity-5" :style="{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '100px 100px' }"></div>
    
    <div ref="track" class="flex gap-32 whitespace-nowrap relative z-10">
      <div v-for="(t, idx) in [...testimonials, ...testimonials]" :key="idx" class="flex items-center gap-16 group cursor-default">
        <p class="text-[8vw] font-serif italic tracking-tighter opacity-10 group-hover:opacity-100 transition-opacity duration-1000">
          "{{ t.quote }}"
        </p>
        <div class="flex flex-col items-start gap-4">
          <span class="text-xs font-black uppercase tracking-[1em] text-white/40 italic">— {{ t.author }}</span>
          <div class="h-px w-24 bg-accent opacity-20 group-hover:w-full transition-all duration-1000"></div>
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
