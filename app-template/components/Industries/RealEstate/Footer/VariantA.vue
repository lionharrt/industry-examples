<template>
  <footer class="relative py-12 md:py-24 text-primary px-6 md:px-24 border-t border-primary/10">
    <div class="absolute inset-0 bg-background/80 -z-10"></div>
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 text-center md:text-left">
      <div class="flex flex-col md:flex-row items-center gap-4 md:gap-8">
        <h2 class="text-2xl md:text-3xl font-bold uppercase tracking-tighter shadow-sm text-accent">MERIDIAN</h2>
        <div class="hidden md:block h-px w-12 bg-primary/20"></div>
        <p class="text-[10px] font-black uppercase tracking-widest text-primary/40">{{ copyright }}</p>
      </div>
      <div class="flex flex-wrap justify-center gap-8 md:gap-12 text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-primary">
        <a href="#" class="hover:text-accent transition-colors">Portfolio</a>
        <a href="#" class="hover:text-accent transition-colors">Services</a>
        <a href="#" class="hover:text-accent transition-colors">Private</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{ copyright: string }>()
</script>
