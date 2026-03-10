<template>
  <section class="py-16 md:py-48 bg-background text-primary px-6 md:px-24">
    <div class="max-w-7xl mx-auto flex gap-6 md:gap-12 overflow-x-auto hide-scrollbar pb-8 md:pb-12">
      <div v-for="(member, idx) in team" :key="idx" class="min-w-[280px] md:min-w-[450px] group bg-background rounded-3xl md:rounded-[5rem] p-8 md:p-16 flex flex-col justify-between transition-all duration-1000 relative overflow-hidden border border-primary/5">
        <div class="text-6xl md:text-[15vw] font-serif italic absolute -right-4 md:-right-8 -top-4 md:-top-12 opacity-[0.02] group-hover:text-accent transition-colors">W</div>
        <div class="relative aspect-square md:h-[50vh] overflow-hidden rounded-3xl md:rounded-[4rem] mb-8 md:mb-16 grayscale group-hover:grayscale-0 transition-all duration-1000 border-4 md:border-8 border-white">
          <img :src="getUnsplashUrl(member.image, 800)" class="w-full h-full object-cover scale-110 md:scale-125 group-hover:scale-100 transition-transform duration-1000" />
        </div>
        <div class="text-center space-y-2 md:space-y-4">
          <h3 class="text-2xl md:text-4xl font-serif italic group-hover:translate-y-[-4px] transition-transform leading-none">{{ member.name }}</h3>
          <p class="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-accent opacity-60 group-hover:opacity-100 transition-opacity leading-none">{{ member.role }}</p>
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

<style scoped>
.hide-scrollbar::-webkit-scrollbar { display: none; }
.hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>
