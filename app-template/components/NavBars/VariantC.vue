<template>
  <div class="fixed top-4 md:top-8 left-0 w-full z-50 px-4 md:px-8 pointer-events-none">
    <nav class="max-w-4xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl md:rounded-2xl py-3 md:py-4 px-6 md:px-8 flex justify-between items-center pointer-events-auto shadow-2xl transition-all">
      <div class="text-base md:text-lg font-black tracking-tighter text-primary">
        {{ currentData?.name || currentData?.brand || 'LOGO' }}
      </div>
      
      <!-- Desktop Links -->
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

      <div class="flex items-center gap-4">
        <button class="bg-accent text-white px-4 md:px-5 py-2 rounded-lg md:rounded-xl text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-all">
          {{ currentData?.hero?.cta ? (currentData.hero.cta.length > 10 ? 'GO' : currentData.hero.cta) : 'START' }}
        </button>

        <!-- Mobile Toggle -->
        <button @click="isOpen = !isOpen" class="md:hidden text-primary">
          <Menu v-if="!isOpen" :size="20" />
          <X v-else :size="20" />
        </button>
      </div>
    </nav>

    <!-- Mobile Menu Overlay -->
    <Transition
      enter-active-class="transition duration-500 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div v-if="isOpen" class="absolute top-20 left-4 right-4 bg-white/90 backdrop-blur-2xl rounded-2xl p-8 shadow-2xl flex flex-col items-center gap-6 md:hidden pointer-events-auto border border-primary/5">
        <NuxtLink 
          v-for="link in navLinks" 
          :key="link.name" 
          :to="link.href" 
          @click="isOpen = false"
          class="text-primary text-sm font-bold uppercase tracking-widest"
        >
          {{ link.name }}
        </NuxtLink>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Menu, X } from 'lucide-vue-next'
import { useNavBarData } from '~/composables/useNavBarData'

const { currentData, navLinks } = useNavBarData()
const isOpen = ref(false)
</script>
