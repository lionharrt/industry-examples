<template>
  <section class="py-12 md:py-24 bg-white text-black px-6 md:px-24">
    <div class="max-w-7xl mx-auto flex flex-col gap-8 md:gap-12 relative z-10">
      <div v-for="(tier, idx) in tiers" :key="idx" class="group relative flex flex-col md:flex-row items-stretch justify-between bg-white border-[8px] md:border-[12px] border-black hover:bg-black hover:text-white transition-all duration-500 shadow-[12px_12px_0_0_#CCFF00] hover:shadow-none">
        <div class="p-6 md:p-12 lg:p-16 space-y-6 md:space-y-10 flex-1 border-b-[8px] md:border-b-0 md:border-r-[8px] border-black group-hover:border-accent transition-colors">
          <h3 class="bg-black text-accent inline-block px-4 py-1 text-sm md:text-xl font-black italic uppercase tracking-tighter">STRENGTH_TIER_0{{ idx + 1 }}</h3>
          <p class="text-4xl md:text-[min(5vw,70px)] font-black italic uppercase leading-[1] tracking-tighter">{{ tier.name }}</p>
          <div class="flex flex-wrap gap-2 md:gap-3 pt-8">
            <span v-for="f in tier.features" :key="f" class="bg-accent text-black px-3 py-1 text-[10px] md:text-lg font-black italic uppercase border-2 border-black leading-none">{{ f }}</span>
          </div>
        </div>
        <div class="p-6 md:p-12 lg:p-16 flex flex-col justify-center items-center md:items-end bg-accent text-black group-hover:bg-white transition-colors">
          <p class="text-6xl md:text-[min(6vw,100px)] font-black italic uppercase leading-[1] tracking-tighter mb-6 md:mb-8">{{ tier.price }}</p>
          <button class="w-full md:w-auto px-8 md:px-12 py-4 md:py-6 bg-black text-accent font-black uppercase italic tracking-widest text-sm md:text-lg hover:bg-white hover:text-black transition-all border-4 md:border-[6px] border-black group-hover:border-black">
            JOIN_THE_LAB
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ tiers: any[] }>()
</script>
