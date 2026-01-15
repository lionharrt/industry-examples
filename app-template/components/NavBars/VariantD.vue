<template>
  <nav class="fixed top-0 left-0 w-full z-50 bg-primary text-white border-b border-white/10 transition-all overflow-hidden">
    <div class="flex h-16 md:h-20">
      <!-- Logo Section -->
      <div class="flex items-center px-6 md:px-10 border-r border-white/10 bg-accent text-black font-black uppercase italic tracking-tighter text-lg md:text-2xl whitespace-nowrap">
        {{ currentData?.name || currentData?.brand || 'LOGO' }}
      </div>

      <!-- Links Section (Desktop) -->
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

      <!-- CTA Section (Desktop) -->
      <div class="hidden md:flex items-center px-10">
        <button class="bg-white text-black px-8 py-3 font-black uppercase tracking-widest text-xs hover:bg-accent transition-colors whitespace-nowrap">
          {{ currentData?.hero?.cta || 'BOOK NOW' }}
        </button>
      </div>

      <!-- Mobile Toggle -->
      <button @click="isOpen = !isOpen" class="md:hidden flex flex-1 items-center justify-end px-6 border-l border-white/10">
        <Menu v-if="!isOpen" :size="24" />
        <X v-else :size="24" />
      </button>
    </div>

    <!-- Mobile Menu (Accordion style for Brutalist) -->
    <div v-show="isOpen" class="md:hidden border-t border-white/10 bg-primary">
      <NuxtLink 
        v-for="link in navLinks" 
        :key="link.name" 
        :to="link.href" 
        @click="isOpen = false"
        class="block py-6 px-10 border-b border-white/10 uppercase tracking-[0.2em] text-sm font-black hover:bg-accent hover:text-black transition-colors"
      >
        {{ link.name }}
      </NuxtLink>
      <div class="p-10 bg-accent">
        <button class="w-full bg-black text-white py-5 font-black uppercase tracking-widest text-xs">
          {{ currentData?.hero?.cta || 'BOOK NOW' }}
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Menu, X } from 'lucide-vue-next'
import { useNavBarData } from '~/composables/useNavBarData'

const { currentData, navLinks } = useNavBarData()
const isOpen = ref(false)
</script>
