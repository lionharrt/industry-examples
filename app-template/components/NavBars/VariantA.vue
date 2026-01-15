<template>
  <nav class="fixed top-0 left-0 w-full z-50 flex justify-between items-center py-4 md:py-6 px-6 md:px-8 mix-blend-difference transition-all duration-300">
    <div class="text-lg md:text-xl font-black uppercase tracking-tighter text-white">
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

    <!-- Mobile Toggle -->
    <button @click="isOpen = !isOpen" class="md:hidden text-white z-[60]">
      <Menu v-if="!isOpen" :size="24" />
      <X v-else :size="24" />
    </button>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-500 ease-expo"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition duration-500 ease-expo"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <div v-if="isOpen" class="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center gap-8 md:hidden">
        <NuxtLink 
          v-for="link in navLinks" 
          :key="link.name" 
          :to="link.href" 
          @click="isOpen = false"
          class="text-white text-2xl font-black uppercase tracking-[0.2em]"
        >
          {{ link.name }}
        </NuxtLink>
        <button class="mt-4 bg-white text-black px-10 py-4 rounded-full text-xs font-black uppercase tracking-widest">
          {{ currentData?.hero?.cta || 'GET STARTED' }}
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
