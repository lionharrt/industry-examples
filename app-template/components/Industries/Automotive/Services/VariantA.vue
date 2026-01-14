<template>
  <section class="py-48 bg-[#0A0A0A] text-primary px-12 md:px-24">
    <div class="max-w-7xl mx-auto space-y-24">
      <div class="flex flex-col md:flex-row justify-between items-center gap-12">
        <h2 class="text-7xl font-black italic tracking-tighter uppercase text-[#E60000]">APEX_SYSTEMS</h2>
        <div class="h-px w-full bg-white/10 hidden md:block"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div v-for="(service, idx) in services" :key="idx" class="p-16 border border-white/10 bg-white/5 hover:bg-white hover:text-black transition-all duration-1000 group cursor-pointer relative overflow-hidden h-[60vh] flex flex-col justify-between">
          <div class="absolute -top-12 -right-12 text-[15vw] font-black italic opacity-5 group-hover:opacity-10 transition-opacity italic">0{{ idx + 1 }}</div>
          
          <div class="relative z-10 space-y-8">
            <component :is="getIcon(service.icon)" :size="48" stroke-width="2" class="text-[#E60000]" />
            <h3 class="text-4xl font-black italic uppercase leading-none tracking-tighter group-hover:translate-x-4 transition-transform">{{ service.name }}</h3>
          </div>
          
          <div class="relative z-10 space-y-8">
            <p class="text-lg font-bold opacity-40 group-hover:opacity-100 italic">{{ service.description }}</p>
            <button class="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest pt-8 border-t border-white/10 group-hover:border-black/20">
              <span>EXPLORE_BUILD</span>
              <ArrowRight :size="16" />
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
