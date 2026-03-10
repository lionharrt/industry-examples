<template>
  <section class="py-16 md:py-48 bg-[#B4B4B4] text-[#0A0A0A] px-6 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
      <div v-for="(member, idx) in team" :key="idx" class="group flex flex-col bg-white p-0 shadow-[12px_12px_0_0_#0A0A0A] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all duration-300 border-4 md:border-8 border-black overflow-hidden">
        <div class="w-full aspect-video overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 border-b-4 md:border-b-8 border-black">
          <img :src="member.image + '?auto=format&fit=crop&w=1200'" class="w-full h-full object-cover" />
        </div>
        <div class="p-8 md:p-16 flex-1 flex flex-col justify-center space-y-6 md:space-y-10 bg-black text-white group-hover:bg-[#E60000] group-hover:text-black transition-colors">
          <div class="space-y-2">
            <p class="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-[#E60000] group-hover:text-black italic">EXPERT_0{{ idx + 1 }}</p>
            <h3 class="text-3xl sm:text-4xl md:text-6xl font-black italic uppercase leading-none tracking-tighter">{{ member.name }}</h3>
            <p class="text-xs md:text-base font-black uppercase tracking-widest opacity-60 italic">{{ member.role }}</p>
          </div>
          <div class="flex gap-4 md:gap-6">
            <div v-for="s in ['CAD', 'AERO', 'PRO']" :key="s" class="w-10 h-10 md:w-12 md:h-12 border-2 border-current flex items-center justify-center text-[8px] md:text-[10px] font-black hover:bg-white hover:text-black transition-all cursor-pointer italic">
              {{ s }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ team: any[] }>()
</script>
