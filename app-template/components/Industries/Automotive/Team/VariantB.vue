<template>
  <section class="py-16 md:py-48 bg-white text-[#0A0A0A] px-6 md:px-24 relative overflow-hidden">
    <div class="max-w-7xl mx-auto space-y-12 md:space-y-32">
      <div class="flex flex-col md:flex-row justify-between items-center md:items-end gap-4 md:gap-12 border-b-8 md:border-b-[16px] border-[#0A0A0A] pb-6 md:pb-12 text-center md:text-left">
        <h2 class="text-5xl sm:text-7xl md:text-9xl font-black italic uppercase tracking-tighter leading-none">THE_ENGINEERS</h2>
        <p class="text-sm md:text-2xl font-black uppercase italic tracking-widest text-[#E60000] bg-black px-4 py-1">APEX DESIGN COUNCIL</p>
      </div>

      <div class="space-y-12 md:space-y-24">
        <div v-for="(member, idx) in team" :key="idx" class="group flex flex-col md:flex-row items-stretch gap-0 border-8 md:border-[16px] border-black shadow-[12px_12px_0_0_#E60000] hover:shadow-none transition-all duration-500 relative overflow-hidden">
          <div class="w-full md:w-1/3 aspect-square overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 border-b-8 md:border-b-0 md:border-r-8 md:border-r-[16px] border-black skew-x-[-5deg] md:skew-x-[-15deg] scale-110">
            <img :src="member.image + '?auto=format&fit=crop&w=800'" class="w-full h-full object-cover skew-x-[5deg] md:skew-x-[15deg] scale-110" />
          </div>
          <div class="w-full md:w-2/3 p-8 md:p-16 space-y-6 md:space-y-12 bg-white group-hover:bg-[#E60000]/5 transition-colors flex flex-col justify-center">
            <div class="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
              <h3 class="text-4xl sm:text-6xl md:text-8xl font-black italic uppercase leading-none tracking-tighter group-hover:md:translate-x-4 transition-transform duration-700 leading-none">{{ member.name }}</h3>
              <p class="text-xl md:text-3xl font-black italic uppercase text-white bg-black px-4 md:px-8 py-1 md:py-2 skew-x-[-15deg] w-fit mx-auto md:mx-0"><span class="inline-block skew-x-[15deg]">{{ member.role }}</span></p>
            </div>
            <p class="text-lg md:text-3xl font-bold opacity-60 leading-tight max-w-3xl italic uppercase border-l-8 border-black pl-6">Pushing the boundaries of computational fluid dynamics and kinetic energy recovery systems. Performance is non-negotiable.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ team: any[] }>()
</script>
