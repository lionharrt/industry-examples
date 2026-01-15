<template>
  <section class="py-16 md:py-48 bg-black text-white px-6 md:px-24 relative overflow-hidden">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 relative z-10">
      <div v-for="(tier, idx) in tiers" :key="idx" class="p-12 md:p-24 border-[16px] md:border-[32px] border-white bg-black hover:bg-accent hover:text-black hover:border-black transition-all duration-300 group flex flex-col justify-between min-h-[70vh] md:h-[90vh] relative shadow-[20px_20px_0_0_#CCFF00]">
        <div class="absolute top-8 right-8 text-[15vw] font-black italic opacity-5 group-hover:opacity-20 transition-all">0{{ idx + 1 }}</div>
        
        <div class="space-y-12 md:space-y-24 relative z-10">
          <h3 class="bg-accent text-black group-hover:bg-black group-hover:text-accent inline-block px-4 py-1 text-sm md:text-2xl font-black italic uppercase tracking-tighter">PROTOCOL_LEVEL</h3>
          <p class="text-5xl md:text-[8vw] font-black italic leading-[0.75] uppercase tracking-tighter">{{ tier.name }}</p>
          <ul class="space-y-6 md:space-y-12 pt-12 border-t-[8px] border-white/20 group-hover:border-black/20">
            <li v-for="f in tier.features" :key="f" class="flex items-center gap-6 md:gap-12 text-lg md:text-4xl font-black italic uppercase">
              <div class="w-8 md:w-16 h-2 md:h-4 bg-accent group-hover:bg-black"></div>
              {{ f }}
            </li>
          </ul>
        </div>

        <div class="relative z-10 mt-16 md:mt-auto">
          <p class="text-7xl md:text-[12vw] font-black italic uppercase leading-none tracking-tighter mb-12 group-hover:translate-x-8 transition-transform duration-500">{{ tier.price }}</p>
          <button class="w-full py-6 md:py-12 bg-white text-black font-black uppercase italic tracking-widest text-xl md:text-4xl group-hover:bg-black group-hover:text-accent transition-all border-8 border-white group-hover:border-black">
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
