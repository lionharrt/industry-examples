<template>
  <section class="py-16 md:py-48 bg-background text-primary px-6 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      <div v-for="(member, idx) in team" :key="idx" class="group cursor-pointer">
        <div class="aspect-[3/4] relative overflow-hidden rounded-3xl md:rounded-[4rem] mb-4 md:mb-8 bg-white p-2 md:p-4">
          <div class="w-full h-full rounded-2xl md:rounded-[3rem] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000">
            <img :src="getUnsplashUrl(member.image, 800)" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
          </div>
          <div class="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
        <div class="text-center space-y-1 md:space-y-2">
          <h3 class="text-2xl md:text-3xl font-serif italic leading-none">{{ member.name }}</h3>
          <p class="text-accent text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] opacity-60 group-hover:opacity-100 transition-opacity leading-none">{{ member.role }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useImage } from '~/composables/useImage'
defineProps<{ team: any[] }>()
const { getUnsplashUrl } = useImage()
</script>
