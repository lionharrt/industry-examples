<template>
  <section class="py-16 md:py-48 bg-white text-black px-6 md:px-24 border-y-[16px] md:border-y-[32px] border-black">
    <div ref="track" class="flex gap-12 md:gap-32 whitespace-nowrap overflow-hidden py-12 md:py-24">
      <div v-for="(t, idx) in [...testimonials, ...testimonials]" :key="idx" class="flex flex-col gap-8 md:gap-16 group bg-black text-accent p-8 md:p-16 border-[12px] md:border-[24px] border-black shadow-[15px_15px_0_0_#CCFF00]">
        <p class="text-5xl sm:text-7xl md:text-[10vw] font-black italic uppercase tracking-tighter leading-none">
          "{{ t.quote }}"
        </p>
        <div class="flex items-center gap-8 md:gap-16">
          <div class="h-4 md:h-8 w-24 md:w-48 bg-accent"></div>
          <span class="text-xl md:text-5xl font-black italic uppercase tracking-tighter text-white">{{ t.author }} // {{ t.role }}</span>
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
