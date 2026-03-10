<template>
  <footer class="py-12 md:py-24 bg-black text-white px-6 md:px-24 border-t-[16px] md:border-t-[32px] border-accent">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 md:gap-24 relative z-10">
      <div class="flex flex-col md:flex-row items-center gap-8 md:gap-16 text-center md:text-left">
        <h2 class="text-4xl md:text-6xl lg:text-7xl font-black italic uppercase tracking-tighter text-accent leading-none">KINETIC_LAB</h2>
        <div class="h-4 w-12 md:h-6 md:w-20 bg-white hidden md:block"></div>
        <p class="text-xs md:text-sm lg:text-base font-black uppercase tracking-widest text-white italic leading-tight">{{ copyright }}</p>
      </div>
      <div class="flex flex-wrap justify-center gap-8 md:gap-12 text-[10px] md:text-xs lg:text-sm font-black uppercase tracking-tighter text-accent">
        <a href="#" class="hover:text-white transition-colors border-b-2 border-current">PROTOCOL_GUIDE</a>
        <a href="#" class="hover:text-white transition-colors border-b-2 border-current">LAB_ACCESS</a>
        <a href="#" class="hover:text-white transition-colors border-b-2 border-current">TERMS_OF_FORCE</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{ copyright: string }>()
</script>
