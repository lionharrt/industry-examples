<template>
  <section class="py-16 md:py-48 bg-primary text-white px-6 md:px-24 relative overflow-hidden">
    <div class="absolute -left-24 top-0 text-[40vw] font-black opacity-[0.03] select-none pointer-events-none italic">FORMA</div>
    
    <div class="max-w-4xl mx-auto space-y-12 md:space-y-24 relative z-10 text-center md:text-left">
      <h2 class="text-4xl sm:text-6xl md:text-[8vw] font-black uppercase leading-none tracking-tighter text-accent">{{ title }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        <p class="text-lg md:text-xl font-bold leading-relaxed uppercase tracking-tight">
          {{ content }}
        </p>
        <div class="space-y-8 md:space-y-12 flex flex-col justify-end">
          <div v-for="i in 3" :key="i" class="flex items-center gap-6 md:gap-8 group cursor-pointer justify-center md:justify-start">
            <span class="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] opacity-20 group-hover:opacity-100 transition-opacity">0{{ i }}</span>
            <p class="text-xs md:text-sm font-black uppercase tracking-widest group-hover:translate-x-4 transition-transform">{{ i === 1 ? 'CONCRETE' : i === 2 ? 'GLASS' : 'LIGHT' }}</p>
          </div>
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
