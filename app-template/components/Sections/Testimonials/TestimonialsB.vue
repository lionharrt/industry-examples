<template>
  <section class="py-32 bg-background px-12 overflow-hidden">
    <div ref="scrollContainer" class="flex gap-24 whitespace-nowrap">
      <div v-for="(t, idx) in [...testimonials, ...testimonials]" :key="idx" class="text-[6vw] font-black uppercase tracking-tighter opacity-20 hover:opacity-100 transition-opacity cursor-default">
        "{{ t.quote }}"
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

defineProps<{ testimonials: any[] }>()
const scrollContainer = ref<HTMLElement | null>(null)

onMounted(() => {
  if (scrollContainer.value) {
    gsap.to(scrollContainer.value, {
      xPercent: -50,
      repeat: -1,
      duration: 30,
      ease: 'none'
    })
  }
})
</script>
