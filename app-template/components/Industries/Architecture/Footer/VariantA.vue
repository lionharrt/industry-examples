<template>
  <footer class="py-12 md:py-24 bg-background text-primary px-6 md:px-24 border-t border-black/5">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">
      <div class="flex items-center gap-4 md:gap-8">
        <h2 class="text-2xl md:text-4xl font-black uppercase tracking-tighter italic shadow-sm leading-none">FORMA</h2>
        <div class="h-px w-8 md:w-12 bg-black/10"></div>
        <p class="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-accent">{{ copyright }}</p>
      </div>
      <div class="flex gap-6 md:gap-12 text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] opacity-40">
        <a href="#" class="hover:text-primary transition-colors">Archive</a>
        <a href="#" class="hover:text-primary transition-colors">Manifesto</a>
        <a href="#" class="hover:text-primary transition-colors">Privacy</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{ copyright: string }>()
</script>
