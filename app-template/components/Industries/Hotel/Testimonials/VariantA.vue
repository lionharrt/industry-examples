<template>
  <section class="py-48 bg-background text-primary px-12 md:px-24 relative overflow-hidden">
    <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-20"></div>
    
    <div class="max-w-4xl mx-auto text-center space-y-24 relative z-10">
      <div v-for="(t, idx) in testimonials" :key="idx" class="group testimonial-block">
        <div class="flex flex-col items-center gap-8 mb-12">
          <div class="w-px h-16 bg-primary/10 group-hover:h-32 group-hover:bg-accent transition-all duration-1000"></div>
          <span class="text-[10px] font-black uppercase tracking-[0.5em] text-secondary">Echo 0{{ idx + 1 }}</span>
        </div>
        <blockquote class="text-4xl md:text-6xl font-serif italic leading-tight tracking-tighter mb-12 group-hover:text-accent transition-colors duration-700">
          "{{ t.quote }}"
        </blockquote>
        <div class="flex flex-col items-center gap-4">
          <p class="text-sm font-black uppercase tracking-widest">{{ t.author }}</p>
          <p class="text-[10px] uppercase tracking-widest text-secondary font-black italic">{{ t.role }}</p>
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
