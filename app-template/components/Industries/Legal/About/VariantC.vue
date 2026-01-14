<template>
  <section class="py-48 bg-[#FAF9F6] text-background px-12 md:px-24 relative overflow-hidden">
    <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-40"></div>
    
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-24 items-center">
      <div class="w-full md:w-1/2 aspect-square relative overflow-hidden rounded-full shadow-2xl border-8 border-white group">
        <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" />
      </div>
      
      <div class="w-full md:w-1/2 space-y-12">
        <h2 class="text-6xl md:text-8xl font-serif italic tracking-tighter leading-none">
          {{ title }}
        </h2>
        <div class="flex gap-12 border-y border-background/10 py-12">
          <div v-for="stat in stats" :key="stat.label" class="space-y-2">
            <p class="text-4xl font-serif italic text-accent">{{ stat.value }}</p>
            <p class="text-[8px] font-black uppercase tracking-widest opacity-40">{{ stat.label }}</p>
          </div>
        </div>
        <p class="text-xl font-light italic leading-relaxed opacity-60 italic">
          {{ content }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string, content: string, stats: any[] }>()
</script>
