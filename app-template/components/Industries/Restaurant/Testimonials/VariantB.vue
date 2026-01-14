<template>
  <section class="py-48 bg-black text-white px-6 md:px-24 overflow-hidden relative">
    <div class="absolute -left-12 top-0 text-[40vw] font-serif font-black italic text-white/5 pointer-events-none select-none">
      Words
    </div>
    
    <div ref="slider" class="flex gap-24 whitespace-nowrap">
      <div v-for="(t, idx) in [...testimonials, ...testimonials]" :key="idx" class="flex items-center gap-12">
        <div class="w-px h-24 bg-[#D4AF37]"></div>
        <p class="text-4xl md:text-5xl font-serif italic text-white/20 hover:text-white transition-colors cursor-default">
          {{ t.quote }}
        </p>
        <span class="text-xs font-black uppercase tracking-widest opacity-40">— {{ t.author }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'

defineProps<{ testimonials: any[] }>()
const slider = ref(null)
let animation: gsap.core.Tween | null = null

onMounted(() => {
  animation = gsap.to(slider.value, {
    xPercent: -50,
    repeat: -1,
    duration: 40,
    ease: "none"
  })
})

onBeforeUnmount(() => {
  if (animation) animation.kill()
})
</script>
