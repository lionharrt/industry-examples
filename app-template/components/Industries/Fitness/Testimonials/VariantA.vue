<template>
  <section class="py-16 md:py-48 bg-black text-white px-6 md:px-24 relative overflow-hidden border-y-8 md:border-y-[16px] border-accent">
    <div class="max-w-4xl mx-auto space-y-12 md:space-y-24 relative z-10">
      <div v-for="(t, idx) in testimonials" :key="idx" class="group testimonial-block border-l-8 md:border-l-[16px] border-white pl-6 md:pl-12 py-6 md:py-12 hover:border-accent transition-colors shadow-[8px_8px_0_0_#CCFF00] mb-8 md:mb-16 bg-black">
        <blockquote class="text-2xl sm:text-4xl md:text-6xl font-black italic uppercase leading-[0.9] tracking-tighter mb-8 group-hover:text-accent transition-colors duration-300">
          "{{ t.quote }}"
        </blockquote>
        <div class="flex items-center gap-4 md:gap-8">
          <div class="w-12 h-12 md:w-20 md:h-20 bg-accent text-black flex items-center justify-center font-black italic text-lg md:text-3xl border-4 border-black">0{{ idx + 1 }}</div>
          <div>
            <p class="text-lg md:text-3xl font-black italic uppercase tracking-tighter">{{ t.author }}</p>
            <p class="text-[10px] md:text-base font-black uppercase tracking-[0.2em] text-accent italic">{{ t.role }}</p>
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
