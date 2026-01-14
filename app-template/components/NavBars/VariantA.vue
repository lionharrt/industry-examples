<template>
  <nav class="fixed top-0 left-0 w-full z-50 flex justify-between items-center py-6 px-8 mix-blend-difference transition-all duration-300">
    <div class="text-xl font-black uppercase tracking-tighter text-white">
      {{ currentData?.name || currentData?.brand || 'LOGO' }}
    </div>
    
    <div class="hidden md:flex gap-8 items-center">
      <NuxtLink 
        v-for="link in navLinks" 
        :key="link.name" 
        :to="link.href" 
        class="text-white/80 hover:text-white uppercase tracking-widest text-[10px] font-black transition-colors"
      >
        {{ link.name }}
      </NuxtLink>
      <button class="bg-white text-black px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-accent transition-colors">
        {{ currentData?.hero?.cta || 'GET STARTED' }}
      </button>
    </div>

    <button class="md:hidden text-white">
      <Menu :size="24" />
    </button>
  </nav>
</template>

<script setup lang="ts">
import { Menu } from 'lucide-vue-next'
import { useNavBarData } from '~/composables/useNavBarData'

const { currentData, navLinks } = useNavBarData()
</script>
