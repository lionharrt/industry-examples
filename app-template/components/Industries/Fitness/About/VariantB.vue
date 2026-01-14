<template>
  <section class="py-48 bg-white text-black px-12 md:px-24">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-24 items-center">
      <div class="w-full md:w-1/2 aspect-square relative rounded-[4rem] overflow-hidden shadow-2xl">
        <img src="https://images.unsplash.com/photo-1549476464-37392f717551?auto=format&fit=crop&w=1200" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-black/10"></div>
        <div class="absolute top-12 left-12 p-8 bg-accent text-black text-4xl font-black italic shadow-xl uppercase skew-x-[-12deg]">
          <span class="inline-block skew-x-[12deg]">01 / LAB</span>
        </div>
      </div>
      
      <div class="w-full md:w-1/2 space-y-12">
        <h2 class="text-8xl font-black italic leading-none tracking-tighter uppercase underline decoration-accent decoration-8">
          {{ title }}
        </h2>
        <p class="text-xl font-medium leading-relaxed opacity-60">
          {{ content }}
        </p>
        <div class="flex flex-wrap gap-12">
          <div v-for="stat in stats" :key="stat.label" class="space-y-2">
            <p class="text-4xl font-black italic">{{ stat.value }}</p>
            <p class="text-[10px] font-black uppercase tracking-[0.5em] text-accent bg-black px-2 py-1">
              {{ stat.label }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string, content: string, stats: any[] }>()
</script>
