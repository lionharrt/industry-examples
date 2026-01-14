<template>
  <section class="py-48 bg-background text-primary px-12 md:px-24 relative overflow-hidden">
    <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-20"></div>
    
    <div class="max-w-4xl mx-auto space-y-24 relative z-10">
      <div v-for="(t, idx) in testimonials" :key="idx" class="group testimonial-row">
        <div class="flex items-center gap-12 mb-12">
          <div class="w-12 h-px bg-accent opacity-20 group-hover:w-24 group-hover:opacity-100 transition-all duration-700"></div>
          <span class="text-[10px] font-black uppercase tracking-[0.5em] text-accent">Client Voice 0{{ idx + 1 }}</span>
        </div>
        <blockquote class="text-4xl md:text-6xl font-bold uppercase leading-none tracking-tighter mb-12 group-hover:italic transition-all duration-700">
          "{{ t.quote }}"
        </blockquote>
        <div class="flex items-center gap-6">
          <div class="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center text-background">
            <Quote :size="20" />
          </div>
          <div>
            <p class="text-sm font-black uppercase tracking-widest italic">{{ t.author }}</p>
            <p class="text-[10px] uppercase tracking-widest text-primary/40">{{ t.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Quote } from 'lucide-vue-next'
import { onMounted } from 'vue'
import { useGsapAnimations } from '~/composables/useGsapAnimations'

defineProps<{ testimonials: any[] }>()
const { staggerReveal } = useGsapAnimations()

onMounted(() => {
  staggerReveal('.testimonial-row', 0.3)
})
</script>
