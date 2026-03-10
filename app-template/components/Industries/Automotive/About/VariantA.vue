<template>
  <section class="py-16 md:py-48 bg-[#0A0A0A] text-white px-6 md:px-24 overflow-hidden relative">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
      <div class="space-y-6 md:space-y-12 text-center lg:text-left">
        <div class="inline-block px-4 py-1 bg-[#E60000] text-black font-black uppercase italic text-[10px] md:text-xs tracking-widest">
          CORE_ENGINEERING
        </div>
        <h2 class="text-4xl sm:text-6xl md:text-7xl font-black italic leading-[0.9] tracking-tighter uppercase about-title text-white">
          {{ title }}
        </h2>
        <p class="text-lg md:text-2xl font-bold italic text-[#B4B4B4] leading-tight max-w-xl italic opacity-60 mx-auto lg:mx-0">
          {{ content }}
        </p>
      </div>
      
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">
        <div v-for="stat in stats" :key="stat.label" class="p-8 md:p-12 border-2 border-white/10 flex flex-col items-center justify-center text-center space-y-2 md:space-y-4 group hover:bg-white hover:text-black transition-all duration-700">
          <p class="text-3xl md:text-5xl font-black italic leading-none">{{ stat.value }}</p>
          <div class="w-8 md:w-12 h-1 bg-[#E60000] group-hover:w-full transition-all duration-700"></div>
          <p class="text-[8px] md:text-[10px] font-black uppercase tracking-widest opacity-40">{{ stat.label }}</p>
        </div>
      </div>
    </div>

    <!-- Decorative Carbon Texture -->
    <div class="absolute inset-0 opacity-5 pointer-events-none" :style="{ backgroundImage: 'radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)', backgroundSize: '20px 20px' }"></div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string, content: string, stats: any[] }>()
</script>
