<template>
  <section class="py-16 md:py-48 bg-black text-white px-6 md:px-24 relative overflow-hidden">
    <div class="max-w-7xl mx-auto space-y-12 md:space-y-24 relative z-10">
      <div class="flex flex-col sm:flex-row justify-between items-center sm:items-baseline gap-4 border-b-4 md:border-b-8 border-accent pb-6 text-center sm:text-left">
        <h2 class="text-5xl md:text-8xl font-black italic uppercase tracking-tighter text-white leading-none">THE_ARENA</h2>
        <span class="text-sm md:text-2xl font-black italic text-accent">03 / LOCATIONS</span>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
        <div v-for="(item, idx) in items" :key="idx" class="group relative aspect-[4/5] overflow-hidden cursor-pointer border-4 md:border-8 border-white hover:border-accent transition-colors shadow-[8px_8px_0_0_#ffffff] hover:shadow-none transition-all">
          <img :src="item.image + '?auto=format&fit=crop&w=1200'" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
          <div class="absolute inset-0 bg-black/40 group-hover:bg-accent/10 transition-all"></div>
          <div class="absolute bottom-4 left-4 right-4 p-4 bg-black text-accent border-2 border-accent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <p class="text-[10px] font-black uppercase tracking-[0.3em] text-white mb-1">ZONE_0{{ idx + 1 }}</p>
            <h3 class="text-xl md:text-2xl font-black italic uppercase text-accent">{{ item.title }}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ items: any[] }>()
</script>
