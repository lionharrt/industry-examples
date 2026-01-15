<template>
  <footer class="py-12 md:py-24 bg-black text-white px-6 md:px-24 border-t-[16px] md:border-t-[32px] border-accent">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 md:gap-24 relative z-10">
      <div class="flex flex-col md:flex-row items-center gap-8 md:gap-16 text-center md:text-left">
        <h2 class="text-4xl md:text-8xl font-black italic uppercase tracking-tighter text-accent">KINETIC_LAB</h2>
        <div class="h-4 w-12 md:h-8 md:w-32 bg-white hidden md:block"></div>
        <p class="text-xs md:text-2xl font-black uppercase tracking-widest text-white italic">{{ copyright }}</p>
      </div>
      <div class="flex flex-wrap justify-center gap-8 md:gap-16 text-sm md:text-2xl font-black uppercase tracking-tighter text-accent">
        <a href="#" class="hover:text-white transition-colors border-b-4 border-current">PROTOCOL_GUIDE</a>
        <a href="#" class="hover:text-white transition-colors border-b-4 border-current">LAB_ACCESS</a>
        <a href="#" class="hover:text-white transition-colors border-b-4 border-current">TERMS_OF_FORCE</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{ copyright: string }>()
</script>
