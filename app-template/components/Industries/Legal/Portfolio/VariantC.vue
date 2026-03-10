<template>
  <section class="py-16 md:py-32 bg-background text-primary px-6 md:px-24 overflow-hidden relative">
    <div class="absolute inset-0 opacity-5" :style="{ backgroundImage: 'radial-gradient(circle at 2px 2px, #C5A059 1px, transparent 0)', backgroundSize: '80px 80px' }"></div>
    
    <div class="max-w-7xl mx-auto space-y-12 md:space-y-24 relative z-10">
      <div class="flex flex-col md:flex-row justify-between items-center md:items-end border-b border-accent/30 pb-8 md:pb-12 text-center md:text-left gap-6">
        <h2 class="text-4xl sm:text-5xl md:text-7xl font-serif italic tracking-tighter uppercase text-accent italic">Case Studies</h2>
        <div class="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] text-primary/40 italic mb-2">PRECEDENT_PORTFOLIO</div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-16">
        <div v-for="(item, idx) in items" :key="idx" class="group space-y-6 md:space-y-8">
          <div class="aspect-video relative overflow-hidden shadow-xl border border-primary/10 bg-secondary/10">
            <img :src="getUnsplashUrl(item.image, 1600)" class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[3000ms]" />
            <div class="absolute inset-0 bg-background/40 group-hover:bg-transparent transition-colors duration-1000"></div>
            <div class="absolute top-6 left-6 text-[8px] md:text-[10px] font-black uppercase tracking-widest text-accent bg-background/80 px-4 py-2 italic border border-accent/20">
              LEGAL_FILING_{{ 2400 + idx }}
            </div>
          </div>
          <div class="space-y-3 md:space-y-4">
            <h3 class="text-2xl md:text-4xl font-serif italic tracking-tighter uppercase italic leading-none group-hover:text-accent transition-colors">{{ item.title }}</h3>
            <div class="h-px w-16 bg-accent group-hover:w-full transition-all duration-1000"></div>
            <p class="text-base md:text-lg font-light italic text-primary/40 leading-relaxed max-w-xl italic">
              A landmark representation involving complex multi-jurisdictional frameworks and strategic dispute resolution.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useImage } from '~/composables/useImage'
const { getUnsplashUrl } = useImage()
defineProps<{ items: any[] }>()
</script>
