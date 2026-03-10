<template>
  <section class="py-12 md:py-24 bg-accent text-black px-6 md:px-24">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <div v-for="(service, idx) in services" :key="idx" class="p-6 md:p-8 lg:p-10 bg-white group relative overflow-hidden min-h-[45vh] md:h-[60vh] flex flex-col justify-between border-8 md:border-[12px] border-black shadow-[10px_10px_0_0_#000000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
          <div class="absolute inset-0 z-0">
            <img :src="'https://images.unsplash.com/photo-' + (idx === 0 ? '1517836357463-d25dfeac3438' : idx === 1 ? '1534438327276-14e5300c3a48' : '1552674605-db6ffd4facb5') + '?auto=format&fit=crop&w=800'" class="w-full h-full object-cover grayscale opacity-5 group-hover:opacity-100 transition-all duration-700" />
            <div class="absolute inset-0 bg-accent/5 group-hover:bg-transparent transition-all"></div>
          </div>

          <div class="relative z-10 space-y-2">
            <div class="w-12 md:w-20 h-2 md:h-3 bg-black mb-3 group-hover:bg-accent transition-colors"></div>
            <h3 class="text-3xl md:text-[min(4vw,42px)] font-black italic uppercase leading-[1.4] tracking-tighter bg-black text-white group-hover:text-black group-hover:bg-accent inline px-3 py-1 box-decoration-clone whitespace-pre-line">{{ service.name }}</h3>
          </div>

          <div class="relative z-10 space-y-6">
            <p class="text-sm md:text-base font-black uppercase tracking-tight italic bg-white border-2 md:border-4 border-black p-4 md:p-6 leading-tight">
              {{ service.description }}
            </p>
            <div class="flex justify-between items-center pt-4 border-t-2 md:border-t-4 border-black">
              <component :is="getIcon(service.icon)" :size="24" stroke-width="4" class="text-black" />
              <button class="bg-black text-accent w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <ArrowUpRight :size="24" stroke-width="4" />
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
