<template>
  <section class="min-h-screen bg-background text-accent flex flex-col items-center justify-center text-center p-6 md:p-24 relative overflow-hidden py-24 md:py-0">
    <div class="absolute inset-0 z-0 flex items-center justify-center opacity-10 pointer-events-none">
      <div v-for="i in 8" :key="i" class="absolute border border-primary rotate-45" :style="{ width: i * 20 + 'vw', height: i * 20 + 'vw' }"></div>
    </div>
    
    <div class="relative z-10 space-y-12 md:space-y-16 max-w-5xl mx-auto w-full">
      <h2 class="text-[12vw] md:text-[10vw] font-bold uppercase leading-none tracking-tighter italic border-b-2 border-accent pb-8 md:pb-12 shadow-2xl text-primary">CONNECT</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 pt-8 md:pt-12 items-center">
        <div class="text-center md:text-left space-y-6 md:space-y-8">
          <p class="text-xl md:text-2xl font-light text-primary/60 tracking-tight leading-relaxed">Experience the pinnacle of real estate consultancy. Private sessions available by appointment only.</p>
          <a :href="'tel:' + phone" class="block text-3xl md:text-5xl font-bold uppercase tracking-tighter text-primary hover:text-accent transition-colors">{{ phone }}</a>
        </div>
        <div class="flex flex-col items-center md:items-end gap-8 md:gap-12">
          <div class="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-accent flex items-center justify-center group cursor-pointer hover:bg-accent transition-all duration-700 shadow-2xl">
            <MapPin :size="48" class="md:hidden text-accent group-hover:text-background transition-colors" />
            <MapPin :size="64" class="hidden md:block text-accent group-hover:text-background transition-colors" />
          </div>
          <p class="text-[10px] font-black uppercase tracking-[0.5em] md:tracking-[1em] text-primary/40">Global_Concierge</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { MapPin } from 'lucide-vue-next'
defineProps<{ title: string, email: string, phone: string }>()
</script>
