<template>
  <nav class="fixed top-0 left-0 w-full z-50 py-6 px-8 bg-background/0 text-primary">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <!-- Left Links -->
      <div class="hidden md:flex flex-1 gap-8 items-center justify-start">
        <NuxtLink 
          v-for="link in navLinks.slice(0, 2)" 
          :key="link.name" 
          :to="link.href" 
          class="uppercase tracking-[0.2em] text-[10px] font-bold hover:text-accent transition-colors"
        >
          {{ link.name }}
        </NuxtLink>
      </div>

      <!-- Center Logo -->
      <div class="flex-shrink-0 text-2xl font-serif italic tracking-tight px-8">
        {{ currentData?.name || currentData?.brand || 'LOGO' }}
      </div>

      <!-- Right Links -->
      <div class="hidden md:flex flex-1 gap-8 items-center justify-end">
        <NuxtLink 
          v-for="link in navLinks.slice(2)" 
          :key="link.name" 
          :to="link.href" 
          class="uppercase tracking-[0.2em] text-[10px] font-bold hover:text-accent transition-colors"
        >
          {{ link.name }}
        </NuxtLink>
        <button class="border border-primary/20 px-6 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
          {{ currentData?.hero?.cta || 'ACTION' }}
        </button>
      </div>

      <button class="md:hidden">
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
