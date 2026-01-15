<template>
  <section class="py-16 md:py-48 bg-accent text-black px-6 md:px-24 overflow-hidden relative">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
      <div class="space-y-6 md:space-y-10 text-center lg:text-left">
        <div class="bg-black text-accent inline-block px-4 py-1 text-xs md:text-base font-black italic uppercase tracking-tighter">
          PROTOCOL_V2.0
        </div>
        <h2 class="text-5xl sm:text-6xl md:text-8xl font-black italic leading-[0.9] tracking-tighter uppercase about-title">
          {{ title }}
        </h2>
        <p class="text-base md:text-2xl font-black text-black leading-tight max-w-xl mx-auto lg:mx-0 border-l-8 md:border-l-[12px] border-black pl-4 md:pl-8">
          {{ content }}
        </p>
      </div>
      
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">
        <div v-for="stat in stats" :key="stat.label" class="p-6 md:p-10 bg-black text-accent flex flex-col items-center justify-center text-center space-y-2 md:space-y-4 border-4 md:border-8 border-black hover:bg-white hover:text-black transition-all duration-300 shadow-[6px_6px_0_0_#ffffff] md:shadow-[12px_12px_0_0_#ffffff]">
          <p class="text-3xl md:text-6xl font-black italic leading-none">{{ stat.value }}</p>
          <p class="text-[10px] md:text-xs font-black uppercase tracking-widest">{{ stat.label }}</p>
        </div>
      </div>
    </div>

    <!-- Background decorative text -->
    <div class="absolute -bottom-8 left-0 text-[15vw] font-black italic text-black/10 whitespace-nowrap pointer-events-none select-none hidden md:block">
      HIGH_VELOCITY_DATA
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string, content: string, stats: any[] }>()
</script>
