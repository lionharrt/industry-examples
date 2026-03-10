<template>
  <footer class="py-12 md:py-24 bg-[#0A0A0A] text-white px-6 md:px-24 border-t-8 md:border-t-[20px] border-[#E60000] relative overflow-hidden">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 relative z-10">
      <div class="flex flex-col md:flex-row items-center gap-6 md:gap-12 text-center md:text-left">
        <h2 class="text-3xl sm:text-5xl md:text-6xl font-black italic uppercase tracking-tighter text-[#E60000] italic leading-none">APEX_DYNAMICS</h2>
        <div class="h-1 w-12 md:w-24 bg-white/10 hidden md:block"></div>
        <p class="text-[8px] md:text-[10px] font-black uppercase tracking-widest opacity-40 italic text-white">{{ copyright }}</p>
      </div>
      <div class="flex gap-8 md:gap-16 text-[8px] md:text-[10px] font-black uppercase tracking-[0.5em] md:tracking-[1em] opacity-40 italic flex-wrap justify-center text-white">
        <a href="#" class="hover:text-[#E60000] transition-colors underline decoration-[#E60000] decoration-offset-4 md:decoration-offset-8 decoration-2 md:decoration-4">MANIFESTO</a>
        <a href="#" class="hover:text-[#E60000] transition-colors underline decoration-[#E60000] decoration-offset-4 md:decoration-offset-8 decoration-2 md:decoration-4">TECH_LOG</a>
        <a href="#" class="hover:text-[#E60000] transition-colors underline decoration-[#E60000] decoration-offset-4 md:decoration-offset-8 decoration-2 md:decoration-4">LEGAL</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{ copyright: string }>()
</script>
