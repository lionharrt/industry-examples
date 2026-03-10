<template>
  <section class="py-16 md:py-24 bg-black text-white px-6 md:px-24 relative overflow-hidden">
    <div class="max-w-7xl mx-auto space-y-12 md:space-y-16 relative z-10">
      <div class="flex flex-col md:flex-row justify-between items-center gap-6 border-b-[8px] md:border-b-[12px] border-accent pb-6 text-center md:text-left">
        <h2 class="text-5xl sm:text-7xl md:text-[min(6vw,80px)] font-black italic tracking-tighter uppercase text-accent leading-none">LAB_PROTOCOLS</h2>
        <div class="h-2 w-full bg-accent hidden md:block"></div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        <div v-for="(service, idx) in services" :key="idx" class="p-6 md:p-8 border-4 md:border-[8px] border-white hover:border-accent bg-transparent hover:bg-accent hover:text-black transition-all duration-300 group cursor-pointer relative overflow-hidden shadow-[6px_6px_0_0_#ffffff] hover:shadow-none">
          <div class="absolute top-2 right-2 text-4xl md:text-5xl font-black italic opacity-10 group-hover:opacity-40 transition-all">0{{ idx + 1 }}</div>
          <div class="relative z-10 space-y-4 md:space-y-6">
            <component :is="getIcon(service.icon)" :size="24" stroke-width="4" class="text-accent group-hover:text-black" />
            <h3 class="text-xl sm:text-2xl md:text-3xl font-black italic uppercase leading-[1] tracking-tighter">{{ service.name }}</h3>
            <p class="text-xs md:text-sm font-black italic opacity-70 group-hover:opacity-100 uppercase leading-tight">{{ service.description }}</p>
            <button class="flex items-center gap-2 text-[10px] md:text-sm font-black uppercase tracking-widest pt-4 md:pt-6 border-t-2 border-current">
              <span>ACTIVATE_PROTOCOL</span>
              <ArrowRight :size="14" stroke-width="4" />
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
