<template>
  <section class="py-48 bg-[#0A0A0A] text-primary px-12 md:px-24 overflow-hidden relative">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div class="space-y-12">
        <div class="inline-block px-4 py-1 bg-[#E60000] text-black font-black uppercase italic text-xs tracking-widest">
          CORE_ENGINEERING
        </div>
        <h2 class="text-7xl md:text-[8vw] font-black italic leading-[0.8] tracking-tighter uppercase about-title">
          {{ title }}
        </h2>
        <p class="text-2xl font-bold italic text-[#B4B4B4] leading-tight max-w-xl italic opacity-60">
          {{ content }}
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="stat in stats" :key="stat.label" class="p-12 border-2 border-white/10 flex flex-col items-center justify-center text-center space-y-4 group hover:bg-white hover:text-black transition-all duration-700">
          <p class="text-5xl font-black italic">{{ stat.value }}</p>
          <div class="w-12 h-1 bg-[#E60000] group-hover:w-full transition-all duration-700"></div>
          <p class="text-[10px] font-black uppercase tracking-widest opacity-40">{{ stat.label }}</p>
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
