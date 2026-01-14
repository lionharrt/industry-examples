<template>
  <section class="py-48 bg-[#0A0A0A] text-primary px-12 md:px-24">
    <div class="max-w-7xl mx-auto space-y-24">
      <div class="flex justify-between items-baseline border-b-2 border-[#E60000] pb-8">
        <h2 class="text-7xl font-black italic uppercase tracking-tighter">THE_PADDOCK</h2>
        <span class="text-xl font-black italic text-[#E60000]">BUILD_LOG_01</span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        <div v-for="(item, idx) in items" :key="idx" class="group relative aspect-[4/5] overflow-hidden bg-white/5 cursor-pointer border border-white/5">
          <img :src="item.image + '?auto=format&fit=crop&w=1200'" class="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-[2000ms]" />
          <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
          <div class="absolute bottom-12 left-12 space-y-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-1000">
            <p class="text-[10px] font-black uppercase tracking-[1em] text-[#E60000]">SERIAL_NO_0{{ idx + 1 }}</p>
            <h3 class="text-5xl font-black italic uppercase tracking-tighter">{{ item.title }}</h3>
            <div class="w-0 h-1 bg-[#E60000] group-hover:w-full transition-all duration-1000"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ items: any[] }>()
</script>
