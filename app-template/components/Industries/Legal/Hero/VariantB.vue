<template>
  <section class="relative h-screen w-full bg-secondary text-background flex items-center overflow-hidden px-12 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
      <div class="lg:col-span-7 space-y-12 relative z-10">
        <div class="space-y-4">
          <span class="text-xs font-black uppercase tracking-[1em] text-accent">ESTABLISHED 1982</span>
          <h1 class="text-7xl md:text-9xl font-serif italic leading-none tracking-tighter uppercase">
            {{ title?.split(' ')[0] }} <br/>
            <span class="text-accent">{{ title?.split(' ').slice(1).join(' ') }}</span>
          </h1>
        </div>
        <p class="text-2xl font-light italic leading-relaxed max-w-xl opacity-60">
          {{ subtitle }}
        </p>
        <button class="group flex items-center gap-8 text-sm font-black uppercase tracking-widest border-b border-background pb-2">
          <span>{{ cta }}</span>
          <ArrowRight :size="20" class="group-hover:translate-x-4 transition-transform duration-500" />
        </button>
      </div>
      
      <div class="lg:col-span-5 relative aspect-[3/4] overflow-hidden rounded-[2rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000">
        <ParallaxImage src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1200" speed="0.05" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
defineProps<{ title: string, subtitle: string, cta: string }>()
</script>
