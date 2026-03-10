<template>
  <footer class="py-8 md:py-12 bg-background text-accent px-6 md:px-24 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 border-t border-white/10 text-center md:text-left">
    <div class="flex flex-col md:flex-row items-center gap-4 md:gap-8">
      <div class="px-4 py-2 bg-accent text-background font-black text-[10px] md:text-xs">PC_STUDIO</div>
      <p class="text-[8px] md:text-[10px] font-black uppercase tracking-widest opacity-40 leading-none">{{ copyright }}</p>
    </div>
    <div class="flex gap-6 md:gap-8 items-center text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] opacity-40 flex-wrap justify-center">
      <span>NO TRENDS</span>
      <div class="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-secondary"></div>
      <span>ONLY VISION</span>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{ copyright: string }>()
</script>
