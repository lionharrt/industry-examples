<template>
  <footer class="py-12 md:py-20 bg-white border-t border-primary/5 px-6">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 text-center md:text-left">
      <div class="text-2xl md:text-3xl font-serif italic text-primary">Zen Flow.</div>
      
      <div class="flex flex-wrap justify-center gap-8 md:gap-16 text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em] text-primary/30">
        <span class="hover:text-accent cursor-pointer transition-colors whitespace-nowrap">Digital Studio</span>
        <span class="hover:text-accent cursor-pointer transition-colors whitespace-nowrap">Newsletter</span>
        <span class="hover:text-accent cursor-pointer transition-colors whitespace-nowrap">Retreats</span>
      </div>
      
      <div class="text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em] text-primary/10">
        {{ copyright }}
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{ copyright: string }>()
</script>
