<template>
  <section class="py-48 bg-white text-background px-12 md:px-24">
    <div class="max-w-7xl mx-auto">
      <div class="mb-32 flex flex-col md:flex-row justify-between items-baseline gap-8">
        <h2 class="text-[10vw] font-bold uppercase leading-none tracking-tighter text-accent">PORTFOLIO</h2>
        <p class="text-xs font-black uppercase tracking-[0.5em] text-secondary">The world's most exceptional addresses</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100 overflow-hidden rounded-3xl shadow-2xl">
        <div 
          v-for="(item, idx) in items" 
          :key="idx" 
          class="portfolio-item group relative aspect-video bg-white overflow-hidden cursor-pointer"
        >
          <ParallaxImage :src="item.image + '?auto=format&fit=crop&w=1200'" speed="0.05" />
          <div class="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 p-12 flex flex-col justify-end">
            <span class="text-accent text-xs font-black uppercase tracking-widest mb-4">Prime Listing</span>
            <h3 class="text-4xl font-bold uppercase text-primary tracking-tighter">{{ item.title }}</h3>
            <div class="mt-8 flex gap-8 text-primary/60 text-xs font-bold uppercase tracking-widest">
              <span>6 Bed</span>
              <span>8 Bath</span>
              <span>12,000 Sq Ft</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ items: any[] }>()
</script>
