<template>
  <section class="py-48 bg-white text-[#0A0A0A] px-12 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
      <div class="lg:col-span-8 space-y-16">
        <h2 class="text-[12vw] font-black italic leading-[0.7] tracking-tighter uppercase underline decoration-[#E60000] decoration-[40px] italic">RESERVE <br/>YOUR <br/>LEGACY</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 pt-24 border-t-[10px] border-[#0A0A0A]">
          <div class="space-y-8 group cursor-pointer border-l-[15px] border-transparent hover:border-[#E60000] pl-12 py-8 bg-[#B4B4B4]/5 transition-all duration-700">
            <p class="text-xs font-black uppercase tracking-[1.5em] opacity-40 italic italic italic">DATA_TRANS_PORT</p>
            <p class="text-5xl font-black italic uppercase tracking-tighter italic">{{ email }}</p>
          </div>
          <div class="space-y-8 group cursor-pointer border-l-[15px] border-transparent hover:border-[#E60000] pl-12 py-8 bg-[#B4B4B4]/5 transition-all duration-700">
            <p class="text-xs font-black uppercase tracking-[1.5em] opacity-40 italic italic italic">DIRECT_VOICE_LINK</p>
            <p class="text-5xl font-black italic uppercase tracking-tighter italic">{{ phone }}</p>
          </div>
        </div>
      </div>
      <div class="lg:col-span-4 aspect-square bg-[#0A0A0A] flex flex-col items-center justify-center p-16 text-center text-[#E60000] skew-x-[-15deg] shadow-[60px_60px_0_0_#B4B4B4] hover:shadow-none hover:translate-x-16 hover:translate-y-16 transition-all duration-1000 border-[20px] border-white/5">
        <div class="skew-x-[15deg] space-y-12">
          <p class="text-2xl font-black uppercase tracking-[0.5em] italic italic">INITIATE_NOW?</p>
          <p class="text-7xl font-black italic uppercase leading-none tracking-tighter shadow-2xl italic">JOIN <br/>THE <br/>APEX</p>
          <div class="w-32 h-32 rounded-full border-[10px] border-[#E60000] flex items-center justify-center animate-spin-fast bg-white/5">
            <ArrowRight :size="56" stroke-width="8" />
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
@keyframes spin-fast {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.animate-spin-fast {
  animation: spin-fast 4s linear infinite;
}
</style>
