<template>
  <section class="py-16 md:py-48 bg-white text-black px-6 md:px-24 overflow-hidden relative">
    <div class="max-w-7xl mx-auto space-y-12 md:space-y-24">
      <div v-for="(service, idx) in services" :key="idx" class="group flex flex-col md:flex-row items-stretch gap-0 relative border-4 md:border-8 border-black shadow-[8px_8px_0_0_#CCFF00]">
        <!-- Text side -->
        <div class="w-full md:w-1/2 p-6 md:p-16 space-y-6 md:space-y-10 bg-white relative z-10">
          <div class="flex items-center gap-4 md:gap-8">
            <div class="w-12 h-12 md:w-20 md:h-20 bg-accent text-black flex items-center justify-center border-2 md:border-4 border-black">
              <component :is="getIcon(service.icon)" :size="24" class="md:hidden" />
              <component :is="getIcon(service.icon)" :size="40" class="hidden md:block" />
            </div>
            <h3 class="text-3xl sm:text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none">{{ service.name }}</h3>
          </div>
          <p class="text-base md:text-2xl font-black leading-tight italic border-l-4 md:border-l-8 border-black pl-4 md:pl-8 uppercase">
            {{ service.description }}
          </p>
        </div>

        <!-- Image side -->
        <div class="w-full md:w-1/2 bg-black overflow-hidden relative border-t-4 md:border-t-0 md:border-l-4 md:border-l-8 border-black min-h-[250px]">
          <img :src="'https://images.unsplash.com/photo-' + (idx === 0 ? '1517836357463-d25dfeac3438' : idx === 1 ? '1534438327276-14e5300c3a48' : '1552674605-db6ffd4facb5') + '?auto=format&fit=crop&w=1200'" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
          <div class="absolute inset-0 bg-accent/10 mix-blend-multiply group-hover:bg-transparent transition-all"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Zap, Dumbbell, RefreshCcw } from 'lucide-vue-next'
defineProps<{ services: any[] }>()
const getIcon = (name: string) => {
  if (name === 'Zap') return Zap
  if (name === 'Dumbbell') return Dumbbell
  return RefreshCcw
}
</script>
