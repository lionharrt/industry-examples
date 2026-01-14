<template>
  <footer class="py-24 bg-black text-primary px-6 md:px-24">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
      <h2 class="text-3xl font-serif italic text-accent">Ember & Oak</h2>
      <div class="flex gap-12 text-[10px] font-black uppercase tracking-[0.5em] text-primary/20">
        <a href="#" class="hover:text-primary transition-colors">Menu</a>
        <a href="#" class="hover:text-primary transition-colors">Contact</a>
        <a href="#" class="hover:text-primary transition-colors">Imprint</a>
      </div>
      <p class="text-[10px] font-black uppercase tracking-[0.5em] text-primary/20">{{ copyright }}</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{ copyright: string }>()
</script>
