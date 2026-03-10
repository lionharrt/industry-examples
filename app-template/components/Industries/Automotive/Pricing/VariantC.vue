<template>
  <section class="py-16 md:py-32 bg-[#B4B4B4] text-[#0A0A0A] px-6 md:px-24">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-stretch">
      <div v-for="(tier, idx) in tiers" :key="idx" class="flex-1 p-8 md:p-12 bg-[#0A0A0A] text-white hover:bg-white hover:text-black transition-all duration-1000 border-8 md:border-[12px] border-black group relative overflow-hidden shadow-2xl flex flex-col justify-between">
        <div class="absolute -top-12 -right-12 text-[15vw] md:text-[10vw] font-black italic opacity-5 group-hover:opacity-100 group-hover:text-[#E60000] transition-all duration-1000 italic uppercase leading-none">MAX</div>
        
        <div class="space-y-8 md:space-y-12 relative z-10">
          <div class="flex justify-between items-center">
            <h3 class="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-tight text-white group-hover:text-black">{{ tier.name }}</h3>
            <div class="w-16 h-16 md:w-20 md:h-20 border-4 border-[#E60000] flex items-center justify-center font-black italic text-xl md:text-2xl skew-x-[-15deg] group-hover:bg-[#E60000] group-hover:text-black transition-colors">
              <span class="skew-x-[15deg]">SV</span>
            </div>
          </div>
          <ul class="space-y-4 md:space-y-8 pt-8 md:pt-12 border-t-4 md:border-t-6 border-white/10 group-hover:border-black/10">
            <li v-for="f in tier.features" :key="f" class="flex items-center gap-4 md:gap-6 text-lg md:text-2xl font-black italic uppercase group-hover:translate-x-4 transition-transform duration-700 text-white group-hover:text-black">
              <div class="w-8 md:w-10 h-1 md:h-2 bg-[#E60000] group-hover:bg-black transition-all duration-700"></div>
              {{ f }}
            </li>
          </ul>
        </div>

        <div class="mt-12 md:mt-24 relative z-10">
          <p class="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] md:tracking-[1em] opacity-40 mb-4 md:mb-6 italic text-white group-hover:text-black">RESERVE_SLOT_SECURED_UPON_INQUIRY</p>
          <p class="text-4xl sm:text-6xl md:text-[5vw] font-black italic uppercase leading-tight tracking-tighter mb-8 md:mb-12 drop-shadow-2xl italic text-white group-hover:text-black">{{ tier.price }}</p>
          <button class="w-full py-5 md:py-8 bg-[#E60000] text-black font-black uppercase italic tracking-widest md:tracking-[0.5em] text-sm md:text-2xl group-hover:bg-[#0A0A0A] group-hover:text-white transition-all shadow-2xl skew-x-[-15deg] border-4 border-black px-4">
            <span class="inline-block skew-x-[15deg]">INITIATE_ALLOCATION</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ tiers: any[] }>()
</script>
