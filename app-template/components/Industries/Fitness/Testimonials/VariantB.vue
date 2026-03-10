<template>
  <section class="py-12 md:py-24 bg-white text-black px-6 md:px-24 border-y-[8px] md:border-y-[16px] border-black overflow-hidden">
    <div ref="track" class="flex gap-8 md:gap-12 whitespace-nowrap py-8 md:py-12">
      <div v-for="(t, idx) in [...testimonials, ...testimonials]" :key="idx" class="flex flex-col gap-6 md:gap-8 group bg-black text-accent p-6 md:p-8 border-[8px] md:border-[16px] border-black shadow-[10px_10px_0_0_#CCFF00]">
        <p class="text-2xl sm:text-4xl md:text-[min(4vw,48px)] font-black italic uppercase tracking-tighter leading-[1] whitespace-normal max-w-xl">
          "{{ t.quote }}"
        </p>
        <div class="flex items-center gap-4 md:gap-8">
          <div class="h-2 md:h-4 w-12 md:w-20 bg-accent"></div>
          <span class="text-base md:text-2xl font-black italic uppercase tracking-tighter text-white">{{ t.author }} // {{ t.role }}</span>
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
    duration: 30,
    ease: "none"
  })
})
</script>
