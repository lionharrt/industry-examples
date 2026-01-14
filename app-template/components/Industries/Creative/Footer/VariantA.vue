<template>
  <footer class="py-24 bg-background text-primary px-12 md:px-24 flex flex-col md:flex-row justify-between items-center gap-12 border-t-8 border-accent">
    <h2 class="text-4xl font-black uppercase tracking-tighter">PARALLAX <span class="text-accent">CREATIVE</span></h2>
    <div class="flex gap-12 text-[10px] font-black uppercase tracking-[0.4em] opacity-40">
      <a href="#" class="hover:text-secondary transition-colors">Manifesto</a>
      <a href="#" class="hover:text-secondary transition-colors">Lab</a>
      <a href="#" class="hover:text-secondary transition-colors">Legal</a>
    </div>
    <p class="text-[10px] font-black uppercase tracking-[0.4em] opacity-20">{{ copyright }}</p>
  </footer>
</template>

<script setup lang="ts">
defineProps<{ copyright: string }>()
</script>
