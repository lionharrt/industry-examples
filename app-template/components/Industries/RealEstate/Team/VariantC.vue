<template>
  <section class="py-24 md:py-48 bg-background text-primary overflow-hidden border-y border-primary/5">
    <div class="px-6 md:px-24">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
        <div v-for="(member, idx) in team" :key="idx" class="group bg-primary/5 rounded-[3rem] md:rounded-[4rem] p-8 md:p-12 hover:bg-primary hover:text-background transition-all duration-1000 relative overflow-hidden shadow-xl border border-primary/10">
        <div class="text-[15vw] font-black absolute -right-8 -top-12 opacity-[0.02] group-hover:text-background group-hover:opacity-[0.02] transition-all">M</div>
        <div class="relative h-[40vh] md:h-[50vh] overflow-hidden rounded-[2rem] md:rounded-[3rem] mb-8 md:mb-12 shadow-2xl">
          <img :src="getUnsplashUrl(member.image, 1000)" class="w-full h-full object-cover scale-125 group-hover:scale-100 transition-transform duration-1000 grayscale group-hover:grayscale-0" />
        </div>
        <div class="text-center space-y-4">
          <h3 class="text-2xl md:text-4xl font-bold uppercase tracking-tighter">{{ member.name }}</h3>
          <p class="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] opacity-40 group-hover:text-accent group-hover:opacity-100 transition-all">{{ member.role }}</p>
        </div>
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
