<template>
  <section class="py-16 md:py-48 bg-white text-[#0A0A0A] px-6 md:px-24 border-y-8 md:border-y-[16px] border-black relative overflow-hidden">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center relative z-10">
      <div class="lg:col-span-8 space-y-8 md:space-y-12 text-center md:text-left">
        <h2 class="text-5xl sm:text-7xl md:text-[7vw] font-black italic leading-[0.85] tracking-tighter uppercase underline decoration-[#E60000] decoration-[8px] md:decoration-[20px] italic">RESERVE <br/>YOUR <br/>LEGACY</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 pt-8 md:pt-16 border-t-4 md:border-t-6 border-[#0A0A0A]">
          <div class="space-y-3 md:space-y-6 group cursor-pointer border-l-4 md:border-l-[8px] border-transparent hover:border-[#E60000] pl-4 md:pl-8 py-4 md:py-6 bg-[#B4B4B4]/5 transition-all duration-700">
            <p class="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.8em] opacity-40 italic">DATA_TRANS_PORT</p>
            <p class="text-xl md:text-3xl font-black italic uppercase tracking-tighter italic break-all leading-tight">{{ email }}</p>
          </div>
          <div class="space-y-3 md:space-y-6 group cursor-pointer border-l-4 md:border-l-[8px] border-transparent hover:border-[#E60000] pl-4 md:pl-8 py-4 md:py-6 bg-[#B4B4B4]/5 transition-all duration-700">
            <p class="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.8em] opacity-40 italic">DIRECT_VOICE_LINK</p>
            <p class="text-xl md:text-3xl font-black italic uppercase tracking-tighter italic break-all leading-tight">{{ phone }}</p>
          </div>
        </div>
      </div>
      <div v-for="i in 1" :key="i" class="lg:col-span-4 aspect-square bg-[#0A0A0A] flex flex-col items-center justify-center p-6 md:p-12 text-center text-[#E60000] skew-x-[-12deg] shadow-[15px_15px_0_0_#B4B4B4] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all duration-700 border-4 md:border-8 border-white/5 max-w-sm mx-auto lg:max-w-none w-full">
        <div class="skew-x-[12deg] space-y-4 md:space-y-8">
          <p class="text-lg md:text-xl font-black uppercase tracking-[0.2em] md:tracking-[0.3em] italic text-white">INITIATE_NOW?</p>
          <p class="text-4xl md:text-6xl font-black italic uppercase leading-tight tracking-tighter shadow-2xl italic">JOIN <br/>THE <br/>APEX</p>
          <div class="w-16 h-16 md:w-24 md:h-24 rounded-full border-4 md:border-8 border-[#E60000] flex items-center justify-center animate-spin-fast bg-white/5 mx-auto">
            <ArrowRight :size="24" class="md:hidden" />
            <ArrowRight :size="40" stroke-width="6" class="hidden md:block" />
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
