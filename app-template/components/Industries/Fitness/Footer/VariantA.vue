<template>
  <footer class="py-24 bg-black text-primary px-12 md:px-24 border-t-8 border-accent">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
      <div class="flex items-center gap-8">
        <h2 class="text-5xl font-black italic uppercase tracking-tighter text-accent">KINETIC_LAB</h2>
        <div class="h-1 w-12 bg-white/20"></div>
        <p class="text-[10px] font-black uppercase tracking-widest opacity-40">{{ copyright }}</p>
      </div>
      <div class="flex gap-12 text-[10px] font-black uppercase tracking-[0.5em] opacity-40">
        <a href="#" class="hover:text-accent transition-colors">PROTOCOL_GUIDE</a>
        <a href="#" class="hover:text-accent transition-colors">LAB_ACCESS</a>
        <a href="#" class="hover:text-accent transition-colors">TERMS_OF_FORCE</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{ copyright: string }>()
</script>
