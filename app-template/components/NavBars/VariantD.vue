<template>
  <nav class="fixed top-0 left-0 w-full z-50 bg-primary text-white border-b border-white/10 overflow-hidden">
    <div class="flex h-20">
      <!-- Logo Section -->
      <div class="flex items-center px-10 border-r border-white/10 bg-accent text-black font-black uppercase italic tracking-tighter text-2xl">
        {{ currentData?.name || currentData?.brand || 'LOGO' }}
      </div>

      <!-- Links Section -->
      <div class="hidden md:flex flex-1">
        <NuxtLink 
          v-for="link in navLinks" 
          :key="link.name" 
          :to="link.href" 
          class="flex items-center px-8 border-r border-white/10 hover:bg-white/5 transition-colors uppercase tracking-[0.3em] text-[10px] font-black"
        >
          {{ link.name }}
        </NuxtLink>
      </div>

      <!-- CTA Section -->
      <div class="hidden md:flex items-center px-10">
        <button class="bg-white text-black px-8 py-3 font-black uppercase tracking-widest text-xs hover:bg-accent transition-colors">
          {{ currentData?.hero?.cta || 'BOOK NOW' }}
        </button>
      </div>

      <!-- Mobile Toggle -->
      <button class="md:hidden flex items-center px-8 border-l border-white/10">
        <Menu :size="24" />
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { Menu } from 'lucide-vue-next'
import { useNavBarData } from '~/composables/useNavBarData'

const { currentData, navLinks } = useNavBarData()
</script>
