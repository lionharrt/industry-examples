<template>
  <section class="py-16 md:py-48 bg-black text-white px-6 md:px-24">
    <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border-2 border-white/10 shadow-2xl overflow-hidden">
      <div v-for="(tier, idx) in tiers" :key="idx" class="p-8 md:p-24 bg-black hover:bg-white hover:text-black transition-all duration-1000 flex flex-col justify-between group min-h-[50vh] md:min-h-0">
        <div class="space-y-8 md:space-y-16">
          <h3 class="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] md:tracking-[1em] text-[#dc143c]">Tier_0{{ idx + 1 }}</h3>
          <p class="text-5xl sm:text-7xl lg:text-[5vw] font-black tracking-tighter italic leading-none">{{ tier.name }}</p>
          <ul class="space-y-4 md:space-y-6 pt-8 md:pt-16 border-t border-white/10 group-hover:border-black/10">
            <li v-for="f in tier.features" :key="f" class="text-[10px] md:text-xs font-black uppercase tracking-widest opacity-40 group-hover:opacity-100">{{ f }}</li>
          </ul>
        </div>
        <div class="mt-12 md:mt-24">
          <p class="text-5xl md:text-6xl font-black mb-8 md:mb-12 tracking-tighter">{{ tier.price }}</p>
          <button class="w-full py-4 md:py-8 border-2 md:border-4 border-white group-hover:border-black font-black uppercase tracking-widest text-[10px] md:text-xs hover:bg-black hover:text-white transition-all">Acquire</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ tiers: any[] }>()
</script>
