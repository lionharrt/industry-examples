<template>
  <section class="py-48 bg-background text-primary px-12 md:px-24 relative overflow-hidden">
    <div class="absolute top-0 left-0 w-full h-px bg-black/10"></div>
    
    <div class="max-w-4xl mx-auto space-y-24 relative z-10">
      <div v-for="(t, idx) in testimonials" :key="idx" class="group testimonial-block">
        <div class="flex items-center gap-12 mb-12">
          <div class="w-16 h-1 bg-primary"></div>
          <span class="text-[10px] font-black uppercase tracking-[0.5em] text-accent">Critique 0{{ idx + 1 }}</span>
        </div>
        <blockquote class="text-4xl md:text-6xl font-black uppercase leading-none tracking-tighter mb-12 group-hover:italic transition-all duration-700">
          "{{ t.quote }}"
        </blockquote>
        <div class="flex items-center gap-6">
          <div class="w-12 h-12 rounded-full border-2 border-black/10 flex items-center justify-center group-hover:bg-primary transition-all">
            <div class="w-2 h-2 bg-primary group-hover:bg-white rounded-full"></div>
          </div>
          <div>
            <p class="text-sm font-black uppercase tracking-widest">{{ t.author }}</p>
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
