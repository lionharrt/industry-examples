<template>
  <section class="py-16 md:py-48 bg-background text-primary px-6 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
      <div class="space-y-8 md:space-y-12">
        <div class="inline-block p-4 border border-accent">
          <span class="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-accent">THE FIRM</span>
        </div>
        <h2 class="text-4xl sm:text-6xl md:text-7xl font-serif italic tracking-tighter leading-none text-primary">
          {{ title }}
        </h2>
        <p class="text-xl md:text-2xl font-light italic leading-relaxed max-w-xl text-primary opacity-60">
          {{ content }}
        </p>
      </div>
      
      <div class="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 pt-12 md:pt-0">
        <div v-for="stat in stats" :key="stat.label" class="space-y-4 group">
          <p class="text-4xl md:text-5xl font-serif italic text-accent">{{ stat.value }}</p>
          <div class="h-px w-12 bg-primary/20 group-hover:w-full transition-all duration-1000"></div>
          <p class="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-primary opacity-40 italic">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string, content: string, stats: any[] }>()
</script>
