<template>
  <footer class="py-10 md:py-12 bg-white border-t border-primary/5 px-6">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-8">
      <div class="text-xl md:text-2xl font-serif text-primary">Lumina.</div>
      
      <div class="flex flex-wrap justify-center gap-8 md:gap-12 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-primary/40">
        <span class="hover:text-accent cursor-pointer transition-colors">Instagram</span>
        <span class="hover:text-accent cursor-pointer transition-colors">LinkedIn</span>
        <span class="hover:text-accent cursor-pointer transition-colors">Twitter</span>
      </div>
      
      <div class="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-primary/20 text-center md:text-right">
        {{ copyright }}
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{ copyright: string }>()
</script>
