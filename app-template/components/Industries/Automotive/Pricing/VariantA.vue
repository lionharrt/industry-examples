<template>
  <section class="py-48 bg-[#0A0A0A] text-primary px-12 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
      <div v-for="(tier, idx) in tiers" :key="idx" class="p-16 border-[15px] border-white/10 bg-white/5 hover:bg-[#E60000] hover:text-black transition-all duration-1000 group flex flex-col justify-between h-[85vh] relative overflow-hidden">
        <div class="absolute -top-24 -right-24 text-[20vw] font-black italic opacity-5 group-hover:opacity-10 transition-opacity italic italic uppercase">APEX</div>
        
        <div class="space-y-16 relative z-10">
          <h3 class="text-xs font-black uppercase tracking-[1em] text-[#E60000] group-hover:text-black italic italic italic">BUILD_TIER_0{{ idx + 1 }}</h3>
          <p class="text-8xl font-black italic leading-[0.8] uppercase tracking-tighter">{{ tier.name }}</p>
          <ul class="space-y-8 pt-16 border-t border-white/10 group-hover:border-black/20">
            <li v-for="f in tier.features" :key="f" class="flex items-center gap-8 text-2xl font-black italic opacity-40 group-hover:opacity-100 transition-opacity uppercase italic italic">
              <div class="w-8 h-2 bg-[#E60000] group-hover:bg-black group-hover:w-16 transition-all duration-700"></div>
              {{ f }}
            </li>
          </ul>
        </div>

        <div class="relative z-10 mt-auto">
          <p class="text-xs font-black uppercase tracking-[1em] text-[#E60000] group-hover:text-black mb-4 italic italic">INVESTMENT_ESTIMATE</p>
          <p class="text-9xl font-black italic uppercase leading-none tracking-tighter mb-12 group-hover:translate-x-8 transition-transform duration-[1500ms]">{{ tier.price }}</p>
          <button class="w-full py-10 bg-white text-black font-black uppercase italic tracking-[1em] text-2xl group-hover:bg-black group-hover:text-primary transition-all shadow-2xl">
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
