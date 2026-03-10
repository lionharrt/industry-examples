<template>
  <section class="py-16 md:py-32 bg-background text-primary px-6 md:px-24 relative overflow-hidden">
    <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-40"></div>
    
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20 items-center">
      <div class="w-full md:w-1/2 aspect-square relative overflow-hidden rounded-full shadow-xl border-4 md:border-8 border-secondary/20 group max-w-md mx-auto">
        <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" />
      </div>
      
      <div class="w-full md:w-1/2 space-y-6 md:space-y-10">
        <h2 class="text-4xl sm:text-5xl md:text-6xl font-serif italic tracking-tighter leading-tight text-primary">
          {{ title }}
        </h2>
        <div class="grid grid-cols-2 sm:flex sm:gap-12 border-y border-primary/10 py-6 md:py-10 gap-6">
          <div v-for="stat in stats" :key="stat.label" class="space-y-1">
            <p class="text-2xl md:text-3xl font-serif italic text-accent">{{ stat.value }}</p>
            <p class="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-primary/40">{{ stat.label }}</p>
          </div>
        </div>
        <p class="text-base md:text-lg font-light italic leading-relaxed text-primary/60 italic">
          {{ content }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string, content: string, stats: any[] }>()
</script>
