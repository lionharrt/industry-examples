<template>
  <section class="py-16 md:py-48 bg-black text-white px-6 md:px-24">
    <div class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 md:gap-8 items-stretch">
      <div v-for="(tier, idx) in tiers" :key="idx" class="flex-1 p-8 md:p-16 border-2 border-white/10 flex flex-col justify-between group hover:border-[#dc143c] transition-all duration-1000 relative">
        <div class="absolute top-0 right-0 p-4 md:p-8 text-6xl md:text-[10vw] font-black opacity-[0.03] group-hover:opacity-10 transition-opacity leading-none">F</div>
        
        <div class="space-y-12 md:space-y-16">
          <h3 class="text-3xl md:text-4xl font-black uppercase tracking-widest text-[#dc143c] italic group-hover:translate-x-4 transition-transform duration-700 leading-none">{{ tier.name }}</h3>
          <div class="space-y-6 md:space-y-8">
            <div v-for="f in tier.features" :key="f" class="flex items-center gap-4 md:gap-6 group-hover:translate-x-2 transition-transform duration-700">
              <div class="w-1.5 h-1.5 md:w-2 md:h-2 bg-white/20 group-hover:bg-[#dc143c] transition-colors"></div>
              <span class="text-[10px] md:text-xs font-black uppercase tracking-widest text-white/40 group-hover:text-white transition-colors leading-none">{{ f }}</span>
            </div>
          </div>
        </div>
        
        <div class="mt-12 md:mt-24">
          <p class="text-5xl md:text-7xl font-black mb-8 md:mb-12 tracking-tighter leading-none">{{ tier.price }}</p>
          <button class="w-full py-4 md:py-6 bg-white text-black font-black uppercase tracking-widest text-[10px] md:text-xs hover:bg-[#dc143c] hover:text-white transition-all">Initialize_Order</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ tiers: any[] }>()
</script>
