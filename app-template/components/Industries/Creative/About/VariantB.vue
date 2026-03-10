<template>
  <section class="py-16 md:py-48 bg-secondary text-background px-6 md:px-24 relative overflow-hidden">
    <div class="absolute -right-6 -top-6 md:-right-12 md:-top-12 text-[60vw] md:text-[40vw] font-black opacity-5 pointer-events-none leading-none">
      01
    </div>
    
    <div class="max-w-4xl mx-auto space-y-8 md:space-y-16 relative z-10 text-center md:text-left">
      <div class="inline-block px-4 py-2 border border-background/20 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-4 md:mb-8">
        Established MMXXIV
      </div>
      <h2 class="text-5xl sm:text-7xl md:text-[8vw] font-black leading-tight md:leading-none uppercase tracking-tighter">{{ title }}</h2>
      <div class="relative">
        <div class="absolute -left-8 top-0 text-6xl md:text-8xl font-black text-accent opacity-20">"</div>
        <p class="text-2xl md:text-5xl font-bold leading-tight italic relative z-10">
          {{ content }}
        </p>
      </div>
      <div class="flex flex-wrap justify-center md:justify-start gap-8 md:gap-16 pt-8 md:pt-12 border-t border-background/10">
        <div v-for="i in 3" :key="i" class="space-y-2 md:space-y-4 group cursor-default">
          <span class="text-[10px] md:text-xs font-black uppercase tracking-widest opacity-40 group-hover:text-accent transition-colors">Phase 0{{ i }}</span>
          <p class="text-xl md:text-2xl font-black uppercase group-hover:translate-x-2 transition-transform">{{ i === 1 ? 'CONCEPT' : i === 2 ? 'CRAFT' : 'CHAOS' }}</p>
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
