<template>
  <section class="py-48 bg-primary text-white px-12 md:px-24 relative overflow-hidden">
    <!-- Large background watermark -->
    <div class="absolute -right-24 bottom-0 text-[40vw] font-black uppercase text-white/[0.02] pointer-events-none select-none italic origin-bottom-right rotate-12">CONSTRUCT</div>
    
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 items-center relative z-10">
      <div class="lg:col-span-7 space-y-16">
        <h2 class="text-[12vw] font-black uppercase leading-[0.8] tracking-tighter text-background shadow-2xl italic">INITIATE <br/>CONSTRUCT</h2>
        <div class="grid grid-cols-2 gap-12 pt-16 border-t border-white/10">
          <div v-for="info in contactInfo" :key="info.label" class="space-y-4 group cursor-pointer">
            <p class="text-[10px] font-black uppercase tracking-[0.5em] text-accent group-hover:text-white transition-colors">{{ info.label }}</p>
            <p class="text-2xl font-black uppercase tracking-tighter italic">{{ info.value }}</p>
          </div>
        </div>
      </div>
      <div class="lg:col-span-5 relative group">
        <div class="aspect-square bg-background rounded-full flex flex-col items-center justify-center text-center p-16 text-primary shadow-[0_50px_100px_rgba(0,0,0,0.5)] border-8 border-accent/20 hover:scale-105 transition-transform duration-1000">
          <p class="text-xs font-black uppercase tracking-[1em] mb-8 opacity-40 italic">Global_Brief</p>
          <p class="text-5xl font-black uppercase leading-none tracking-tighter mb-12 italic">START <br/>YOUR <br/>VOYAGE</p>
          <div class="w-24 h-24 rounded-full border-4 border-black flex items-center justify-center group-hover:rotate-90 transition-transform duration-1000">
            <ArrowUpRight :size="48" />
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
