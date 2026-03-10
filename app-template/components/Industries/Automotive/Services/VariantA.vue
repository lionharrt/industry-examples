<template>
  <section class="py-16 md:py-48 bg-[#0A0A0A] text-white px-6 md:px-24">
    <div class="max-w-7xl mx-auto space-y-12 md:space-y-24">
      <div class="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-12">
        <h2 class="text-4xl sm:text-6xl md:text-7xl font-black italic tracking-tighter uppercase text-[#E60000]">APEX_SYSTEMS</h2>
        <div class="h-px w-full bg-white/10 hidden md:block"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
        <div v-for="(service, idx) in services" :key="idx" class="p-8 md:p-12 border border-white/10 bg-white/5 hover:bg-white hover:text-black transition-all duration-1000 group cursor-pointer relative overflow-hidden min-h-[40vh] md:h-[55vh] flex flex-col justify-between">
          <div class="absolute -top-6 -right-6 md:-top-8 md:-right-8 text-[15vw] md:text-[10vw] font-black italic opacity-5 group-hover:opacity-10 transition-opacity italic leading-none">0{{ idx + 1 }}</div>
          
          <div class="relative z-10 space-y-4 md:space-y-6">
            <component :is="getIcon(service.icon)" :size="32" stroke-width="2" class="text-[#E60000] md:hidden" />
            <component :is="getIcon(service.icon)" :size="48" stroke-width="2" class="text-[#E60000] hidden md:block" />
            <h3 class="text-2xl md:text-3xl font-black italic uppercase leading-tight tracking-tighter group-hover:translate-x-2 md:group-hover:translate-x-4 transition-transform text-white group-hover:text-black">{{ service.name }}</h3>
          </div>
          
          <div class="relative z-10 space-y-6 md:space-y-8 mt-8 md:mt-0">
            <p class="text-sm md:text-lg font-bold opacity-40 group-hover:opacity-100 italic uppercase leading-tight text-white group-hover:text-black">{{ service.description }}</p>
            <button class="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest pt-6 md:pt-8 border-t border-white/10 group-hover:border-black/20 text-white group-hover:text-black">
              <span>EXPLORE_BUILD</span>
              <ArrowRight :size="14" class="md:hidden" />
              <ArrowRight :size="16" class="hidden md:block" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Settings, Wind, Zap, ArrowRight } from 'lucide-vue-next'
defineProps<{ services: any[] }>()
const getIcon = (name: string) => {
  if (name === 'Settings') return Settings
  if (name === 'Wind') return Wind
  return Zap
}
</script>
