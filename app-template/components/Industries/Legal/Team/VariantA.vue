<template>
  <section class="py-16 md:py-48 bg-[#FAF9F6] text-background px-6 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-px bg-background/10 md:border border-background/10 shadow-2xl overflow-hidden rounded-[2rem]">
      <div v-for="(member, idx) in team" :key="idx" class="group relative bg-white overflow-hidden p-6 md:p-8 hover:bg-background hover:text-white transition-all duration-700">
        <div class="aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 shadow-xl border border-black/5 mb-6 md:mb-8">
          <img :src="getUnsplashUrl(member.image, 800)" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
        </div>
        <div class="space-y-3 md:space-y-4 text-center">
          <h3 class="text-2xl md:text-3xl font-serif italic tracking-tighter leading-none">{{ member.name }}</h3>
          <p class="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-accent italic">{{ member.role }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useImage } from '~/composables/useImage'
const { getUnsplashUrl } = useImage()
defineProps<{ team: any[] }>()
</script>
