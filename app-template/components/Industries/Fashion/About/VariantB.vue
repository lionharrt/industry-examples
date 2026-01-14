<template>
  <section class="py-48 bg-white text-black px-12 md:px-24 overflow-hidden relative">
    <div class="absolute -right-24 top-0 text-[40vw] font-black opacity-[0.03] select-none pointer-events-none italic">FSHN</div>
    
    <div class="max-w-4xl mx-auto space-y-24 relative z-10">
      <h2 class="text-[10vw] font-black uppercase leading-none tracking-tighter">{{ title }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-24">
        <p class="text-xl font-bold leading-relaxed uppercase">
          {{ content }}
        </p>
        <div class="space-y-8 flex flex-col justify-end">
          <p class="text-xs font-black uppercase tracking-[0.5em] border-b border-black pb-4">Avant-Garde</p>
          <p class="text-xs font-black uppercase tracking-[0.5em] border-b border-black pb-4">Brutalist</p>
          <p class="text-xs font-black uppercase tracking-[0.5em] border-b border-black pb-4">Minimal</p>
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
