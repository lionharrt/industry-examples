<template>
  <footer class="py-24 bg-background text-primary px-12 md:px-24 border-t border-white/5">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
      <div class="flex items-center gap-8">
        <div class="text-2xl font-black uppercase tracking-tighter">NEXUS <span class="text-secondary">LABS</span></div>
        <div class="h-px w-12 bg-white/10"></div>
        <p class="text-[10px] font-black uppercase tracking-widest text-primary/20">{{ copyright }}</p>
      </div>
      <div class="flex gap-12 text-[10px] font-black uppercase tracking-[0.4em] text-accent">
        <a href="#" class="hover:text-primary transition-colors">Infra</a>
        <a href="#" class="hover:text-primary transition-colors">API</a>
        <a href="#" class="hover:text-primary transition-colors">Nodes</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{ copyright: string }>()
</script>
