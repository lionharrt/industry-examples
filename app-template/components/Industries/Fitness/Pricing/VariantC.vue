<template>
  <section class="py-12 md:py-20 bg-accent text-black px-6 md:px-24 relative overflow-hidden">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 md:gap-8 items-stretch relative z-10">
      <div v-for="(tier, idx) in tiers" :key="idx" class="flex-1 p-6 md:p-8 lg:p-10 bg-black text-white hover:bg-white hover:text-black transition-all duration-300 border-[8px] md:border-[12px] border-black shadow-[10px_10px_0_0_#ffffff] group relative overflow-hidden flex flex-col justify-between">
        <div class="space-y-6 md:space-y-12 relative z-10">
          <div class="flex justify-between items-start gap-4">
            <h3 class="text-3xl md:text-[min(5vw,50px)] font-black italic uppercase tracking-tighter leading-none">{{ tier.name }}</h3>
            <div class="w-10 h-10 md:w-16 md:h-16 flex-shrink-0 bg-accent text-black flex items-center justify-center font-black italic text-xs md:text-xl border-2 md:border-4 border-black group-hover:border-white transition-colors">PRO</div>
          </div>
          <ul class="space-y-3 md:space-y-5 pt-6 border-t-2 md:border-t-4 border-white/20 group-hover:border-black/20">
            <li v-for="f in tier.features" :key="f" class="flex items-center gap-3 md:gap-4 text-sm md:text-lg lg:text-xl font-black italic uppercase tracking-tight leading-none">
              <div class="w-4 md:w-8 h-1 md:h-2 bg-accent group-hover:bg-black transition-colors"></div>
              {{ f }}
            </li>
          </ul>
        </div>

        <div class="mt-12 md:mt-16 relative z-10">
          <p class="text-[10px] md:text-xs font-black uppercase tracking-widest text-accent mb-2 italic">BILLING_CYCLED_MONTHLY</p>
          <p class="text-4xl md:text-[min(7vw,90px)] font-black italic uppercase leading-[0.9] tracking-tighter mb-6 md:mb-8">{{ tier.price }}</p>
          <button class="w-full py-4 md:py-6 bg-accent text-black font-black uppercase italic tracking-widest text-base md:text-lg lg:text-xl group-hover:bg-black group-hover:text-accent transition-all border-4 md:border-6 border-black group-hover:border-black shadow-[6px_6px_0_0_#ffffff] group-hover:shadow-none">INITIATE_TRAINING</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ tiers: any[] }>()
</script>
