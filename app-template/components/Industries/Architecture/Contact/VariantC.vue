<template>
  <section class="py-12 md:py-24 bg-primary text-white px-6 md:px-24 relative overflow-hidden text-center md:text-left">
    <!-- Large background watermark -->
    <div class="absolute -right-24 bottom-0 text-[40vw] font-black uppercase text-white/[0.02] pointer-events-none select-none italic origin-bottom-right rotate-12">CONSTRUCT</div>
    
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24 items-center relative z-10">
      <div class="lg:col-span-7 space-y-8 md:space-y-12">
        <h2 class="text-5xl sm:text-7xl md:text-[8vw] font-black uppercase leading-[0.85] tracking-tighter text-background italic">INITIATE <br/>CONSTRUCT</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 pt-6 md:pt-12 border-t border-white/10">
          <div v-for="info in contactInfo" :key="info.label" class="space-y-1 md:space-y-2 group cursor-pointer">
            <p class="text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-accent group-hover:text-white transition-colors">{{ info.label }}</p>
            <p class="text-lg md:text-xl font-black uppercase tracking-tighter italic">{{ info.value }}</p>
          </div>
        </div>
      </div>
      <div v-for="i in 1" :key="i" class="lg:col-span-5 relative group max-w-[280px] md:max-w-sm mx-auto lg:max-w-none w-full lg:translate-y-12">
        <div class="aspect-square bg-background rounded-full flex flex-col items-center justify-center text-center p-6 md:p-12 text-primary shadow-[0_30px_60px_rgba(0,0,0,0.4)] border-4 md:border-8 border-accent/20 hover:scale-105 transition-transform duration-1000">
          <p class="text-[8px] md:text-[10px] font-black uppercase tracking-[0.5em] md:tracking-[1em] mb-2 md:mb-4 opacity-40 italic">Global_Brief</p>
          <p class="text-2xl sm:text-3xl md:text-4xl font-black uppercase leading-none tracking-tighter mb-6 md:mb-8 italic">START <br/>YOUR <br/>VOYAGE</p>
          <div class="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-black flex items-center justify-center group-hover:rotate-90 transition-transform duration-1000">
            <ArrowUpRight :size="24" class="md:hidden" />
            <ArrowUpRight :size="32" class="hidden md:block" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
defineProps<{ title: string, email: string, phone: string }>()
const contactInfo = [
  { label: 'Secure_Terminal', value: 'hello@forma.arch' },
  { label: 'Direct_Link', value: '+44 20 7000 0000' },
  { label: 'Nordic_Hub', value: 'Copenhagen' },
  { label: 'Berlin_Lab', value: 'Kreuzberg' }
]
</script>
