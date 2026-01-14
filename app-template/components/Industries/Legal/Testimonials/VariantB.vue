<template>
  <section class="py-48 bg-background text-accent px-12 md:px-24 overflow-hidden relative">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
      <div v-for="(t, idx) in testimonials" :key="idx" class="p-16 border border-accent/20 bg-white/5 hover:bg-white hover:text-background transition-all duration-1000 relative overflow-hidden group">
        <div class="absolute -top-12 -right-12 text-[15vw] font-serif italic opacity-[0.02] group-hover:opacity-5 transition-opacity italic">Trust</div>
        <div class="space-y-12 relative z-10">
          <Quote :size="48" stroke-width="1" class="text-accent" />
          <blockquote class="text-3xl font-serif italic leading-relaxed group-hover:translate-x-4 transition-transform duration-700 italic">
            "{{ t.quote }}"
          </blockquote>
          <div class="pt-12 border-t border-accent/20">
            <p class="text-xl font-black uppercase tracking-widest">{{ t.author }}</p>
            <p class="text-[10px] font-black uppercase tracking-[0.5em] opacity-40 italic mt-2">{{ t.role }}</p>
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
