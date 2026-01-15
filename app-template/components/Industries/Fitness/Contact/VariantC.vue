<template>
  <section class="py-16 md:py-48 bg-white text-black px-6 md:px-24 border-y-[16px] md:border-y-[32px] border-black relative overflow-hidden">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-32 items-center relative z-10">
      <div class="space-y-12 md:space-y-24 text-center lg:text-left">
        <h2 class="text-6xl sm:text-8xl md:text-[15vw] font-black italic leading-[0.7] tracking-tighter uppercase text-black border-l-[16px] md:border-l-[32px] border-black pl-8 md:pl-16">CONTACT <br/><span class="bg-black text-accent px-4 py-2">LAB_FORCE</span></h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 pt-12">
          <div class="space-y-4 group cursor-pointer border-[8px] border-black p-8 hover:bg-accent transition-colors">
            <p class="text-xs md:text-xl font-black uppercase tracking-widest text-black/40 italic">MISSION_CONTROL</p>
            <p class="text-2xl md:text-4xl font-black italic uppercase tracking-tighter break-all">{{ email }}</p>
          </div>
          <div class="space-y-4 group cursor-pointer border-[8px] border-black p-8 hover:bg-accent transition-colors">
            <p class="text-xs md:text-xl font-black uppercase tracking-widest text-black/40 italic">BATTLE_STATION_COORD</p>
            <p class="text-2xl md:text-4xl font-black italic uppercase tracking-tighter">{{ phone }}</p>
          </div>
        </div>
      </div>
      <div class="aspect-square bg-black flex flex-col items-center justify-center p-8 md:p-24 text-center text-accent border-[16px] md:border-[32px] border-black shadow-[20px_20px_0_0_#CCFF00] hover:shadow-none hover:translate-x-4 hover:translate-y-4 transition-all max-w-xl mx-auto lg:max-w-none group cursor-pointer">
        <div class="space-y-8 md:space-y-16">
          <p class="text-xl md:text-4xl font-black uppercase tracking-widest italic text-white">READY_TO_START?</p>
          <p class="text-6xl md:text-[10vw] font-black italic uppercase leading-[0.75] tracking-tighter">JOIN <br/>THE <br/>ELITE</p>
          <div class="w-24 h-24 md:w-48 md:h-48 rounded-full border-[12px] md:border-[24px] border-accent flex items-center justify-center animate-spin-slow mx-auto group-hover:bg-white group-hover:border-black transition-all">
            <ArrowRight :size="48" stroke-width="4" class="hidden md:block group-hover:text-black" />
            <ArrowRight :size="24" stroke-width="4" class="md:hidden group-hover:text-black" />
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
