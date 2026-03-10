<template>
  <section class="py-16 md:py-48 bg-background text-primary px-6 md:px-24">
    <div class="max-w-7xl mx-auto">
      <div class="mb-16 md:mb-32 flex flex-col md:flex-row justify-between items-center md:items-end gap-8 border-b border-black/10 pb-8 md:pb-12 text-center md:text-left">
        <h2 class="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter leading-none">PROJECTS</h2>
        <p class="max-w-xs text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-accent leading-loose">
          A collection of interventions in the landscape, from monoliths to garden voids.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10 shadow-2xl rounded-2xl md:rounded-[3rem] overflow-hidden">
        <div 
          v-for="(item, idx) in items" 
          :key="idx" 
          class="portfolio-item group relative aspect-square bg-background overflow-hidden p-6 md:p-12 flex flex-col justify-between border border-black/5 hover:bg-white transition-all duration-700"
        >
          <div class="relative z-10">
            <span class="text-[10px] font-black uppercase tracking-widest text-accent">Project_0{{ idx + 1 }}</span>
            <h3 class="text-2xl md:text-3xl font-black uppercase tracking-tighter mt-2 md:mt-4">{{ item.title }}</h3>
          </div>
          <div class="relative h-2/3 overflow-hidden rounded-xl md:rounded-2xl">
            <ParallaxImage :src="item.image + '?auto=format&fit=crop&w=1200'" speed="0.05" />
            <div class="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ items: any[] }>()
</script>
