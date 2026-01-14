<template>
  <section class="py-48 bg-[#FAF9F6] text-background px-12 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
      <div class="lg:col-span-8 space-y-16">
        <h2 class="text-[10vw] font-serif italic leading-[0.8] tracking-tighter uppercase italic">Strategic <br/>Advocacy <br/><span class="text-accent">Starts Here</span></h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 pt-16 border-t border-background/10">
          <div v-for="info in contactInfo" :key="info.label" class="space-y-4 group cursor-pointer border-l-4 border-transparent hover:border-accent pl-8 transition-all">
            <p class="text-[10px] font-black uppercase tracking-[1em] text-accent italic italic">{{ info.label }}</p>
            <p class="text-3xl font-serif italic tracking-tighter group-hover:translate-x-4 transition-transform">{{ info.value }}</p>
          </div>
        </div>
      </div>
      <div class="lg:col-span-4 relative group aspect-square">
        <div class="w-full h-full bg-background rounded-full flex flex-col items-center justify-center text-center p-16 text-accent shadow-2xl border-[15px] border-white group-hover:scale-105 transition-transform duration-[2000ms] relative overflow-hidden">
          <div class="absolute inset-0 bg-accent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          <div class="relative z-10 group-hover:text-background transition-colors duration-1000">
            <p class="text-xs font-black uppercase tracking-[1em] mb-8 italic">PREMIER_ENGAGEMENT</p>
            <p class="text-6xl font-serif italic leading-none tracking-tighter mb-12 uppercase italic">Begin <br/>Your <br/>Counsel</p>
            <div class="w-24 h-24 rounded-full border border-current flex items-center justify-center group-hover:rotate-180 transition-transform duration-1000">
              <ArrowRight :size="48" stroke-width="1" />
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
  { label: 'PARTNER_MAIL', value: 'counsel@vanguard.com' },
  { label: 'GLOBAL_PHONE', value: '+1 212 555 0100' },
  { label: 'OXFORD_ST_HQ', value: 'London, UK' },
  { label: 'PARK_AVE_OFFICE', value: 'New York, US' }
]
</script>
