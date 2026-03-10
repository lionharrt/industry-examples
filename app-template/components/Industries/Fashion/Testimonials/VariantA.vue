<template>
  <section class="py-16 md:py-48 bg-black text-white px-6 md:px-24 relative overflow-hidden">
    <div class="absolute -right-6 md:-right-12 top-0 text-[40vw] md:text-[30vw] font-black italic opacity-[0.03] select-none pointer-events-none leading-none">PRSS</div>
    
    <div class="max-w-4xl mx-auto text-center space-y-16 md:space-y-24 relative z-10">
      <div v-for="(t, idx) in testimonials" :key="idx" class="testimonial-card group cursor-default">
        <blockquote class="text-3xl sm:text-5xl md:text-7xl font-black uppercase leading-none tracking-tighter mb-8 md:mb-12 group-hover:italic transition-all duration-700 leading-none">
          "{{ t.quote }}"
        </blockquote>
        <div class="flex flex-col items-center gap-3 md:gap-4">
          <div class="w-8 md:w-12 h-0.5 md:h-1 bg-[#dc143c]"></div>
          <p class="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-white/40">{{ t.author }} — {{ t.role }}</p>
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
