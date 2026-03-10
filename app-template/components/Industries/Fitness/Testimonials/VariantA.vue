<template>
  <section class="py-12 md:py-24 bg-black text-white px-6 md:px-24 relative overflow-hidden border-y-8 md:border-y-[12px] border-accent">
    <div class="max-w-4xl mx-auto space-y-8 md:space-y-16 relative z-10">
      <div v-for="(t, idx) in testimonials" :key="idx" class="group testimonial-block border-l-4 md:border-l-[8px] border-white pl-6 md:pl-10 py-4 md:py-8 hover:border-accent transition-colors shadow-[8px_8px_0_0_#CCFF00] mb-6 md:mb-12 bg-black">
        <blockquote class="text-2xl sm:text-4xl md:text-[min(6vw,60px)] font-black italic uppercase leading-[1.3] tracking-tighter mb-6 group-hover:text-accent transition-colors duration-300">
          "{{ t.quote }}"
        </blockquote>
        <div class="flex items-center gap-4 md:gap-6">
          <div class="w-10 h-10 md:w-16 md:h-16 bg-accent text-black flex items-center justify-center font-black italic text-base md:text-2xl border-2 md:border-4 border-black">0{{ idx + 1 }}</div>
          <div>
            <p class="text-lg md:text-2xl font-black italic uppercase tracking-tighter leading-none">{{ t.author }}</p>
            <p class="text-[10px] md:text-sm font-black uppercase tracking-[0.2em] text-accent italic mt-1">{{ t.role }}</p>
          </div>
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
  staggerReveal('.testimonial-block', 0.3)
})
</script>
