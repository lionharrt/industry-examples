<template>
  <section class="py-24 md:py-48 bg-[#1A1A1A] text-white px-6 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div 
        v-for="(item, idx) in items" 
        :key="idx" 
        class="group relative h-[40vh] sm:h-[60vh] overflow-hidden first:col-span-1 sm:first:col-span-2 first:h-[50vh] sm:first:h-[80vh] rounded-xl md:rounded-2xl shadow-xl"
      >
        <ParallaxImage :src="item.image" speed="0.05" />
        <div class="absolute top-6 left-6 md:top-12 md:left-12">
          <span class="text-[8px] md:text-[10px] font-black uppercase tracking-[0.5em] md:tracking-[1em] text-white/40 group-hover:text-[#D4AF37] transition-colors">Project 0{{ idx + 1 }}</span>
        </div>
        <div class="absolute bottom-6 left-6 md:bottom-12 md:left-12 overflow-hidden">
          <h3 class="text-3xl md:text-5xl font-serif translate-y-full group-hover:translate-y-0 transition-transform duration-700 italic leading-none">
            {{ item.title }}
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ items: any[] }>()
</script>
