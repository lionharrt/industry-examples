<template>
  <section class="py-16 md:py-48 bg-white text-black px-6 md:px-24 border-y-2 border-black">
    <div class="max-w-7xl mx-auto space-y-8 md:space-y-12">
      <div v-for="(tier, idx) in tiers" :key="idx" class="group flex flex-col md:flex-row items-center justify-between p-8 md:p-16 border-2 border-black hover:bg-[#dc143c] hover:text-white hover:border-[#dc143c] transition-all duration-700 relative overflow-hidden text-center md:text-left">
        <div class="flex-1">
          <h3 class="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter italic leading-none">{{ tier.name }}</h3>
          <p class="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] mt-3 md:mt-4 opacity-40 group-hover:opacity-100 transition-opacity">{{ tier.features.join(' • ') }}</p>
        </div>
        <div class="mt-8 md:mt-0 text-center md:text-right flex flex-col items-center md:items-end">
          <p class="text-5xl md:text-8xl font-black tracking-tighter mb-4 md:mb-8 leading-none">{{ tier.price }}</p>
          <div class="h-1 md:h-2 w-full bg-black group-hover:bg-white transition-colors duration-700"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ tiers: any[] }>()
</script>
