<template>
  <section class="py-16 md:py-48 bg-background text-primary px-6 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
      <div v-for="(t, idx) in testimonials" :key="idx" class="p-8 md:p-24 bg-white rounded-3xl md:rounded-[5rem] flex flex-col justify-between group hover:-translate-y-4 transition-all duration-1000 relative overflow-hidden">
        <div class="absolute top-0 right-0 p-8 md:p-12 text-6xl md:text-[10vw] font-serif italic opacity-[0.03] group-hover:opacity-10 transition-opacity leading-none">Soul</div>
        
        <div class="space-y-8 md:space-y-12 relative z-10">
          <div class="w-10 h-10 md:w-12 md:h-12 rounded-full bg-background flex items-center justify-center border border-primary/5">
            <Quote :size="18" class="md:hidden text-accent" />
            <Quote :size="20" class="hidden md:block text-accent" />
          </div>
          <blockquote class="text-2xl md:text-3xl font-serif italic leading-relaxed text-primary/60 group-hover:text-primary transition-colors">
            "{{ t.quote }}"
          </blockquote>
        </div>
        <div class="mt-12 md:mt-16 flex items-center gap-6 md:gap-8 relative z-10 pt-8 md:pt-12 border-t border-background">
          <div class="w-12 h-12 md:w-16 md:h-16 rounded-full bg-background border-2 border-accent/20 p-1 flex items-center justify-center">
            <div class="w-full h-full rounded-full bg-background"></div>
          </div>
          <div>
            <p class="text-lg md:text-xl font-serif italic leading-none">{{ t.author }}</p>
            <p class="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-secondary mt-1 md:mt-2 leading-none">{{ t.role }}</p>
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
