<template>
  <section class="py-16 md:py-48 bg-background text-primary px-6 md:px-24">
    <div class="max-w-7xl mx-auto">
      <div class="mb-16 md:mb-32 flex flex-col lg:flex-row justify-between items-center lg:items-end gap-8 md:gap-12 text-center lg:text-left">
        <h2 class="text-6xl sm:text-8xl md:text-[10vw] font-black uppercase leading-none text-secondary">WORK</h2>
        <p class="max-w-xs text-[10px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-primary/40 leading-relaxed md:leading-loose">
          A selection of digital artifacts designed to disrupt the noise.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 overflow-hidden">
        <div 
          v-for="(item, idx) in items" 
          :key="idx" 
          class="portfolio-card aspect-square relative group overflow-hidden bg-background cursor-pointer"
        >
          <img 
            :src="item.image + '?auto=format&fit=crop&w=1200'" 
            class="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
          />
          <div class="absolute inset-0 bg-accent/40 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-expo flex flex-col items-center justify-center p-6 text-center">
            <p class="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-background mb-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200">PROJECT_0{{ idx + 1 }}</p>
            <h3 class="text-3xl md:text-5xl font-black uppercase tracking-tighter text-background">{{ item.title }}</h3>
            <div class="mt-8 w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-background flex items-center justify-center text-background opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500 delay-300">
              <Plus :size="32" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Plus } from 'lucide-vue-next'
defineProps<{ items: any[] }>()
</script>

<style scoped>
.ease-expo { transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1); }
</style>
