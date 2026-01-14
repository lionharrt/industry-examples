<template>
  <section class="py-48 bg-white text-background px-12 md:px-24">
    <div class="max-w-4xl mx-auto space-y-24 text-center">
      <div v-for="(t, idx) in testimonials" :key="idx" class="group testimonial-block">
        <div class="flex flex-col items-center gap-12 mb-12">
          <div class="w-px h-24 bg-accent/30 group-hover:h-32 group-hover:bg-accent transition-all duration-1000"></div>
          <span class="text-[10px] font-black uppercase tracking-[1em] text-accent italic">AFFIDAVIT_0{{ idx + 1 }}</span>
        </div>
        <blockquote class="text-4xl md:text-6xl font-serif italic leading-tight tracking-tighter mb-12 group-hover:text-background transition-colors duration-700 italic">
          "{{ t.quote }}"
        </blockquote>
        <div class="space-y-4">
          <p class="text-xl font-serif italic">{{ t.author }}</p>
          <p class="text-[10px] font-black uppercase tracking-[0.5em] text-accent italic">{{ t.role }}</p>
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
