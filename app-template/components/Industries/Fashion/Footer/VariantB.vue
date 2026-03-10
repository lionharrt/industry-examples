<template>
  <footer class="py-8 md:py-12 bg-black text-white px-6 md:px-24 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 border-t border-white/10 text-center md:text-left">
    <div class="flex flex-col md:flex-row items-center gap-4 md:gap-8">
      <div class="px-4 py-2 border border-[#dc143c] text-[#dc143c] font-black text-[10px] tracking-[0.3em] md:tracking-[0.5em] uppercase leading-none">NA_STUDIO</div>
      <p class="text-[8px] md:text-[10px] font-black uppercase tracking-widest opacity-40 leading-none">{{ copyright }}</p>
    </div>
    <div class="flex gap-8 md:gap-12 text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] opacity-40 flex-wrap justify-center">
      <span class="hover:text-[#dc143c] transition-colors cursor-pointer">INSTAGRAM</span>
      <span class="hover:text-[#dc143c] transition-colors cursor-pointer">VOGUE_RUNWAY</span>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{ copyright: string }>()
</script>
