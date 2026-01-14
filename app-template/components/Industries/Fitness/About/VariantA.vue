<template>
  <section class="py-48 bg-black text-accent px-12 md:px-24 overflow-hidden relative">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div class="space-y-12">
        <h2 class="text-7xl md:text-[10vw] font-black italic leading-[0.8] tracking-tighter uppercase about-title">
          {{ title }}
        </h2>
        <div class="w-48 h-2 bg-accent"></div>
        <p class="text-2xl md:text-3xl font-bold text-primary leading-tight max-w-xl">
          {{ content }}
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="stat in stats" :key="stat.label" class="p-8 border-2 border-accent flex flex-col items-center justify-center text-center space-y-4 group hover:bg-accent hover:text-black transition-all duration-500">
          <p class="text-5xl font-black italic">{{ stat.value }}</p>
          <p class="text-xs font-black uppercase tracking-widest">{{ stat.label }}</p>
        </div>
      </div>
    </div>

    <!-- Background decorative text -->
    <div class="absolute -bottom-12 left-0 text-[20vw] font-black italic text-primary/5 whitespace-nowrap pointer-events-none select-none">
      PERFORMANCE_SCIENCE
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string, content: string, stats: any[] }>()
</script>
