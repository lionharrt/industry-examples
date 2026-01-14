<template>
  <footer class="py-20 bg-white border-t border-primary/5">
    <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
      <div class="text-3xl font-serif italic text-primary">Zen Flow.</div>
      
      <div class="flex gap-16 text-[9px] font-black uppercase tracking-[0.4em] text-primary/30">
        <span class="hover:text-accent cursor-pointer transition-colors">Digital Studio</span>
        <span class="hover:text-accent cursor-pointer transition-colors">Newsletter</span>
        <span class="hover:text-accent cursor-pointer transition-colors">Retreats</span>
      </div>
      
      <div class="text-[9px] font-black uppercase tracking-[0.4em] text-primary/10">
        {{ copyright }}
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{ copyright: string }>()
</script>
