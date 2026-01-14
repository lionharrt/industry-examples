<template>
  <footer class="py-12 bg-black text-primary px-12 md:px-24 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/10">
    <div class="flex items-center gap-8">
      <div class="px-6 py-2 border border-accent text-accent font-black text-[10px] tracking-[0.5em] uppercase">NA_STUDIO</div>
      <p class="text-[10px] font-black uppercase tracking-widest opacity-40">{{ copyright }}</p>
    </div>
    <div class="flex gap-12 text-[10px] font-black uppercase tracking-[0.5em] opacity-40">
      <span class="hover:text-accent transition-colors cursor-pointer">INSTAGRAM</span>
      <span class="hover:text-accent transition-colors cursor-pointer">VOGUE_RUNWAY</span>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{ copyright: string }>()
</script>
