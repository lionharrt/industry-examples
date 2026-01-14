<template>
  <section class="py-48 bg-white text-[#0A0A0A] px-12 md:px-24">
    <div class="max-w-7xl mx-auto flex flex-col gap-12">
      <div v-for="(tier, idx) in tiers" :key="idx" class="group relative flex flex-col md:flex-row items-center justify-between p-24 bg-[#B4B4B4]/20 border-[20px] border-[#0A0A0A] hover:bg-[#E60000] hover:border-black hover:text-black transition-all duration-700 shadow-2xl hover:translate-x-12">
        <div class="text-center md:text-left z-10 space-y-8">
          <h3 class="text-xs font-black uppercase tracking-[1em] opacity-40 italic italic">CHASSIS_CONFIG_0{{ idx + 1 }}</h3>
          <p class="text-8xl md:text-[10vw] font-black italic uppercase leading-none tracking-tighter">{{ tier.name }}</p>
          <p class="text-3xl font-black uppercase italic opacity-40 group-hover:opacity-100 transition-opacity italic">{{ tier.features.join(' • ') }}</p>
        </div>
        <div class="mt-12 md:mt-0 text-center md:text-right z-10 space-y-12">
          <p class="text-[12vw] font-black italic uppercase leading-none tracking-tighter shadow-2xl">{{ tier.price }}</p>
          <button class="px-24 py-8 bg-[#0A0A0A] text-primary group-hover:bg-white group-hover:text-black font-black uppercase italic tracking-[0.5em] text-2xl transition-all shadow-2xl skew-x-[-15deg]">
            <span class="inline-block skew-x-[15deg]">START_BUILD</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ tiers: any[] }>()
</script>
