<template>
  <section class="py-16 md:py-48 bg-background text-primary px-6 md:px-24 overflow-hidden relative">
    <div class="max-w-7xl mx-auto space-y-24 md:space-y-48">
      <div v-for="(item, idx) in items" :key="idx" class="group grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24 items-center">
        <div class="lg:col-span-7 h-[50vh] md:h-[70vh] relative overflow-hidden shadow-2xl border-secondary border-8 md:border-[20px]" :class="{ 'lg:order-2': idx % 2 === 1 }">
          <ParallaxImage :src="getUnsplashUrl(item.image, 1600)" speed="0.1" />
          <div class="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-1000"></div>
        </div>
        <div class="lg:col-span-5 space-y-8 md:space-y-12" :class="{ 'lg:text-right': idx % 2 === 1 }">
          <div class="space-y-4">
            <span class="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] md:tracking-[1em] text-accent italic">CASE_REF_0{{ idx + 1 }}</span>
            <h3 class="text-3xl sm:text-5xl md:text-8xl font-serif italic tracking-tighter leading-none text-primary group-hover:translate-x-4 md:group-hover:translate-x-8 transition-transform duration-1000 uppercase italic">{{ item.title }}</h3>
          </div>
          <p class="text-lg md:text-2xl font-light italic text-primary opacity-60 italic">Providing definitive counsel in matters of significant global interest and precedents.</p>
          <button class="bg-primary text-background px-8 md:px-12 py-3 md:py-4 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.5em] hover:bg-accent hover:text-primary transition-all shadow-2xl italic">
            READ_BRIEF
          </button>
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
