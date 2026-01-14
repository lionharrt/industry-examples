<template>
  <section class="py-48 bg-accent text-black px-12 md:px-24">
    <div class="max-w-7xl mx-auto space-y-48">
      <div v-for="(item, idx) in items" :key="idx" class="group grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-8 h-[60vh] relative overflow-hidden bg-black border-8 border-black group-hover:rotate-1 transition-transform duration-1000" :class="{ 'lg:order-2': idx % 2 === 1 }">
          <ParallaxImage :src="item.image + '?auto=format&fit=crop&w=1600'" speed="0.1" />
          <div class="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-1000"></div>
        </div>
        <div class="lg:col-span-4 space-y-12" :class="{ 'lg:text-right': idx % 2 === 1 }">
          <div class="space-y-4">
            <span class="text-xs font-black uppercase tracking-[1em] opacity-40 italic">ZONE_0{{ idx + 1 }}</span>
            <h3 class="text-7xl font-black italic uppercase leading-[0.8] tracking-tighter group-hover:translate-x-4 transition-transform duration-700">{{ item.title }}</h3>
          </div>
          <p class="text-xl font-bold uppercase italic leading-none opacity-60">High-performance environment designed for maximum neurological response.</p>
          <button class="bg-black text-accent px-12 py-4 font-black uppercase italic hover:scale-110 transition-transform shadow-2xl">
            ENTER_ZONE
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ items: any[] }>()
</script>
