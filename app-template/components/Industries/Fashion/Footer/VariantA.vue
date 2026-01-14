<template>
  <footer class="py-24 bg-black text-primary px-12 md:px-24 flex flex-col md:flex-row justify-between items-center gap-12 border-t-2 border-white/5">
    <h2 class="text-3xl font-black uppercase tracking-tighter italic">NOIR <span class="text-accent">ATELIER</span></h2>
    <div class="flex gap-12 text-[10px] font-black uppercase tracking-[0.5em] opacity-40">
      <a href="#" class="hover:text-primary transition-colors">Manifesto</a>
      <a href="#" class="hover:text-primary transition-colors">Archive</a>
      <a href="#" class="hover:text-primary transition-colors">Legal</a>
    </div>
    <p class="text-[10px] font-black uppercase tracking-[0.5em] opacity-20">{{ copyright }}</p>
  </footer>
</template>

<script setup lang="ts">
defineProps<{ copyright: string }>()
</script>
