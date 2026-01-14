<template>
  <section class="py-48 bg-black text-primary px-12 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 items-end">
      <div class="lg:col-span-7 space-y-16">
        <div class="w-24 h-24 rounded-full border-2 border-accent flex items-center justify-center animate-spin-slow">
          <ArrowUpRight :size="48" class="text-accent" />
        </div>
        <h2 class="text-[10vw] font-black uppercase leading-none tracking-tighter italic">START_ <br/>DIALOG</h2>
      </div>
      <div class="lg:col-span-5 space-y-16 p-16 bg-white/[0.02] rounded-[4rem] border border-white/5 group hover:border-accent transition-all duration-1000">
        <div class="space-y-8">
          <p class="text-xs font-black uppercase tracking-[0.5em] text-accent">Connection_Point</p>
          <p class="text-2xl font-black uppercase tracking-tighter">{{ email }}</p>
          <p class="text-2xl font-black uppercase tracking-tighter">{{ phone }}</p>
        </div>
        <button class="w-full py-8 bg-white text-black font-black uppercase tracking-widest text-[10px] rounded-full hover:bg-accent hover:text-primary transition-all">Book_Appointment</button>
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
