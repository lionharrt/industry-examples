<template>
  <section class="py-48 bg-white text-background px-12 md:px-24 overflow-hidden relative">
    <div class="absolute -left-12 top-0 text-[40vw] font-black uppercase text-gray-50 pointer-events-none select-none italic">Trust</div>
    
    <div ref="track" class="flex gap-32 whitespace-nowrap relative z-10">
      <div v-for="(t, idx) in [...testimonials, ...testimonials]" :key="idx" class="flex items-center gap-16 group">
        <div class="w-24 h-24 rounded-full border-4 border-accent flex items-center justify-center text-4xl font-black italic opacity-20 group-hover:bg-accent group-hover:opacity-100 transition-all duration-700">“</div>
        <div class="space-y-4">
          <p class="text-5xl md:text-7xl font-bold uppercase tracking-tighter opacity-10 group-hover:opacity-100 transition-all duration-1000">{{ t.quote }}</p>
          <div class="flex items-center gap-6 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300">
            <span class="text-xs font-black uppercase tracking-[0.5em] text-secondary">{{ t.author }}</span>
            <div class="w-12 h-px bg-accent"></div>
          </div>
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
    duration: 40,
    ease: "none"
  })
})
</script>
