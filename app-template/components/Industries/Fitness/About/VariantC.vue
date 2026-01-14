<template>
  <section class="py-48 bg-accent text-black px-12 md:px-24">
    <div class="max-w-7xl mx-auto space-y-24">
      <div class="flex flex-col md:flex-row justify-between items-end gap-12 border-b-8 border-black pb-12">
        <h2 class="text-9xl md:text-[15vw] font-black italic leading-[0.7] tracking-tighter uppercase">{{ title?.split(' ')[0] }}</h2>
        <p class="text-2xl font-black uppercase tracking-widest max-w-sm text-right italic">{{ content }}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/20 border-8 border-black">
        <div v-for="stat in stats" :key="stat.label" class="p-16 bg-accent group relative overflow-hidden flex flex-col items-center justify-center text-center">
          <div class="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          <div class="relative z-10 group-hover:text-accent transition-colors duration-500">
            <p class="text-8xl font-black italic leading-none mb-4">{{ stat.value }}</p>
            <p class="text-lg font-black uppercase tracking-[0.3em] italic">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string, content: string, stats: any[] }>()
</script>
