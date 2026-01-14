<template>
  <section class="py-48 bg-white text-black px-12 md:px-24">
    <div class="max-w-7xl mx-auto flex flex-col gap-8">
      <div v-for="(tier, idx) in tiers" :key="idx" class="group relative flex flex-col md:flex-row items-center justify-between p-16 bg-white border-8 border-black hover:bg-black hover:text-accent transition-all duration-500 shadow-[20px_20px_0_0_#CCFF00] hover:shadow-none hover:translate-x-4 hover:translate-y-4">
        <div class="text-center md:text-left z-10 space-y-4">
          <h3 class="text-xs font-black uppercase tracking-[1em] opacity-40">STRENGTH_TIER_0{{ idx + 1 }}</h3>
          <p class="text-6xl md:text-8xl font-black italic uppercase leading-none tracking-tighter">{{ tier.name }}</p>
          <p class="text-2xl font-bold uppercase italic opacity-40 group-hover:opacity-100">{{ tier.features.join(' • ') }}</p>
        </div>
        <div class="mt-12 md:mt-0 text-center md:text-right z-10 space-y-8">
          <p class="text-[10vw] font-black italic uppercase leading-none tracking-tighter">{{ tier.price }}</p>
          <button class="px-16 py-6 bg-black text-accent group-hover:bg-accent group-hover:text-black font-black uppercase italic tracking-widest text-xl transition-all shadow-2xl skew-x-[-12deg]">
            <span class="inline-block skew-x-[12deg]">JOIN_THE_LAB</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ tiers: any[] }>()
</script>
