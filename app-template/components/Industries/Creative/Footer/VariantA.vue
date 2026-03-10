<template>
  <footer class="py-12 md:py-24 bg-background text-primary px-6 md:px-24 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 border-t-4 md:border-t-8 border-accent text-center md:text-left">
    <h2 class="text-2xl md:text-4xl font-black uppercase tracking-tighter leading-none">PARALLAX <span class="text-accent">CREATIVE</span></h2>
    <div class="flex gap-8 md:gap-12 text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] opacity-40 flex-wrap justify-center">
      <a href="#" class="hover:text-secondary transition-colors">Manifesto</a>
      <a href="#" class="hover:text-secondary transition-colors">Lab</a>
      <a href="#" class="hover:text-secondary transition-colors">Legal</a>
    </div>
    <p class="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] opacity-20">{{ copyright }}</p>
  </footer>
</template>

<script setup lang="ts">
defineProps<{ copyright: string }>()
</script>
