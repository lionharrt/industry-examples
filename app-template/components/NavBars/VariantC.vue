<template>
  <div class="fixed top-8 left-0 w-full z-50 px-8 pointer-events-none">
    <nav class="max-w-4xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl py-4 px-8 flex justify-between items-center pointer-events-auto shadow-2xl">
      <div class="text-lg font-black tracking-tighter text-primary">
        {{ currentData?.name || currentData?.brand || 'LOGO' }}
      </div>
      
      <div class="hidden md:flex gap-8 items-center">
        <NuxtLink 
          v-for="link in navLinks" 
          :key="link.name" 
          :to="link.href" 
          class="text-primary/60 hover:text-primary uppercase tracking-[0.2em] text-[10px] font-bold transition-colors"
        >
          {{ link.name }}
        </NuxtLink>
      </div>

      <button class="bg-accent text-white px-5 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-all">
        {{ currentData?.hero?.cta || 'START' }}
      </button>

      <button class="md:hidden text-primary">
        <Menu :size="20" />
      </button>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { Menu } from 'lucide-vue-next'
import { useNavBarData } from '~/composables/useNavBarData'

const { currentData, navLinks } = useNavBarData()
</script>
