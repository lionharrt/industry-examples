<template>
  <section class="py-48 bg-[#B4B4B4] text-[#0A0A0A] px-12 md:px-24">
    <div ref="track" class="flex gap-24 whitespace-nowrap overflow-hidden py-32 border-y-8 border-[#0A0A0A]">
      <div v-for="(t, idx) in [...testimonials, ...testimonials]" :key="idx" class="flex flex-col gap-8 group">
        <p class="text-9xl font-black italic uppercase tracking-tighter group-hover:translate-x-16 transition-transform duration-[1500ms] italic">
          "{{ t.quote }}"
        </p>
        <div class="flex items-center gap-12">
          <div class="h-2 w-32 bg-[#E60000] group-hover:w-64 transition-all duration-1000"></div>
          <span class="text-3xl font-black italic uppercase tracking-[0.2em] italic">{{ t.author }} // {{ t.role }}</span>
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
