<template>
  <section class="py-16 md:py-48 bg-background text-primary px-6 md:px-24">
    <div class="max-w-7xl mx-auto">
      <div class="mb-16 md:mb-32 flex flex-col md:flex-row justify-between items-center md:items-baseline gap-8 md:gap-12 border-b border-primary/10 pb-12 text-center md:text-left">
        <h2 class="text-5xl sm:text-7xl md:text-8xl font-serif italic tracking-tighter leading-none">The Sanctuary</h2>
        <p class="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-accent">A visual poem of your stay</p>
      </div>

      <div class="columns-1 sm:columns-2 lg:columns-3 gap-6 md:gap-12 space-y-6 md:space-y-12">
        <div 
          v-for="(item, idx) in items" 
          :key="idx" 
          class="portfolio-card break-inside-avoid relative group overflow-hidden rounded-3xl md:rounded-[3rem] cursor-pointer bg-white"
        >
          <img 
            :src="getUnsplashUrl(item.image, 800)" 
            class="w-full h-auto grayscale-[50%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-in-out"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 md:p-12 flex flex-col justify-end">
            <span class="text-accent text-[8px] md:text-[10px] font-black uppercase tracking-widest mb-2 md:mb-4 leading-none">Escape_Room</span>
            <h3 class="text-2xl md:text-3xl font-serif italic text-white leading-tight">{{ item.title }}</h3>
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
