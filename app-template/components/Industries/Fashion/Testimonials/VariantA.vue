<template>
  <section class="py-48 bg-black text-primary px-12 md:px-24 relative overflow-hidden">
    <div class="absolute -right-12 top-0 text-[30vw] font-black italic opacity-[0.03] select-none pointer-events-none">PRSS</div>
    
    <div class="max-w-4xl mx-auto text-center space-y-24 relative z-10">
      <div v-for="(t, idx) in testimonials" :key="idx" class="testimonial-card group cursor-default">
        <blockquote class="text-4xl md:text-7xl font-black uppercase leading-none tracking-tighter mb-12 group-hover:italic transition-all duration-700">
          "{{ t.quote }}"
        </blockquote>
        <div class="flex flex-col items-center gap-4">
          <div class="w-12 h-1 bg-accent"></div>
          <p class="text-xs font-black uppercase tracking-[0.5em] text-primary/40">{{ t.author }} — {{ t.role }}</p>
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
  staggerReveal('.testimonial-card', 0.4)
})
</script>
