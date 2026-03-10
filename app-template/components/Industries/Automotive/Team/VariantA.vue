<template>
  <section class="py-16 md:py-48 bg-[#0A0A0A] text-white px-6 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      <div v-for="(member, idx) in team" :key="idx" class="group relative overflow-hidden bg-white/5 border-2 md:border-4 border-white/10 hover:border-[#E60000] transition-all shadow-[8px_8px_0_0_#ffffff] hover:shadow-none">
        <div class="aspect-[4/5] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 bg-white/10">
          <img :src="member.image + '?auto=format&fit=crop&w=800'" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
        </div>
        <div class="p-6 md:p-8 space-y-2 md:space-y-4 bg-white text-black relative z-10 group-hover:bg-[#E60000] transition-all min-h-[140px] md:min-h-[160px] flex flex-col justify-end">
          <p class="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.5em] bg-black text-white px-2 py-0.5 inline-block w-fit italic">EXPERT_CODE: 0{{ idx + 1 }}</p>
          <h3 class="text-xl md:text-2xl lg:text-3xl font-black italic uppercase leading-none tracking-tighter">{{ member.name }}</h3>
          <p class="text-[8px] md:text-xs font-black uppercase tracking-widest opacity-60 italic">{{ member.role }}</p>
          <div class="w-full h-1 bg-black mt-2"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ team: any[] }>()
</script>
