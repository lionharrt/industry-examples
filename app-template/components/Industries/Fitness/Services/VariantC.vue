<template>
  <section class="py-16 md:py-48 bg-accent text-black px-6 md:px-24">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        <div v-for="(service, idx) in services" :key="idx" class="p-6 md:p-12 bg-white group relative overflow-hidden min-h-[45vh] md:h-[60vh] flex flex-col justify-between border-8 md:border-[12px] border-black shadow-[12px_12px_0_0_#000000] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all">
          <div class="absolute inset-0 z-0">
            <img :src="'https://images.unsplash.com/photo-' + (idx === 0 ? '1549476464-37392f717551' : idx === 1 ? '1540497077202-7c8a3999166f' : '1594381898411-846e7d193883') + '?auto=format&fit=crop&w=800'" class="w-full h-full object-cover grayscale opacity-10 group-hover:opacity-100 transition-all duration-700" />
            <div class="absolute inset-0 bg-accent/10 group-hover:bg-transparent transition-all"></div>
          </div>

          <div class="relative z-10 space-y-2">
            <div class="w-16 md:w-32 h-2 md:h-4 bg-black mb-4 group-hover:bg-accent transition-colors"></div>
            <h3 class="text-3xl md:text-6xl font-black italic uppercase leading-[0.8] tracking-tighter bg-black text-white group-hover:text-black group-hover:bg-accent inline-block px-3 py-1">{{ service.name }}</h3>
          </div>

          <div class="relative z-10 space-y-6">
            <p class="text-base md:text-xl font-black uppercase tracking-tight italic bg-white border-4 border-black p-4 md:p-6">
              {{ service.description }}
            </p>
            <div class="flex justify-between items-center pt-4 border-t-4 border-black">
              <component :is="getIcon(service.icon)" :size="32" stroke-width="4" class="text-black" />
              <button class="bg-black text-accent w-12 h-12 md:w-16 md:h-16 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <ArrowUpRight :size="32" stroke-width="4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Zap, Dumbbell, RefreshCcw, ArrowUpRight } from 'lucide-vue-next'
defineProps<{ services: any[] }>()
const getIcon = (name: string) => {
  if (name === 'Zap') return Zap
  if (name === 'Dumbbell') return Dumbbell
  return RefreshCcw
}
</script>
