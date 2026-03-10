<template>
  <footer class="py-12 md:py-24 bg-background text-primary px-6 md:px-24 border-t border-primary/5">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 text-center md:text-left">
      <div class="flex flex-col md:flex-row items-center gap-4 md:gap-8">
        <h2 class="text-3xl md:text-4xl font-serif italic tracking-tighter text-accent leading-none">The Wanderer</h2>
        <div class="hidden md:block h-px w-12 bg-primary/10"></div>
        <p class="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-secondary leading-none">{{ copyright }}</p>
      </div>
      <div class="flex gap-8 md:gap-12 text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] opacity-40">
        <a href="#" class="hover:text-accent transition-colors">Manifesto</a>
        <a href="#" class="hover:text-accent transition-colors">Escape_Journal</a>
        <a href="#" class="hover:text-accent transition-colors">Legal</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{ copyright: string }>()
</script>
