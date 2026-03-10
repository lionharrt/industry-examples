<template>
  <section class="py-16 md:py-48 bg-background text-primary px-6 md:px-24 relative overflow-hidden text-center md:text-left">
    <div class="absolute top-0 left-0 w-full h-px bg-black/10"></div>
    
    <div v-for="i in 1" :key="i" class="max-w-4xl mx-auto space-y-16 md:space-y-24 relative z-10">
      <div v-for="(t, idx) in testimonials" :key="idx" class="group testimonial-block">
        <div class="flex flex-col md:flex-row items-center gap-6 md:gap-12 mb-8 md:mb-12">
          <div class="w-12 md:w-16 h-1 bg-primary"></div>
          <span class="text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-accent">Critique 0{{ idx + 1 }}</span>
        </div>
        <blockquote class="text-2xl sm:text-4xl md:text-6xl font-black uppercase leading-none tracking-tighter mb-8 md:mb-12 group-hover:italic transition-all duration-700 italic">
          "{{ t.quote }}"
        </blockquote>
        <div class="flex items-center gap-4 md:gap-6 justify-center md:justify-start">
          <div v-for="j in 1" :key="j" class="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-black/10 flex items-center justify-center group-hover:bg-primary transition-all">
            <div class="w-2 h-2 bg-primary group-hover:bg-white rounded-full"></div>
          </div>
          <div class="text-left">
            <p class="text-xs md:text-sm font-black uppercase tracking-widest">{{ t.author }}</p>
            <p class="text-[10px] uppercase tracking-widest text-accent font-black">{{ t.role }}</p>
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
