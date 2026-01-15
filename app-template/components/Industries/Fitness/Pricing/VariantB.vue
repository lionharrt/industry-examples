<template>
  <section class="py-16 md:py-48 bg-white text-black px-6 md:px-24">
    <div class="max-w-7xl mx-auto flex flex-col gap-12 md:gap-24 relative z-10">
      <div v-for="(tier, idx) in tiers" :key="idx" class="group relative flex flex-col md:flex-row items-stretch justify-between bg-white border-[12px] md:border-[24px] border-black hover:bg-black hover:text-white transition-all duration-500 shadow-[20px_20px_0_0_#CCFF00] hover:shadow-none hover:translate-x-4 hover:translate-y-4">
        <div class="p-8 md:p-24 space-y-8 md:space-y-16 flex-1 border-b-[12px] md:border-b-0 md:border-r-[12px] border-black group-hover:border-accent transition-colors">
          <h3 class="bg-black text-accent inline-block px-4 py-1 text-sm md:text-xl font-black italic uppercase tracking-tighter">STRENGTH_TIER_0{{ idx + 1 }}</h3>
          <p class="text-5xl md:text-[10vw] font-black italic uppercase leading-[0.75] tracking-tighter">{{ tier.name }}</p>
          <div class="flex flex-wrap gap-4 pt-12">
            <span v-for="f in tier.features" :key="f" class="bg-accent text-black px-4 py-2 text-xs md:text-2xl font-black italic uppercase border-4 border-black">{{ f }}</span>
          </div>
        </div>
        <div class="p-8 md:p-24 flex flex-col justify-center items-center md:items-end bg-accent text-black group-hover:bg-white transition-colors">
          <p class="text-[15vw] md:text-[12vw] font-black italic uppercase leading-[0.7] tracking-tighter mb-12">{{ tier.price }}</p>
          <button class="w-full md:w-auto px-12 md:px-24 py-6 md:py-12 bg-black text-accent font-black uppercase italic tracking-widest text-xl md:text-4xl hover:bg-white hover:text-black transition-all border-8 border-black group-hover:border-black">
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
