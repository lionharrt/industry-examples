<template>
  <section class="py-48 bg-background text-primary px-12 md:px-24">
    <div class="max-w-7xl mx-auto">
      <div class="mb-32 flex flex-col md:flex-row justify-between items-baseline gap-12 border-b border-primary/10 pb-12">
        <h2 class="text-8xl font-serif italic tracking-tighter">The Sanctuary</h2>
        <p class="text-xs font-black uppercase tracking-[0.5em] text-accent">A visual poem of your stay</p>
      </div>

      <div class="columns-1 md:columns-2 lg:columns-3 gap-12 space-y-12">
        <div 
          v-for="(item, idx) in items" 
          :key="idx" 
          class="portfolio-card break-inside-avoid relative group overflow-hidden rounded-[3rem] shadow-2xl cursor-pointer bg-white"
        >
          <img 
            :src="item.image + '?auto=format&fit=crop&w=800'" 
            class="w-full h-auto grayscale-[50%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-in-out"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-12 flex flex-col justify-end">
            <span class="text-accent text-[10px] font-black uppercase tracking-widest mb-4">Escape_Room</span>
            <h3 class="text-3xl font-serif italic text-white">{{ item.title }}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ items: any[] }>()
</script>
