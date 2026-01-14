<template>
  <section class="py-48 bg-white text-background px-12 md:px-24 overflow-hidden relative">
    <div class="max-w-7xl mx-auto space-y-48">
      <div v-for="(item, idx) in items" :key="idx" class="group grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
        <div class="lg:col-span-7 h-[70vh] relative overflow-hidden shadow-2xl border-white border-[20px]" :class="{ 'lg:order-2': idx % 2 === 1 }">
          <ParallaxImage :src="item.image + '?auto=format&fit=crop&w=1600'" speed="0.1" />
          <div class="absolute inset-0 bg-background/10 group-hover:bg-transparent transition-colors duration-1000"></div>
        </div>
        <div class="lg:col-span-5 space-y-12" :class="{ 'lg:text-right': idx % 2 === 1 }">
          <div class="space-y-4">
            <span class="text-xs font-black uppercase tracking-[1em] text-accent italic">CASE_REF_0{{ idx + 1 }}</span>
            <h3 class="text-6xl md:text-8xl font-serif italic tracking-tighter leading-none group-hover:translate-x-8 transition-transform duration-1000 uppercase italic">{{ item.title }}</h3>
          </div>
          <p class="text-2xl font-light italic opacity-60 italic">Providing definitive counsel in matters of significant global interest and precedents.</p>
          <button class="bg-background text-accent px-12 py-4 text-xs font-black uppercase tracking-[0.5em] hover:bg-black transition-all shadow-2xl">
            READ_BRIEF
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ items: any[] }>()
</script>
