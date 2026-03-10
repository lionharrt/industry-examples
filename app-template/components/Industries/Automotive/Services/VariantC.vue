<template>
  <section class="py-16 md:py-48 bg-[#B4B4B4] text-[#0A0A0A] px-6 md:px-24">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 border-4 md:border-8 border-black bg-black">
        <div v-for="(service, idx) in services" :key="idx" class="p-8 md:p-16 bg-[#B4B4B4] group relative overflow-hidden min-h-[45vh] md:h-[70vh] flex flex-col justify-between border-2 md:border-4 border-black/5">
          <div class="absolute inset-0 z-0">
            <img :src="'https://images.unsplash.com/photo-' + (idx === 0 ? '1549476464-37392f717551' : idx === 1 ? '1540497077202-7c8a3999166f' : '1594381898411-846e7d193883') + '?auto=format&fit=crop&w=800'" class="w-full h-full object-cover grayscale opacity-0 group-hover:opacity-20 transition-all duration-1000 scale-125 group-hover:scale-100" />
          </div>

          <div class="relative z-10">
            <h3 class="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] md:tracking-[1em] text-[#E60000] mb-4 md:mb-6 group-hover:translate-x-2 md:group-hover:translate-x-4 transition-transform italic">SYSTEM_MODULE_0{{ idx + 1 }}</h3>
            <h4 class="text-3xl md:text-5xl font-black italic uppercase leading-tight tracking-tighter break-words">{{ service.name }}</h4>
          </div>

          <div class="relative z-10 space-y-6 md:space-y-8 mt-8 md:mt-0">
            <p class="text-base md:text-xl font-black uppercase tracking-tight italic opacity-40 group-hover:opacity-100 group-hover:text-[#E60000] transition-colors leading-tight">{{ service.description }}</p>
            <div class="flex justify-between items-center pt-6 md:pt-8 border-t-2 md:border-t-4 border-[#0A0A0A]/10">
              <component :is="getIcon(service.icon)" :size="24" stroke-width="3" class="md:hidden" />
              <component :is="getIcon(service.icon)" :size="32" stroke-width="3" class="hidden md:block" />
              <button class="bg-[#0A0A0A] text-primary w-12 h-12 md:w-20 md:h-20 rounded-full flex items-center justify-center group-hover:bg-[#E60000] transition-colors">
                <ArrowUpRight :size="24" class="md:hidden" />
                <ArrowUpRight :size="32" class="hidden md:block" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Settings, Wind, Zap, ArrowUpRight } from 'lucide-vue-next'
defineProps<{ services: any[] }>()
const getIcon = (name: string) => {
  if (name === 'Settings') return Settings
  if (name === 'Wind') return Wind
  return Zap
}
</script>
