<template>
  <footer class="py-24 bg-background text-primary px-12 md:px-24 border-t border-primary/5">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
      <div class="flex items-center gap-8">
        <h2 class="text-4xl font-serif italic tracking-tighter text-accent">The Wanderer</h2>
        <div class="h-px w-12 bg-primary/10"></div>
        <p class="text-[10px] font-black uppercase tracking-widest text-secondary">{{ copyright }}</p>
      </div>
      <div class="flex gap-12 text-[10px] font-black uppercase tracking-[0.5em] opacity-40">
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
