<template>
  <section class="py-16 md:py-48 bg-white text-black px-6 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      <div 
        v-for="(item, idx) in items" 
        :key="idx" 
        class="group relative aspect-[3/4] overflow-hidden bg-black/5"
      >
        <img :src="item.image + '?auto=format&fit=crop&w=800'" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
        <div class="absolute inset-0 bg-[#dc143c]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div class="absolute top-4 left-4 md:top-8 md:left-8 mix-blend-difference">
          <p class="text-white text-[8px] md:text-[10px] font-black uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">Item_0{{ idx + 1 }}</p>
        </div>
        <div class="absolute bottom-4 left-4 md:bottom-8 md:left-8 mix-blend-difference">
          <h3 class="text-white text-2xl md:text-3xl font-black uppercase tracking-tighter translate-y-4 group-hover:translate-y-0 transition-transform duration-700 leading-none">{{ item.title }}</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ items: any[] }>()
</script>
