<template>
  <section class="py-48 bg-secondary text-background px-12 md:px-24">
    <div class="max-w-7xl mx-auto flex flex-col items-center gap-24">
      <div ref="track" class="flex gap-24 whitespace-nowrap overflow-hidden py-12 border-y-2 border-background/10">
        <div v-for="(t, idx) in [...testimonials, ...testimonials]" :key="idx" class="flex items-center gap-12 group cursor-default">
          <p class="text-6xl font-serif italic tracking-tighter opacity-20 group-hover:opacity-100 transition-opacity duration-700 italic">"{{ t.quote }}"</p>
          <div class="h-2 w-24 bg-accent"></div>
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
