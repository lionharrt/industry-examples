<template>
  <section class="py-16 md:py-48 bg-accent text-black px-6 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 border-[16px] md:border-[32px] border-black p-8 md:p-24 bg-white shadow-[20px_20px_0_0_#ffffff]">
      <div v-for="(t, idx) in testimonials" :key="idx" class="p-8 md:p-16 bg-black text-white group hover:bg-white hover:text-black transition-all duration-300 relative overflow-hidden border-8 border-black">
        <div class="space-y-8 md:space-y-16 relative z-10">
          <div class="w-20 h-20 md:w-32 md:h-32 bg-accent text-black flex items-center justify-center border-8 border-black group-hover:border-white">
            <Quote :size="48" stroke-width="4" />
          </div>
          <blockquote class="text-3xl md:text-6xl font-black italic uppercase leading-[0.8] tracking-tighter">
            "{{ t.quote }}"
          </blockquote>
          <div class="pt-8 border-t-[8px] border-accent group-hover:border-black transition-colors">
            <p class="text-2xl md:text-5xl font-black italic uppercase text-accent group-hover:text-black">{{ t.author }}</p>
            <p class="text-sm md:text-2xl font-black uppercase tracking-widest opacity-60">{{ t.role }}</p>
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
