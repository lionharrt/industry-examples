<template>
  <section class="py-16 md:py-48 bg-[#dc143c] text-white overflow-hidden">
    <div ref="track" class="flex gap-16 md:gap-32 whitespace-nowrap px-6 md:px-24">
      <div v-for="(t, idx) in [...testimonials, ...testimonials]" :key="idx" class="group cursor-default">
        <div class="flex items-center gap-8 md:gap-12">
          <p class="text-5xl sm:text-7xl md:text-[8vw] font-black uppercase leading-none tracking-tighter opacity-20 group-hover:opacity-100 transition-opacity duration-700 leading-none">
            "{{ t.quote }}"
          </p>
          <span class="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] md:tracking-[1em] opacity-40 italic text-black">— {{ t.author }}</span>
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
