<template>
  <section class="py-16 md:py-48 bg-background text-white px-6 md:px-24 border-y border-white/5">
    <div class="max-w-7xl mx-auto space-y-16 md:space-y-32">
      <div v-for="(member, idx) in team" :key="idx" class="group flex flex-col md:flex-row items-center gap-12 md:gap-24 py-12 md:py-24 border-b border-white/5 last:border-0 relative overflow-hidden hover:bg-white/[0.02] transition-all duration-1000 px-6 md:px-12 text-center md:text-left">
        <div class="w-full sm:w-2/3 md:w-1/3 aspect-[4/5] relative overflow-hidden shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-1000">
          <ParallaxImage :src="getUnsplashUrl(member.image, 800)" speed="0.1" />
          <div class="absolute inset-0 bg-accent/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
        <div class="w-full md:w-2/3 space-y-8 md:space-y-12">
          <div class="space-y-4">
            <span class="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] md:tracking-[1em] text-accent italic leading-none">PRINCIPAL_0{{ idx + 1 }}</span>
            <h3 class="text-4xl sm:text-6xl md:text-[8vw] font-serif italic leading-none tracking-tighter group-hover:translate-x-4 md:group-hover:translate-x-8 transition-transform duration-1000 uppercase italic">{{ member.name }}</h3>
          </div>
          <p class="text-lg md:text-2xl font-light italic text-white/40 leading-relaxed max-w-xl group-hover:text-white transition-colors duration-1000 italic mx-auto md:mx-0">
            Dedicated to the highest standards of jurisprudential excellence and strategic advocacy on a global scale.
          </p>
          <div class="flex justify-center md:justify-start gap-8 md:gap-12 pt-8 border-t border-white/10">
            <div v-for="s in ['V-CARD', 'BIO', 'INSIGHTS']" :key="s" class="text-[10px] font-black uppercase tracking-widest text-accent hover:text-white cursor-pointer transition-all italic">
              {{ s }}
            </div>
          </div>
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
