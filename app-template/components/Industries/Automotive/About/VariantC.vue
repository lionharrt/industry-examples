<template>
  <section class="py-16 md:py-48 bg-[#B4B4B4] text-[#0A0A0A] px-6 md:px-24">
    <div class="max-w-7xl mx-auto space-y-12 md:space-y-24">
      <div class="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 md:gap-12 border-b-4 md:border-b-8 border-[#0A0A0A] pb-6 md:pb-12 text-center md:text-left">
        <h2 class="text-5xl sm:text-7xl md:text-7xl font-black italic leading-tight tracking-tighter uppercase">{{ title?.split(' ')[0] }}</h2>
        <p class="text-sm sm:text-lg md:text-2xl font-black uppercase tracking-widest max-w-sm md:text-right italic">{{ content }}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/20 border-4 md:border-8 border-black">
        <div v-for="stat in stats" :key="stat.label" class="p-8 md:p-16 bg-[#B4B4B4] group relative overflow-hidden flex flex-col items-center justify-center text-center">
          <div class="absolute inset-0 bg-[#0A0A0A] translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
          <div class="relative z-10 group-hover:text-primary transition-colors duration-700">
            <p class="text-5xl sm:text-6xl md:text-8xl font-black italic leading-none mb-2 md:mb-4 group-hover:text-[#E60000]">{{ stat.value }}</p>
            <p class="text-[10px] sm:text-xs md:text-xl font-black uppercase tracking-[0.2em] md:tracking-[0.3em] italic">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string, content: string, stats: any[] }>()
</script>
