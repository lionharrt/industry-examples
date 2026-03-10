<template>
  <section class="py-16 md:py-48 bg-white text-black px-6 md:px-24 overflow-hidden relative">
    <div class="absolute -right-12 top-0 text-[60vw] md:text-[40vw] font-black opacity-[0.03] select-none pointer-events-none italic leading-none">FSHN</div>
    
    <div class="max-w-4xl mx-auto space-y-12 md:space-y-24 relative z-10 text-center md:text-left">
      <h2 class="text-5xl sm:text-7xl md:text-[10vw] font-black uppercase leading-none tracking-tighter">{{ title }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        <p class="text-lg md:text-xl font-bold leading-relaxed uppercase">
          {{ content }}
        </p>
        <div class="space-y-4 md:space-y-8 flex flex-col justify-end">
          <p class="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.5em] border-b border-black pb-2 md:pb-4 italic text-[#dc143c]">Avant-Garde</p>
          <p class="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.5em] border-b border-black pb-2 md:pb-4 italic">Brutalist</p>
          <p class="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.5em] border-b border-black pb-2 md:pb-4 italic">Minimal</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  content: string
}>()
</script>
