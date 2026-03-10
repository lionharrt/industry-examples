<template>
  <section class="py-16 md:py-48 bg-background text-primary px-6 md:px-24 overflow-hidden relative">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24">
      <div v-for="(t, idx) in testimonials" :key="idx" class="p-8 md:p-16 border border-accent/20 bg-secondary/10 hover:bg-primary hover:text-background transition-all duration-1000 relative overflow-hidden group shadow-sm">
        <div class="absolute -top-6 -right-6 md:-top-12 md:-right-12 text-[15vw] font-serif italic text-primary opacity-[0.02] group-hover:text-background group-hover:opacity-5 transition-all italic">Trust</div>
        <div class="space-y-8 md:space-y-12 relative z-10">
          <Quote :size="32" class="md:hidden text-accent" stroke-width="1" />
          <Quote :size="48" stroke-width="1" class="hidden md:block text-accent" />
          <blockquote class="text-xl md:text-3xl font-serif italic leading-relaxed text-primary group-hover:text-background group-hover:translate-x-4 transition-all duration-700 italic">
            "{{ t.quote }}"
          </blockquote>
          <div class="pt-8 md:pt-12 border-t border-accent/20">
            <p class="text-lg md:text-xl font-black uppercase tracking-widest text-primary group-hover:text-background transition-colors">{{ t.author }}</p>
            <p class="text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-accent opacity-40 group-hover:opacity-100 italic mt-2 leading-none transition-all">{{ t.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Quote } from 'lucide-vue-next'
defineProps<{ testimonials: any[] }>()
</script>
