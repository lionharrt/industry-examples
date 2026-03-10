<template>
  <section class="py-16 md:py-32 bg-background text-primary px-6 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">
      <div class="lg:col-span-7 space-y-6 md:space-y-10 text-center lg:text-left">
        <h2 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif italic leading-[0.9] tracking-tighter uppercase text-primary italic">Strategic <br/>Advocacy <br/><span class="text-accent">Starts Here</span></h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 pt-6 md:pt-10 border-t border-primary/10">
          <div v-for="info in contactInfo" :key="info.label" class="space-y-2 md:space-y-3 group cursor-pointer border-l-2 border-transparent hover:border-accent pl-4 md:pl-6 transition-all text-left">
            <p class="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] text-accent italic leading-none">{{ info.label }}</p>
            <p class="text-xl md:text-2xl font-serif italic tracking-tighter text-primary group-hover:translate-x-2 transition-transform leading-none">{{ info.value }}</p>
          </div>
        </div>
      </div>
      <div class="lg:col-span-5 relative group aspect-square max-w-[280px] md:max-w-xs mx-auto w-full mt-12 lg:mt-0">
        <div class="w-full h-full bg-secondary/10 rounded-full flex flex-col items-center justify-center text-center p-8 md:p-12 text-accent shadow-xl border-4 md:border-8 border-primary/5 group-hover:scale-105 transition-transform duration-[2000ms] relative overflow-hidden">
          <div class="absolute inset-0 bg-accent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          <div class="relative z-10 group-hover:text-background transition-colors duration-1000">
            <p class="text-3xl md:text-5xl font-serif italic leading-none tracking-tighter mb-6 md:mb-8 uppercase italic">Begin <br/>Your <br/>Counsel</p>
            <div class="w-12 h-12 md:w-16 md:h-16 rounded-full border border-current flex items-center justify-center group-hover:rotate-180 transition-transform duration-1000 mx-auto">
              <ArrowRight :size="24" class="md:hidden" stroke-width="1" />
              <ArrowRight :size="32" class="hidden md:block" stroke-width="1" />
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
