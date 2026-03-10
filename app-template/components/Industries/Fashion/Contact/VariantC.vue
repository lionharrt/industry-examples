<template>
  <section class="py-16 md:py-48 bg-black text-white px-6 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24 items-center lg:items-end text-center lg:text-left">
      <div class="lg:col-span-7 space-y-8 md:space-y-16">
        <div class="w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-[#dc143c] flex items-center justify-center animate-spin-slow mx-auto lg:mx-0">
          <ArrowUpRight :size="32" class="text-[#dc143c] md:hidden" />
          <ArrowUpRight :size="48" class="text-[#dc143c] hidden md:block" />
        </div>
        <h2 class="text-4xl sm:text-6xl font-black uppercase leading-[1.1] tracking-tighter italic">START_ <br/>DIALOG</h2>
      </div>
      <div class="lg:col-span-5 space-y-8 md:space-y-16 p-8 md:p-16 bg-white/[0.02] rounded-3xl md:rounded-[4rem] border border-white/5 group hover:border-[#dc143c] transition-all duration-1000 max-w-md mx-auto lg:max-w-none w-full">
        <div class="space-y-4 md:space-y-8">
          <p class="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-[#dc143c]">Connection_Point</p>
          <p class="text-lg md:text-2xl font-black uppercase tracking-tighter break-words leading-tight">{{ email }}</p>
          <p class="text-lg md:text-2xl font-black uppercase tracking-tighter leading-tight">{{ phone }}</p>
        </div>
        <button class="w-full py-4 md:py-8 bg-white text-black font-black uppercase tracking-widest text-[8px] md:text-[10px] rounded-full hover:bg-[#dc143c] hover:text-white transition-all">Book_Appointment</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
defineProps<{ title: string, email: string, phone: string }>()
</script>

<style scoped>
.animate-spin-slow { animation: spin 10s linear infinite; }
@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
</style>
