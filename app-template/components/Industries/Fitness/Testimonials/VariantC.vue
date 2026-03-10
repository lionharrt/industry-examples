<template>
  <section class="py-12 md:py-24 bg-accent text-black px-6 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 border-[12px] md:border-[20px] border-black p-6 md:p-12 lg:p-16 bg-white shadow-[16px_16px_0_0_#ffffff]">
      <div v-for="(t, idx) in testimonials" :key="idx" class="p-6 md:p-10 lg:p-12 bg-black text-white group hover:bg-white hover:text-black transition-all duration-300 relative overflow-hidden border-4 md:border-8 border-black flex flex-col justify-between">
        <div class="space-y-6 md:space-y-10 relative z-10">
          <div class="w-16 h-16 md:w-20 md:h-20 bg-accent text-black flex items-center justify-center border-4 md:border-8 border-black group-hover:border-white">
            <Quote :size="32" stroke-width="4" />
          </div>
          <blockquote class="text-3xl md:text-4xl lg:text-5xl font-black italic uppercase leading-[1] tracking-tighter">
            "{{ t.quote }}"
          </blockquote>
        </div>
        <div class="pt-6 md:pt-8 mt-8 border-t-4 md:border-t-8 border-accent group-hover:border-black transition-colors relative z-10">
          <p class="text-2xl md:text-3xl lg:text-4xl font-black italic uppercase text-accent group-hover:text-black leading-none">{{ t.author }}</p>
          <p class="text-xs md:text-sm lg:text-base font-black uppercase tracking-[0.2em] opacity-60 mt-1">{{ t.role }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Quote } from 'lucide-vue-next'
defineProps<{ testimonials: any[] }>()
</script>
