<template>
  <footer class="py-12 md:py-24 bg-background text-primary px-6 md:px-24 border-t border-primary/10">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
      <div class="flex flex-col md:flex-row items-center gap-6 md:gap-8">
        <h2 class="text-3xl md:text-4xl font-serif italic tracking-tighter text-accent uppercase italic leading-none">Vanguard</h2>
        <div class="hidden md:block h-px w-12 bg-primary/10"></div>
        <p class="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-primary opacity-40 italic leading-none">{{ copyright }}</p>
      </div>
      <div class="flex flex-wrap justify-center gap-6 md:gap-12 text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-primary opacity-40 italic">
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
