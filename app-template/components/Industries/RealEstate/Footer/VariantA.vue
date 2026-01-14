<template>
  <footer class="py-24 bg-white text-background px-12 md:px-24 border-t border-gray-100">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
      <div class="flex items-center gap-8">
        <h2 class="text-3xl font-bold uppercase tracking-tighter shadow-sm text-accent">MERIDIAN</h2>
        <div class="h-px w-12 bg-secondary/20"></div>
        <p class="text-[10px] font-black uppercase tracking-widest text-secondary">{{ copyright }}</p>
      </div>
      <div class="flex gap-12 text-[10px] font-black uppercase tracking-[0.5em] text-background">
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
