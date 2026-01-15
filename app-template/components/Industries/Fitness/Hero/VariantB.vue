<template>
  <section class="relative min-h-screen w-full bg-white text-black flex items-center overflow-hidden py-16 md:py-0">
    <!-- Visual side -->
    <div class="absolute inset-0 md:inset-y-0 md:right-0 md:left-auto md:w-1/2 z-0 border-l-8 md:border-l-[16px] border-black">
      <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200" class="w-full h-full object-cover grayscale brightness-50 md:brightness-100" />
      <div class="absolute inset-0 bg-accent/10 mix-blend-multiply"></div>
    </div>

    <div class="relative z-10 px-6 md:px-24 max-w-3xl space-y-6 md:space-y-10">
      <div class="space-y-2">
        <div class="w-12 md:w-20 h-2 md:h-4 bg-black"></div>
        <div class="w-6 md:w-10 h-1 md:h-2 bg-accent"></div>
      </div>
      
      <h1 class="text-5xl sm:text-6xl md:text-8xl font-black italic leading-[0.9] tracking-tighter uppercase">
        {{ title?.split(' ')[0] }}<br/>
        <span class="bg-black text-accent px-3 py-1 inline-block mt-2">{{ title?.split(' ').slice(1).join(' ') }}</span>
      </h1>
      
      <p class="text-sm md:text-xl font-bold uppercase tracking-tight max-w-md border-l-4 border-black pl-4">
        {{ subtitle }}
      </p>
      
      <button class="group flex items-center gap-4 md:gap-8 text-lg md:text-2xl font-black uppercase italic">
        <span class="border-b-4 border-black group-hover:border-accent transition-colors">{{ cta }}</span>
        <div class="w-12 h-12 md:w-16 md:h-16 bg-black text-accent flex items-center justify-center group-hover:translate-x-3 transition-transform">
          <ArrowRight :size="32" stroke-width="3" class="hidden md:block" />
          <ArrowRight :size="24" stroke-width="3" class="md:hidden" />
        </div>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
defineProps<{ title: string, subtitle: string, cta: string }>()
</script>
