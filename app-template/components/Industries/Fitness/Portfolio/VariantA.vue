<template>
  <section class="py-48 bg-black text-primary px-12 md:px-24">
    <div class="max-w-7xl mx-auto space-y-24">
      <div class="flex justify-between items-baseline border-b-4 border-accent pb-8">
        <h2 class="text-7xl font-black italic uppercase tracking-tighter">THE_ARENA</h2>
        <span class="text-xl font-black italic text-accent">03 / LOCATIONS</span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div v-for="(item, idx) in items" :key="idx" class="group relative aspect-[4/5] overflow-hidden bg-white/5 cursor-pointer">
          <img :src="item.image + '?auto=format&fit=crop&w=1200'" class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[2000ms] opacity-50 group-hover:opacity-100" />
          <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity"></div>
          <div class="absolute bottom-8 left-8 space-y-2 translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
            <p class="text-[10px] font-black uppercase tracking-[0.5em] text-accent">CORE_FACILITY</p>
            <h3 class="text-4xl font-black italic uppercase">{{ item.title }}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ items: any[] }>()
</script>
