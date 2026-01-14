<template>
  <section class="py-48 bg-background text-primary px-12 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 items-center relative z-10">
      <div class="lg:col-span-7 space-y-16">
        <h2 class="text-[10vw] font-serif italic leading-[0.8] tracking-tighter text-white shadow-2xl uppercase">SAY <br/>HELLO</h2>
        <div class="grid grid-cols-2 gap-12 pt-16 border-t border-primary/10">
          <div v-for="info in contactInfo" :key="info.label" class="space-y-4 group cursor-pointer">
            <p class="text-[10px] font-black uppercase tracking-[0.5em] text-accent group-hover:translate-x-2 transition-transform italic">{{ info.label }}</p>
            <p class="text-2xl font-serif italic tracking-tight group-hover:text-white transition-colors">{{ info.value }}</p>
          </div>
        </div>
      </div>
      <div class="lg:col-span-5 relative group">
        <div class="aspect-square bg-background rounded-full flex flex-col items-center justify-center text-center p-16 text-primary shadow-[0_50px_150px_rgba(0,0,0,0.2)] border-8 border-white hover:scale-105 transition-transform duration-[2000ms] relative overflow-hidden">
          <ParallaxImage src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200" speed="0.1" />
          <div class="absolute inset-0 bg-primary/40 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-center p-12">
            <p class="text-xs font-black uppercase tracking-[1em] text-white mb-8 italic">The_Inquiry</p>
            <p class="text-5xl font-serif italic text-white leading-none tracking-tighter mb-12">Begin <br/>Your <br/>Escape</p>
            <div class="w-24 h-24 rounded-full border-4 border-white flex items-center justify-center group-hover:rotate-180 transition-transform duration-1000 text-white">
              <ArrowRight :size="48" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
defineProps<{ title: string, email: string, phone: string }>()
const contactInfo = [
  { label: 'Escape_Mail', value: 'stay@wanderer.hotel' },
  { label: 'Direct_Line', value: '+39 081 000 0000' },
  { label: 'Italy_Hub', value: 'Ravello, Amalfi' },
  { label: 'Spirit_Zone', value: 'The Sanctuary' }
]
</script>
