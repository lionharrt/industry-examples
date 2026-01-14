<template>
  <section class="py-48 bg-accent text-black px-12 md:px-24">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black border-4 border-black">
        <div v-for="(service, idx) in services" :key="idx" class="p-16 bg-accent group relative overflow-hidden h-[60vh] flex flex-col justify-between border-4 border-black">
          <div class="absolute inset-0 z-0">
            <img :src="'https://images.unsplash.com/photo-' + (idx === 0 ? '1549476464-37392f717551' : idx === 1 ? '1540497077202-7c8a3999166f' : '1594381898411-846e7d193883') + '?auto=format&fit=crop&w=800'" class="w-full h-full object-cover grayscale opacity-0 group-hover:opacity-20 transition-all duration-700 scale-125 group-hover:scale-100" />
          </div>

          <div class="relative z-10">
            <div class="w-20 h-2 bg-black mb-8 group-hover:w-full transition-all duration-700"></div>
            <h3 class="text-6xl font-black italic uppercase leading-[0.9] tracking-tighter">{{ service.name }}</h3>
          </div>

          <div class="relative z-10 space-y-8">
            <p class="text-xl font-bold uppercase tracking-tight italic opacity-60 group-hover:opacity-100">{{ service.description }}</p>
            <div class="flex justify-between items-center pt-8 border-t-4 border-black/10">
              <component :is="getIcon(service.icon)" :size="32" stroke-width="3" />
              <button class="bg-black text-accent w-16 h-16 flex items-center justify-center group-hover:rotate-45 transition-transform">
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
import { Zap, Dumbbell, RefreshCcw, ArrowUpRight } from 'lucide-vue-next'
defineProps<{ services: any[] }>()
const getIcon = (name: string) => {
  if (name === 'Zap') return Zap
  if (name === 'Dumbbell') return Dumbbell
  return RefreshCcw
}
</script>
