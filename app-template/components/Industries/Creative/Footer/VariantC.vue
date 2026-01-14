<template>
  <footer class="py-12 bg-background text-accent px-12 md:px-24 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/10">
    <div class="flex items-center gap-8">
      <div class="px-4 py-2 bg-accent text-background font-black text-xs">PC_STUDIO</div>
      <p class="text-[10px] font-black uppercase tracking-widest opacity-40">{{ copyright }}</p>
    </div>
    <div class="flex gap-8 items-center text-[10px] font-black uppercase tracking-[0.5em] opacity-40">
      <span>NO TRENDS</span>
      <div class="w-2 h-2 rounded-full bg-secondary"></div>
      <span>ONLY VISION</span>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{ copyright: string }>()
</script>
