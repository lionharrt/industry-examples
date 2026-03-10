<template>
  <section class="py-16 md:py-32 bg-[#0A0A0A] text-white px-6 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
      <div v-for="(tier, idx) in tiers" :key="idx" class="p-8 md:p-12 border-4 md:border-[12px] border-white/10 bg-white/5 hover:bg-[#E60000] hover:text-black transition-all duration-1000 group flex flex-col justify-between min-h-[60vh] md:min-h-[80vh] relative overflow-hidden shadow-2xl">
        <div class="absolute -top-12 -right-12 text-[15vw] md:text-[10vw] font-black italic opacity-5 group-hover:opacity-10 transition-opacity italic uppercase leading-none">APEX</div>
        
        <div class="space-y-6 md:space-y-10 relative z-10">
          <h3 class="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] md:tracking-[1em] text-[#E60000] group-hover:text-black italic">BUILD_TIER_0{{ idx + 1 }}</h3>
          <p class="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-tight text-white group-hover:text-black">{{ tier.name }}</p>
          <ul class="space-y-3 md:space-y-6 pt-6 md:pt-10 border-t border-white/10 group-hover:border-black/20">
            <li v-for="f in tier.features" :key="f" class="flex items-center gap-4 md:gap-6 text-base md:text-xl font-black italic opacity-40 group-hover:opacity-100 transition-opacity uppercase text-white group-hover:text-black">
              <div class="w-4 md:w-8 h-1 md:h-2 bg-[#E60000] group-hover:bg-black group-hover:w-10 transition-all duration-700"></div>
              {{ f }}
            </li>
          </ul>
        </div>

        <div class="relative z-10 mt-12">
          <p class="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] md:tracking-[1em] text-[#E60000] group-hover:text-black mb-2 md:mb-4 italic">INVESTMENT_ESTIMATE</p>
          <p class="text-4xl sm:text-5xl md:text-6xl lg:text-[5vw] font-black italic uppercase leading-tight tracking-tighter mb-8 md:mb-10 group-hover:translate-x-4 transition-transform duration-700 text-white group-hover:text-black">{{ tier.price }}</p>
          <button class="w-full py-5 md:py-8 bg-white text-black font-black uppercase italic tracking-widest md:tracking-[0.5em] text-sm md:text-lg group-hover:bg-black group-hover:text-white transition-all shadow-2xl border-4 border-white whitespace-nowrap overflow-hidden text-ellipsis px-4">
            LOCK_CONFIGURATION
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ tiers: any[] }>()
</script>
