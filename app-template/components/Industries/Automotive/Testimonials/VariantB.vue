<template>
  <section class="py-16 md:py-48 bg-[#B4B4B4] text-[#0A0A0A] px-6 md:px-24 overflow-hidden relative border-y-8 md:border-y-[16px] border-black">
    <div ref="track" class="flex gap-12 md:gap-24 overflow-hidden py-16 md:py-32 w-fit">
      <div v-for="(t, idx) in [...testimonials, ...testimonials]" :key="idx" class="flex-shrink-0 w-[85vw] md:w-[45vw] flex flex-col gap-6 md:gap-10 group bg-black text-primary p-8 md:p-12 border-8 md:border-[16px] border-black shadow-[12px_12px_0_0_#E60000]">
        <p class="text-2xl sm:text-4xl md:text-5xl font-black italic uppercase tracking-tighter group-hover:translate-x-4 md:group-hover:translate-x-8 transition-transform duration-[1500ms] italic leading-tight whitespace-normal">
          "{{ t.quote }}"
        </p>
        <div class="flex items-center gap-6 md:gap-12 mt-auto">
          <div class="h-2 md:h-4 w-16 md:w-24 bg-[#E60000] group-hover:w-full transition-all duration-1000"></div>
          <span class="text-lg md:text-2xl font-black italic uppercase tracking-tighter italic text-white whitespace-normal">{{ t.author }} // {{ t.role }}</span>
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
    duration: 35,
    ease: "none"
  })
})
</script>
