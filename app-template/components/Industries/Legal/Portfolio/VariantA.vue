<template>
  <section class="py-48 bg-secondary text-background px-12 md:px-24">
    <div class="max-w-7xl mx-auto space-y-24">
      <div class="flex flex-col md:flex-row justify-between items-end border-b border-background/10 pb-12">
        <h2 class="text-7xl font-serif italic tracking-tighter">Case Studies</h2>
        <p class="text-[10px] font-black uppercase tracking-[1em] text-accent italic">SELECT_ACHIEVEMENTS</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div v-for="(item, idx) in items" :key="idx" class="group relative aspect-[3/4] overflow-hidden bg-background shadow-2xl">
          <img :src="item.image + '?auto=format&fit=crop&w=1200'" class="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-[3000ms]" />
          <div class="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
          <div class="absolute bottom-12 left-12 right-12 space-y-4">
            <h3 class="text-4xl font-serif italic text-white leading-tight translate-y-8 group-hover:translate-y-0 transition-transform duration-1000">{{ item.title }}</h3>
            <div class="w-12 h-px bg-accent group-hover:w-full transition-all duration-1000"></div>
            <button class="text-[10px] font-black uppercase tracking-widest text-accent opacity-0 group-hover:opacity-100 transition-opacity italic">VIEW_SUMMARY</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ items: any[] }>()
</script>
