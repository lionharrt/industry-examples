<template>
  <nav class="fixed top-0 left-0 w-full z-50 py-4 md:py-6 px-6 md:px-8 bg-background/0 text-primary transition-all duration-300">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <!-- Left Links (Desktop) -->
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

      <!-- Logo -->
      <div class="flex-shrink-0 text-xl md:text-2xl font-serif italic tracking-tight md:px-8">
        {{ currentData?.name || currentData?.brand || 'LOGO' }}
      </div>

      <!-- Right Links (Desktop) -->
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

      <!-- Mobile Toggle -->
      <button @click="isOpen = !isOpen" class="md:hidden z-[60]">
        <Menu v-if="!isOpen" :size="24" />
        <X v-else :size="24" />
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-500 ease-expo"
      enter-from-class="-translate-y-full"
      enter-to-class="translate-y-0"
      leave-active-class="transition duration-500 ease-expo"
      leave-from-class="translate-y-0"
      leave-to-class="-translate-y-full"
    >
      <div v-if="isOpen" class="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center gap-10 md:hidden">
        <div class="text-3xl font-serif italic mb-8">{{ currentData?.name || currentData?.brand || 'LOGO' }}</div>
        <NuxtLink 
          v-for="link in navLinks" 
          :key="link.name" 
          :to="link.href" 
          @click="isOpen = false"
          class="text-primary text-xl font-bold uppercase tracking-[0.3em]"
        >
          {{ link.name }}
        </NuxtLink>
        <button class="mt-6 border border-primary/20 px-12 py-4 rounded-lg text-xs font-bold uppercase tracking-widest">
          {{ currentData?.hero?.cta || 'ACTION' }}
        </button>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Menu, X } from 'lucide-vue-next'
import { useNavBarData } from '~/composables/useNavBarData'

const { currentData, navLinks } = useNavBarData()
const isOpen = ref(false)
</script>

<style scoped>
.ease-expo {
  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
}
</style>
