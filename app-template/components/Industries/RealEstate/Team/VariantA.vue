<template>
  <section class="py-24 md:py-48 bg-background text-primary overflow-hidden border-y border-primary/5">
    <div class="px-6 md:px-24">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
        <div v-for="(member, idx) in team" :key="idx" class="group cursor-pointer w-full">
          <div class="aspect-[3/4] relative overflow-hidden rounded-[2rem] md:rounded-[3rem] mb-8 md:mb-12 shadow-2xl bg-white/5 border border-white/10">
          <img :src="getUnsplashUrl(member.image, 800)" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0" />
          <div class="absolute inset-0 bg-[#000080]/20 group-hover:opacity-0 transition-opacity"></div>
          <!-- Corner info -->
          <div class="absolute bottom-0 right-0 p-6 md:p-8 bg-white rounded-tl-[2rem] md:rounded-tl-[3rem] opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <Mail :size="20" class="md:hidden text-[#000080]" />
            <Mail :size="24" class="hidden md:block text-[#000080]" />
          </div>
        </div>
        <div class="space-y-4">
          <h3 class="text-2xl md:text-4xl font-bold uppercase tracking-tighter group-hover:italic transition-all">{{ member.name }}</h3>
          <div class="h-px w-12 bg-accent group-hover:w-full transition-all duration-700"></div>
          <p class="text-primary/40 text-[10px] md:text-xs font-black uppercase tracking-widest">{{ member.role }}</p>
        </div>
      </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Mail } from 'lucide-vue-next'
import { useImage } from '~/composables/useImage'

defineProps<{ team: any[] }>()
const { getUnsplashUrl } = useImage()
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar { display: none; }
.hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>
