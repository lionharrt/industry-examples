<template>
  <section class="py-16 md:py-48 bg-background text-primary px-6 md:px-24">
    <div class="max-w-7xl mx-auto space-y-12 md:space-y-24">
      <div class="flex flex-col md:flex-row justify-between items-center md:items-end border-b border-primary/20 pb-8 md:pb-12 text-center md:text-left gap-6">
        <h2 class="text-4xl sm:text-6xl md:text-7xl font-serif italic tracking-tighter text-primary">Case Studies</h2>
        <p class="text-[8px] md:text-[10px] font-black uppercase tracking-[0.5em] md:tracking-[1em] text-accent italic">SELECT_ACHIEVEMENTS</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
        <div v-for="(item, idx) in items" :key="idx" class="group relative aspect-[3/4] overflow-hidden bg-background shadow-2xl">
          <img :src="getUnsplashUrl(item.image, 1200)" class="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[3000ms]" />
          <div class="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90 group-hover:opacity-70 transition-opacity"></div>
          <div class="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-12 space-y-3 md:space-y-4">
            <h3 class="text-2xl md:text-4xl font-serif italic text-primary leading-tight translate-y-8 group-hover:translate-y-0 transition-transform duration-1000">{{ item.title }}</h3>
            <div class="w-12 h-px bg-accent group-hover:w-full transition-all duration-1000"></div>
            <button class="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-accent opacity-0 group-hover:opacity-100 transition-opacity italic">VIEW_SUMMARY</button>
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
