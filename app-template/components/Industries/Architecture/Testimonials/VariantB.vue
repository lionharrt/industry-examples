<template>
  <section class="py-48 bg-primary text-white px-12 md:px-24 overflow-hidden relative">
    <div class="absolute inset-0 opacity-5" :style="{ backgroundImage: 'linear-gradient(#A9A9A9 1px, transparent 1px), linear-gradient(90deg, #A9A9A9 1px, transparent 1px)', backgroundSize: '100px 100px' }"></div>
    
    <div ref="track" class="flex gap-32 whitespace-nowrap relative z-10">
      <div v-for="(t, idx) in [...testimonials, ...testimonials]" :key="idx" class="flex items-center gap-16 group cursor-default">
        <p class="text-[8vw] font-black uppercase tracking-tighter opacity-10 group-hover:opacity-100 transition-opacity duration-1000">
          "{{ t.quote }}"
        </p>
        <div class="flex flex-col items-start gap-4">
          <span class="text-xs font-black uppercase tracking-[1em] text-accent italic">{{ t.author }}</span>
          <div class="h-px w-24 bg-accent opacity-20"></div>
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
