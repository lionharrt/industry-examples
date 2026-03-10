<template>
  <footer class="py-12 md:py-24 bg-black text-white px-6 md:px-24 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 border-t-2 border-white/5 text-center md:text-left">
    <h2 class="text-2xl md:text-3xl font-black uppercase tracking-tighter italic leading-none">NOIR <span class="text-[#dc143c]">ATELIER</span></h2>
    <div class="flex gap-8 md:gap-12 text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] opacity-40 flex-wrap justify-center">
      <a href="#" class="hover:text-white transition-colors">Manifesto</a>
      <a href="#" class="hover:text-white transition-colors">Archive</a>
      <a href="#" class="hover:text-white transition-colors">Legal</a>
    </div>
    <p class="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] opacity-20">{{ copyright }}</p>
  </footer>
</template>

<script setup lang="ts">
defineProps<{ copyright: string }>()
</script>
