<template>
  <footer class="py-24 bg-[#FAF9F6] text-background px-12 md:px-24 border-t border-background/10">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
      <div class="flex items-center gap-8">
        <h2 class="text-4xl font-serif italic tracking-tighter text-accent uppercase italic">Vanguard</h2>
        <div class="h-px w-12 bg-background/10"></div>
        <p class="text-[10px] font-black uppercase tracking-widest opacity-40 italic">{{ copyright }}</p>
      </div>
      <div class="flex gap-12 text-[10px] font-black uppercase tracking-[0.5em] opacity-40 italic">
        <a href="#" class="hover:text-accent transition-colors">THE_MANIFESTO</a>
        <a href="#" class="hover:text-accent transition-colors">LEGAL_DISCLAIMER</a>
        <a href="#" class="hover:text-accent transition-colors">PRIVACY</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{ copyright: string }>()
</script>
