<template>
  <section class="py-16 md:py-48 bg-black text-white px-6 md:px-24 relative overflow-hidden">
    <div class="max-w-7xl mx-auto space-y-12 md:space-y-24 relative z-10">
      <div class="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 border-b-8 md:border-b-[16px] border-accent pb-8 text-center md:text-left">
        <h2 class="text-5xl sm:text-7xl md:text-9xl font-black italic leading-[0.8] tracking-tighter uppercase">{{ title?.split(' ')[0] }}</h2>
        <p class="text-sm md:text-2xl font-black uppercase tracking-widest max-w-lg md:text-right italic text-accent">{{ content }}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
        <div v-for="stat in stats" :key="stat.label" class="p-8 md:p-16 bg-accent text-black group relative overflow-hidden flex flex-col items-center justify-center text-center border-4 md:border-8 border-accent hover:bg-white hover:border-white transition-all duration-300 shadow-[8px_8px_0_0_#ffffff] md:shadow-[16px_16px_0_0_#ffffff]">
          <div class="relative z-10">
            <p class="text-4xl sm:text-6xl md:text-8xl font-black italic leading-none mb-2 md:mb-4">{{ stat.value }}</p>
            <p class="text-[10px] sm:text-xs md:text-base font-black uppercase tracking-[0.1em] italic bg-black text-accent px-3 py-1">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string, content: string, stats: any[] }>()
</script>
