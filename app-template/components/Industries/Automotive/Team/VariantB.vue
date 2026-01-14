<template>
  <section class="py-48 bg-white text-[#0A0A0A] px-12 md:px-24">
    <div class="max-w-7xl mx-auto space-y-24">
      <div class="flex flex-col md:flex-row justify-between items-end gap-12 border-b-[15px] border-[#0A0A0A] pb-12">
        <h2 class="text-9xl md:text-[12vw] font-black italic uppercase tracking-tighter leading-none">THE_ENGINEERS</h2>
        <p class="text-xl font-black uppercase italic tracking-[1em] opacity-40 italic">APEX DESIGN COUNCIL</p>
      </div>

      <div class="space-y-12">
        <div v-for="(member, idx) in team" :key="idx" class="group flex flex-col md:flex-row items-center gap-24 py-24 border-b-4 border-[#0A0A0A]/5 hover:bg-[#E60000]/5 transition-colors duration-1000 px-16 relative overflow-hidden">
          <div class="absolute -right-24 -top-24 text-[20vw] font-black italic opacity-[0.03] group-hover:opacity-[0.05] transition-opacity italic">E</div>
          <div class="w-full md:w-1/3 aspect-square overflow-hidden shadow-2xl skew-x-[-15deg] border-[15px] border-[#0A0A0A] group-hover:border-[#E60000] transition-colors duration-700">
            <img :src="member.image + '?auto=format&fit=crop&w=800'" class="w-full h-full object-cover skew-x-[15deg] scale-150 grayscale group-hover:grayscale-0 transition-all duration-1000" />
          </div>
          <div class="w-full md:w-2/3 space-y-12 relative z-10">
            <div class="flex flex-col md:flex-row md:items-baseline justify-between gap-8">
              <h3 class="text-7xl md:text-9xl font-black italic uppercase leading-none tracking-tighter group-hover:translate-x-12 transition-transform duration-1000">{{ member.name }}</h3>
              <p class="text-3xl font-black italic uppercase text-primary bg-[#0A0A0A] px-8 py-2 skew-x-[-15deg]"><span class="inline-block skew-x-[15deg]">{{ member.role }}</span></p>
            </div>
            <p class="text-3xl font-bold opacity-40 leading-tight max-w-3xl italic italic italic">Pushing the boundaries of computational fluid dynamics and kinetic energy recovery systems. Performance is non-negotiable.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ team: any[] }>()
</script>
