<template>
  <section class="py-48 bg-white text-black px-12 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
      <div class="lg:col-span-8 space-y-12">
        <h2 class="text-[12vw] font-black italic leading-[0.8] tracking-tighter uppercase underline decoration-accent decoration-[20px]">DROP <br/>US A <br/>LINE</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12">
          <div class="space-y-4 group cursor-pointer border-l-8 border-black pl-8 py-4 hover:bg-accent transition-colors">
            <p class="text-[10px] font-black uppercase tracking-widest opacity-40 italic italic">MISSION_CONTROL</p>
            <p class="text-4xl font-black italic uppercase tracking-tighter">{{ email }}</p>
          </div>
          <div class="space-y-4 group cursor-pointer border-l-8 border-black pl-8 py-4 hover:bg-accent transition-colors">
            <p class="text-[10px] font-black uppercase tracking-widest opacity-40 italic">BATTLE_STATION_COORD</p>
            <p class="text-4xl font-black italic uppercase tracking-tighter">{{ phone }}</p>
          </div>
        </div>
      </div>
      <div class="lg:col-span-4 aspect-square bg-black flex flex-col items-center justify-center p-12 text-center text-accent skew-x-[-12deg] shadow-[40px_40px_0_0_#CCFF00] hover:shadow-none hover:translate-x-10 hover:translate-y-10 transition-all duration-700">
        <div class="skew-x-[12deg] space-y-8">
          <p class="text-xl font-black uppercase tracking-[0.5em] italic">READY_TO_START?</p>
          <p class="text-6xl font-black italic uppercase leading-none tracking-tighter shadow-2xl">JOIN <br/>THE <br/>ELITE</p>
          <div class="w-32 h-32 rounded-full border-8 border-accent flex items-center justify-center animate-spin-slow">
            <ArrowRight :size="48" stroke-width="4" />
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
