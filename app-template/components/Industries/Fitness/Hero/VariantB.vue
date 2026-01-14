<template>
  <section class="relative h-screen w-full bg-white text-black flex items-center overflow-hidden">
    <div class="absolute inset-y-0 right-0 w-1/2 z-0">
      <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200" class="w-full h-full object-cover grayscale contrast-125" />
      <div class="absolute inset-0 bg-accent/40 mix-blend-multiply"></div>
    </div>

    <div class="relative z-10 px-12 md:px-24 max-w-4xl space-y-12">
      <div class="w-24 h-4 bg-black"></div>
      <h1 class="text-8xl md:text-9xl font-black italic leading-[0.8] tracking-tighter uppercase">
        {{ title?.split(' ')[0] }}<br/>
        <span class="text-accent bg-black px-4">{{ title?.split(' ').slice(1).join(' ') }}</span>
      </h1>
      <p class="text-xl font-bold uppercase tracking-widest max-w-md">
        {{ subtitle }}
      </p>
      <button class="group flex items-center gap-6 text-2xl font-black uppercase italic">
        <span>{{ cta }}</span>
        <div class="w-16 h-16 rounded-full bg-black text-accent flex items-center justify-center group-hover:translate-x-4 transition-transform">
          <ArrowRight :size="32" />
        </div>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
defineProps<{ title: string, subtitle: string, cta: string }>()
</script>
