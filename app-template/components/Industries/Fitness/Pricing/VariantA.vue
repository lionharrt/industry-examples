<template>
  <section class="py-16 md:py-24 bg-black text-white px-6 md:px-24 relative overflow-hidden">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative z-10">
      <div v-for="(tier, idx) in tiers" :key="idx" class="p-6 md:p-10 lg:p-12 border-[8px] md:border-[16px] border-white bg-black hover:bg-accent hover:text-black hover:border-black transition-all duration-300 group flex flex-col justify-between min-h-[50vh] md:h-[70vh] relative shadow-[12px_12px_0_0_#CCFF00]">
        <div class="absolute top-4 right-4 text-[8vw] font-black italic opacity-5 group-hover:opacity-20 transition-all">0{{ idx + 1 }}</div>
        
        <div class="space-y-6 md:space-y-10 relative z-10">
          <h3 class="bg-accent text-black group-hover:bg-black group-hover:text-accent inline-block px-4 py-1 text-[10px] md:text-sm font-black italic uppercase tracking-tighter">PROTOCOL_LEVEL</h3>
          <p class="text-3xl md:text-[min(5vw,60px)] font-black italic leading-[1] uppercase tracking-tighter">{{ tier.name }}</p>
          <ul class="space-y-3 md:space-y-4 pt-6 border-t-2 border-white/20 group-hover:border-black/20">
            <li v-for="f in tier.features" :key="f" class="flex items-center gap-4 md:gap-6 text-sm md:text-xl lg:text-2xl font-black italic uppercase">
              <div class="w-4 md:w-6 h-1 md:h-2 bg-accent group-hover:bg-black"></div>
              {{ f }}
            </li>
          </ul>
        </div>

        <div class="relative z-10 mt-10 md:mt-auto">
          <p class="text-4xl md:text-[min(6vw,90px)] font-black italic uppercase leading-none tracking-tighter mb-6 group-hover:translate-x-2 transition-transform duration-500">{{ tier.price }}</p>
          <button class="w-full py-4 md:py-6 bg-white text-black font-black uppercase italic tracking-widest text-base md:text-xl lg:text-2xl group-hover:bg-black group-hover:text-accent transition-all border-4 md:border-6 border-white group-hover:border-black">
            ACTIVATE_PROTOCOL
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ tiers: any[] }>()
</script>
