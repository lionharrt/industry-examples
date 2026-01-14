<template>
  <section class="py-48 bg-black text-primary px-12 md:px-24">
    <div class="max-w-7xl mx-auto space-y-24">
      <div class="flex flex-col md:flex-row justify-between items-center gap-12">
        <h2 class="text-8xl font-black italic tracking-tighter uppercase text-accent">LAB_PROTOCOLS</h2>
        <div class="h-1 w-full bg-accent/20 hidden md:block"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div v-for="(service, idx) in services" :key="idx" class="p-16 border-l-8 border-accent bg-white/5 hover:bg-accent hover:text-black transition-all duration-700 group cursor-pointer relative overflow-hidden">
          <div class="absolute top-4 right-4 text-8xl font-black italic opacity-5 group-hover:opacity-20 transition-opacity">0{{ idx + 1 }}</div>
          <div class="relative z-10 space-y-8">
            <component :is="getIcon(service.icon)" :size="48" stroke-width="3" class="text-accent group-hover:text-black" />
            <h3 class="text-4xl font-black italic uppercase leading-none">{{ service.name }}</h3>
            <p class="text-lg font-bold opacity-60 group-hover:opacity-100">{{ service.description }}</p>
            <button class="flex items-center gap-4 text-xs font-black uppercase tracking-widest pt-8">
              <span>EXPLORE_PROTOCOL</span>
              <ArrowRight :size="16" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Zap, Dumbbell, RefreshCcw, ArrowRight } from 'lucide-vue-next'
defineProps<{ services: any[] }>()
const getIcon = (name: string) => {
  if (name === 'Zap') return Zap
  if (name === 'Dumbbell') return Dumbbell
  return RefreshCcw
}
</script>
