<template>
  <section class="py-24 md:py-48 bg-[#1A1A1A] text-white px-6 md:px-24">
    <div class="max-w-7xl mx-auto">
      <div class="mb-16 md:mb-32 flex flex-col md:flex-row justify-between items-center md:items-baseline gap-6 md:gap-8 text-center md:text-left">
        <h2 class="text-5xl sm:text-7xl md:text-8xl font-serif italic text-[#D4AF37]">The Gallery</h2>
        <p class="text-[9px] md:text-xs uppercase tracking-[0.5em] text-white/30 font-bold">A visual journey through our craft</p>
      </div>

      <div class="columns-1 sm:columns-2 lg:columns-3 gap-6 md:gap-8 space-y-6 md:space-y-8">
        <div 
          v-for="(item, idx) in items" 
          :key="idx" 
          class="portfolio-item break-inside-avoid relative group overflow-hidden rounded-2xl md:rounded-3xl cursor-pointer shadow-xl"
        >
          <ParallaxImage 
            :src="item.image" 
            :alt="item.title"
            class="w-full h-auto grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 md:p-8 flex flex-col justify-end">
            <span class="text-[#D4AF37] text-[8px] md:text-[10px] font-bold uppercase tracking-widest mb-1 md:mb-2">Signature Dish</span>
            <h3 class="text-xl md:text-2xl font-serif leading-tight">{{ item.title }}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ items: any[] }>()
</script>
