<template>
  <section class="py-16 md:py-48 bg-white text-black px-6 md:px-24 relative overflow-hidden">
    <div class="max-w-7xl mx-auto space-y-16 md:space-y-32">
      <div class="flex flex-col md:flex-row justify-between items-center md:items-end gap-4 border-b-[12px] md:border-b-[24px] border-black pb-8 text-center md:text-left">
        <h2 class="text-5xl sm:text-7xl md:text-[min(10vw,140px)] font-black italic uppercase tracking-tighter leading-none">THE_COACHES</h2>
        <p class="text-xs md:text-2xl font-black uppercase italic tracking-widest text-accent bg-black px-4 py-2">ELITE PERFORMANCE GUARDIANS</p>
      </div>

      <div class="space-y-12 md:space-y-24">
        <div v-for="(member, idx) in team" :key="idx" class="group flex flex-col md:flex-row items-stretch gap-0 border-[8px] md:border-[16px] border-black shadow-[12px_12px_0_0_#CCFF00] hover:shadow-none transition-all duration-500">
          <div class="w-full md:w-1/3 aspect-square overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 border-b-[8px] md:border-b-0 md:border-r-[8px] border-black">
            <img :src="member.image + '?auto=format&fit=crop&w=800'" class="w-full h-full object-cover scale-110 group-hover:scale-100 transition-all" />
          </div>
          <div class="w-full md:w-2/3 p-6 md:p-12 lg:p-16 space-y-6 md:space-y-8 bg-white group-hover:bg-accent transition-colors flex flex-col justify-center">
            <div class="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
              <h3 class="text-4xl sm:text-5xl md:text-[min(6vw,90px)] font-black italic uppercase leading-none tracking-tighter">{{ member.name }}</h3>
              <p class="text-lg md:text-2xl lg:text-3xl font-black italic uppercase bg-black text-accent px-4 py-1 w-fit">{{ member.role }}</p>
            </div>
            <p class="text-base md:text-2xl lg:text-3xl font-black leading-tight border-l-4 md:border-l-[8px] border-black pl-4 md:pl-8 uppercase italic">
              Mastering the intersection of kinetic force and psychological focus. Results-driven, protocol-first.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ team: any[] }>()
</script>
