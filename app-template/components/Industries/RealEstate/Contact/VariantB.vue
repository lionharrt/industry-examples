<template>
  <section class="h-screen bg-background text-accent flex flex-col items-center justify-center text-center p-6 md:p-24 relative overflow-hidden">
    <div class="absolute inset-0 z-0 flex items-center justify-center opacity-10 pointer-events-none">
      <div v-for="i in 8" :key="i" class="absolute border border-white rotate-45" :style="{ width: i * 20 + 'vw', height: i * 20 + 'vw' }"></div>
    </div>
    
    <div class="relative z-10 space-y-16 max-w-5xl mx-auto">
      <h2 class="text-[15vw] font-bold uppercase leading-none tracking-tighter italic border-b-2 border-accent pb-12 shadow-2xl">CONNECT</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-24 pt-12 items-center">
        <div class="text-left space-y-8">
          <p class="text-2xl font-light text-primary/60 tracking-tight leading-relaxed">Experience the pinnacle of real estate consultancy. Private sessions available by appointment only.</p>
          <a :href="'tel:' + phone" class="block text-5xl font-bold uppercase tracking-tighter text-primary hover:text-accent transition-colors">{{ phone }}</a>
        </div>
        <div class="flex flex-col items-center md:items-end gap-12">
          <div class="w-48 h-48 rounded-full border-4 border-accent flex items-center justify-center group cursor-pointer hover:bg-accent transition-all duration-700 shadow-2xl">
            <MapPin :size="64" class="group-hover:text-background transition-colors" />
          </div>
          <p class="text-xs font-black uppercase tracking-[1em] text-primary/40">Global_Concierge</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { MapPin } from 'lucide-vue-next'
defineProps<{ title: string, email: string, phone: string }>()
</script>
