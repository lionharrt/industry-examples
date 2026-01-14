<template>
  <section class="py-48 bg-[#B4B4B4] text-[#0A0A0A] px-12 md:px-24">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black border-8 border-black shadow-2xl">
        <div v-for="(service, idx) in services" :key="idx" class="p-16 bg-[#B4B4B4] group relative overflow-hidden h-[70vh] flex flex-col justify-between border-4 border-black/5">
          <div class="absolute inset-0 z-0">
            <img :src="'https://images.unsplash.com/photo-' + (idx === 0 ? '1549476464-37392f717551' : idx === 1 ? '1540497077202-7c8a3999166f' : '1594381898411-846e7d193883') + '?auto=format&fit=crop&w=800'" class="w-full h-full object-cover grayscale opacity-0 group-hover:opacity-20 transition-all duration-1000 scale-150 group-hover:scale-100" />
          </div>

          <div class="relative z-10">
            <h3 class="text-xs font-black uppercase tracking-[1em] text-[#E60000] mb-8 group-hover:translate-x-4 transition-transform italic">SYSTEM_MODULE_0{{ idx + 1 }}</h3>
            <h4 class="text-6xl font-black italic uppercase leading-[0.9] tracking-tighter">{{ service.name }}</h4>
          </div>

          <div class="relative z-10 space-y-8">
            <p class="text-2xl font-black uppercase tracking-tight italic opacity-40 group-hover:opacity-100 group-hover:text-[#E60000] transition-colors">{{ service.description }}</p>
            <div class="flex justify-between items-center pt-8 border-t-4 border-[#0A0A0A]/10">
              <component :is="getIcon(service.icon)" :size="32" stroke-width="3" />
              <button class="bg-[#0A0A0A] text-primary w-20 h-20 rounded-full flex items-center justify-center group-hover:bg-[#E60000] transition-colors">
                <ArrowUpRight :size="32" />
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
