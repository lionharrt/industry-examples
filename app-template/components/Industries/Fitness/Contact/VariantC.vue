<template>
  <section class="py-16 md:py-48 bg-white text-black px-6 md:px-24 border-y-[16px] md:border-y-[32px] border-black relative overflow-hidden">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-32 items-center relative z-10">
      <div class="space-y-8 md:space-y-12 text-center lg:text-left">
        <h2 class="text-4xl sm:text-6xl md:text-[min(8vw,100px)] font-black italic leading-tight tracking-tighter uppercase text-black border-l-[8px] md:border-l-[16px] border-black pl-6 md:pl-10">CONTACT <br/><span class="bg-black text-accent px-4 py-1">LAB_FORCE</span></h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 pt-8">
          <div class="space-y-2 md:space-y-4 group cursor-pointer border-2 md:border-4 border-black p-6 md:p-8 hover:bg-accent transition-colors">
            <p class="text-[10px] md:text-sm font-black uppercase tracking-widest text-black/40 italic">MISSION_CONTROL</p>
            <p class="text-lg md:text-xl lg:text-2xl font-black italic uppercase tracking-tighter break-all leading-none">{{ email }}</p>
          </div>
          <div class="space-y-2 md:space-y-4 group cursor-pointer border-2 md:border-4 border-black p-6 md:p-8 hover:bg-accent transition-colors">
            <p class="text-[10px] md:text-sm font-black uppercase tracking-widest text-black/40 italic">BATTLE_STATION_COORD</p>
            <p class="text-lg md:text-xl lg:text-2xl font-black italic uppercase tracking-tighter leading-none">{{ phone }}</p>
          </div>
        </div>
      </div>
      <div class="aspect-square bg-black flex flex-col items-center justify-center p-8 md:p-12 lg:p-16 text-center text-accent border-[12px] md:border-[16px] border-black shadow-[12px_12px_0_0_#CCFF00] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all max-w-[280px] md:max-w-sm lg:max-w-md mx-auto lg:max-w-none group cursor-pointer">
        <div class="space-y-4 md:space-y-8">
          <p class="text-lg md:text-2xl font-black uppercase tracking-widest italic text-white">READY_TO_START?</p>
          <p class="text-4xl md:text-[min(6vw,80px)] font-black italic uppercase leading-[1] tracking-tighter">JOIN <br/>THE <br/>ELITE</p>
          <div class="w-16 h-16 md:w-24 md:h-24 rounded-full border-4 md:border-8 border-accent flex items-center justify-center animate-spin-slow mx-auto group-hover:bg-white group-hover:border-black transition-all">
            <ArrowRight :size="32" stroke-width="4" class="hidden md:block group-hover:text-black" />
            <ArrowRight :size="20" stroke-width="4" class="md:hidden group-hover:text-black" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
defineProps<{ title: string, email: string, phone: string }>()
</script>

<style scoped>
@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.animate-spin-slow {
  animation: spin-slow 10s linear infinite;
}
</style>
