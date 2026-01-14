<template>
  <section class="relative h-screen w-full bg-[#B4B4B4] text-[#0A0A0A] flex items-center overflow-hidden px-12 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
      <div class="lg:col-span-6 space-y-12 relative z-10">
        <div class="w-32 h-2 bg-[#E60000]"></div>
        <h1 class="text-8xl md:text-9xl font-black italic leading-[0.8] tracking-tighter uppercase">
          {{ title?.split(' ')[0] }}<br/>
          <span class="text-primary drop-shadow-[4px_4px_0_#0A0A0A]">{{ title?.split(' ').slice(1).join(' ') }}</span>
        </h1>
        <p class="text-2xl font-bold uppercase tracking-widest max-w-xl opacity-60 italic">
          {{ subtitle }}
        </p>
        <button class="group flex items-center gap-8 text-xl font-black uppercase italic tracking-widest bg-[#0A0A0A] text-primary px-12 py-4 rounded-full hover:bg-[#E60000] transition-colors duration-500">
          <span>{{ cta }}</span>
          <ArrowRight :size="24" class="group-hover:translate-x-4 transition-transform" />
        </button>
      </div>
      
      <div class="lg:col-span-6 relative h-full">
        <div class="aspect-square bg-[#0A0A0A] rotate-45 scale-125 overflow-hidden shadow-2xl">
          <div class="rotate-[-45deg] scale-150 h-full w-full">
            <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200" class="w-full h-full object-cover grayscale" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
defineProps<{ title: string, subtitle: string, cta: string }>()
</script>
