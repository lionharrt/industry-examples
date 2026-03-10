<template>
  <section class="py-16 md:py-48 bg-background text-primary px-6 md:px-24">
    <div class="max-w-4xl mx-auto space-y-16 md:space-y-24 text-center">
      <div v-for="(t, idx) in testimonials" :key="idx" class="group testimonial-block">
        <div class="flex flex-col items-center gap-8 md:gap-12 mb-8 md:mb-12">
          <div class="w-px h-16 md:h-24 bg-accent/30 group-hover:h-24 md:group-hover:h-32 group-hover:bg-accent transition-all duration-1000"></div>
          <span class="text-[10px] font-black uppercase tracking-[0.5em] md:tracking-[1em] text-accent italic leading-none">AFFIDAVIT_0{{ idx + 1 }}</span>
        </div>
        <blockquote class="text-3xl sm:text-5xl md:text-6xl font-serif italic leading-tight tracking-tighter mb-8 md:mb-12 text-primary group-hover:text-accent transition-colors duration-700 italic">
          "{{ t.quote }}"
        </blockquote>
        <div class="space-y-3 md:space-y-4">
          <p class="text-xl font-serif italic text-primary">{{ t.author }}</p>
          <p class="text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-accent italic leading-none">{{ t.role }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useGsapAnimations } from '~/composables/useGsapAnimations'

defineProps<{ testimonials: any[] }>()
const { staggerReveal } = useGsapAnimations()

onMounted(() => {
  staggerReveal('.testimonial-block', 0.4)
})
</script>
