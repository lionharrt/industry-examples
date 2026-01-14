<template>
  <section class="py-48 bg-white text-black px-12 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-black border-8 border-black shadow-[30px_30px_0_0_#CCFF00]">
      <div v-for="(t, idx) in testimonials" :key="idx" class="p-16 bg-white group hover:bg-black hover:text-primary transition-all duration-700 relative overflow-hidden">
        <div class="absolute top-0 right-0 p-8 text-9xl font-black italic opacity-[0.05] group-hover:text-accent transition-colors">V</div>
        <div class="space-y-12 relative z-10">
          <div class="w-16 h-16 bg-accent text-black flex items-center justify-center">
            <Quote :size="32" stroke-width="3" />
          </div>
          <blockquote class="text-3xl font-black italic uppercase leading-none tracking-tighter group-hover:translate-x-4 transition-transform duration-700">
            "{{ t.quote }}"
          </blockquote>
          <div class="pt-8 border-t-2 border-black/10 group-hover:border-white/20">
            <p class="text-2xl font-black italic uppercase text-accent">{{ t.author }}</p>
            <p class="text-xs font-black uppercase tracking-widest opacity-40">{{ t.role }}</p>
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
