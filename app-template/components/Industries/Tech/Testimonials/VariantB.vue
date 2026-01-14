<template>
  <section class="py-48 bg-background text-primary px-12 md:px-24 overflow-hidden">
    <div ref="slider" class="flex gap-24 whitespace-nowrap">
      <div v-for="(t, idx) in [...testimonials, ...testimonials]" :key="idx" class="flex items-center gap-12 group">
        <div class="w-24 h-px bg-accent opacity-30 group-hover:w-48 transition-all duration-1000"></div>
        <div class="space-y-4">
          <p class="text-5xl font-black uppercase tracking-tighter text-primary/20 group-hover:text-primary transition-colors duration-500">{{ t.quote }}</p>
          <div class="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span class="text-xs font-black uppercase tracking-widest text-secondary">{{ t.author }}</span>
            <span class="text-[10px] uppercase tracking-widest text-primary/20">{{ t.role }}</span>
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
const slider = ref(null)

onMounted(() => {
  gsap.to(slider.value, {
    xPercent: -50,
    repeat: -1,
    duration: 30,
    ease: "none"
  })
})
</script>
