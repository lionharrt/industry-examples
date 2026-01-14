<template>
  <section class="py-48 bg-[#B4B4B4] text-[#0A0A0A] px-12 md:px-24">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-stretch">
      <div v-for="(tier, idx) in tiers" :key="idx" class="flex-1 p-16 bg-[#0A0A0A] text-primary hover:bg-white hover:text-black transition-all duration-1000 border-[15px] border-black group relative overflow-hidden shadow-2xl">
        <div class="absolute -top-12 -right-12 text-[20vw] font-black italic opacity-5 group-hover:opacity-100 group-hover:text-[#E60000] transition-all duration-1000 italic italic">MAX</div>
        
        <div class="space-y-24 relative z-10">
          <div class="flex justify-between items-center">
            <h3 class="text-6xl font-black italic uppercase tracking-tighter leading-none italic italic">{{ tier.name }}</h3>
            <div class="w-24 h-24 border-4 border-[#E60000] flex items-center justify-center font-black italic text-3xl skew-x-[-15deg]">
              <span class="skew-x-[15deg]">SV</span>
            </div>
          </div>
          <ul class="space-y-12 pt-16 border-t-8 border-white/10 group-hover:border-black/10">
            <li v-for="f in tier.features" :key="f" class="flex items-center gap-8 text-3xl font-black italic uppercase group-hover:translate-x-8 transition-transform duration-700 italic italic">
              <div class="w-12 h-3 bg-[#E60000] group-hover:bg-black transition-all duration-700"></div>
              {{ f }}
            </li>
          </ul>
        </div>

        <div class="mt-48 relative z-10">
          <p class="text-xs font-black uppercase tracking-[1em] opacity-40 mb-8 italic italic italic">RESERVE_SLOT_SECURED_UPON_INQUIRY</p>
          <p class="text-[10vw] font-black italic uppercase leading-none tracking-tighter mb-16 shadow-2xl italic">{{ tier.price }}</p>
          <button class="w-full py-12 bg-[#E60000] text-black font-black uppercase italic tracking-[1em] text-3xl group-hover:bg-[#0A0A0A] group-hover:text-primary transition-all shadow-2xl skew-x-[-15deg]">
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
