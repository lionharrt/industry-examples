<template>
  <section class="py-24 md:py-48 bg-background text-primary px-6 md:px-24">
    <div class="max-w-7xl mx-auto">
      <div class="mb-16 md:mb-32 flex flex-col md:flex-row justify-between items-baseline gap-6 md:gap-8">
        <h2 class="text-[12vw] md:text-[10vw] font-bold uppercase leading-none tracking-tighter text-accent">PORTFOLIO</h2>
        <p class="text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-primary/40">The world's most exceptional addresses</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-px bg-primary/10 overflow-hidden rounded-3xl shadow-2xl border border-primary/10">
        <div 
          v-for="(item, idx) in items" 
          :key="idx" 
          class="portfolio-item group relative aspect-video bg-background overflow-hidden cursor-pointer"
        >
          <ParallaxImage :src="item.image" :speed="0.05" />
          <div class="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-700 p-6 md:p-12 flex flex-col justify-end">
            <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
              <span class="text-accent text-[10px] md:text-xs font-black uppercase tracking-widest mb-2 md:mb-4 inline-block">Prime Listing</span>
              <h3 class="text-2xl md:text-4xl font-bold uppercase text-primary tracking-tighter leading-none mb-4">{{ item.title }}</h3>
              <div class="flex gap-4 md:gap-8 text-primary/60 text-[10px] md:text-xs font-bold uppercase tracking-widest border-t border-primary/10 pt-4">
                <span class="flex items-center gap-2"><div class="w-1 h-1 bg-accent rounded-full"></div> 6 Bed</span>
                <span class="flex items-center gap-2"><div class="w-1 h-1 bg-accent rounded-full"></div> 8 Bath</span>
                <span class="flex items-center gap-2"><div class="w-1 h-1 bg-accent rounded-full"></div> 12,000 Sq Ft</span>
              </div>
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
