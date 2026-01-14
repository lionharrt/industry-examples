<template>
  <footer class="py-24 bg-[#0A0A0A] text-primary px-12 md:px-24 border-t-[20px] border-[#E60000] relative overflow-hidden">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
      <div class="flex items-center gap-12">
        <h2 class="text-6xl font-black italic uppercase tracking-tighter text-[#E60000] italic">APEX_DYNAMICS</h2>
        <div class="h-1 w-24 bg-white/10"></div>
        <p class="text-[10px] font-black uppercase tracking-[1em] opacity-40 italic">{{ copyright }}</p>
      </div>
      <div class="flex gap-16 text-[10px] font-black uppercase tracking-[1em] opacity-40 italic">
        <a href="#" class="hover:text-[#E60000] transition-colors underline decoration-[#E60000] decoration-offset-8 decoration-4">MANIFESTO</a>
        <a href="#" class="hover:text-[#E60000] transition-colors underline decoration-[#E60000] decoration-offset-8 decoration-4">TECH_LOG</a>
        <a href="#" class="hover:text-[#E60000] transition-colors underline decoration-[#E60000] decoration-offset-8 decoration-4">LEGAL</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{ copyright: string }>()
</script>
