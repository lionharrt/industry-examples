<template>
  <section class="py-16 md:py-48 bg-accent text-black px-6 md:px-24 relative overflow-hidden">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24 items-stretch relative z-10">
      <div v-for="(tier, idx) in tiers" :key="idx" class="flex-1 p-8 md:p-24 bg-black text-white hover:bg-white hover:text-black transition-all duration-300 border-[16px] md:border-[32px] border-black shadow-[20px_20px_0_0_#ffffff] group relative overflow-hidden flex flex-col justify-between">
        <div class="space-y-12 md:space-y-24 relative z-10">
          <div class="flex justify-between items-center">
            <h3 class="text-4xl md:text-7xl font-black italic uppercase tracking-tighter leading-[0.8]">{{ tier.name }}</h3>
            <div class="w-20 h-20 md:w-32 md:h-32 bg-accent text-black flex items-center justify-center font-black italic text-xl md:text-4xl border-8 border-black group-hover:border-white transition-colors">PRO</div>
          </div>
          <ul class="space-y-8 md:space-y-16 pt-12 border-t-[8px] border-white/20 group-hover:border-black/20">
            <li v-for="f in tier.features" :key="f" class="flex items-center gap-6 md:gap-12 text-xl md:text-5xl font-black italic uppercase tracking-tighter">
              <div class="w-12 md:w-24 h-4 md:h-8 bg-accent group-hover:bg-black transition-colors"></div>
              {{ f }}
            </li>
          </ul>
        </div>

        <div class="mt-24 md:mt-48 relative z-10">
          <p class="text-sm md:text-2xl font-black uppercase tracking-[0.5em] text-accent mb-4 md:mb-8 italic">BILLING_CYCLED_MONTHLY</p>
          <p class="text-[15vw] md:text-[12vw] font-black italic uppercase leading-[0.7] tracking-tighter mb-12">{{ tier.price }}</p>
          <button class="w-full py-6 md:py-16 bg-accent text-black font-black uppercase italic tracking-widest text-xl md:text-4xl group-hover:bg-black group-hover:text-accent transition-all border-8 border-black group-hover:border-black shadow-[15px_15px_0_0_#ffffff] group-hover:shadow-none">INITIATE_TRAINING</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ tiers: any[] }>()
</script>
