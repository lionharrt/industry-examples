<template>
  <section class="py-16 md:py-48 bg-background text-primary px-6 md:px-24">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      <div 
        v-for="(item, idx) in items" 
        :key="idx" 
        class="group relative aspect-[3/4] md:h-[70vh] rounded-[40px] md:rounded-[100px] overflow-hidden border border-white/10 p-3 md:p-4"
      >
        <div class="w-full h-full rounded-[30px] md:rounded-[80px] overflow-hidden relative">
          <img :src="item.image + '?auto=format&fit=crop&w=800'" class="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" />
          <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-center p-6 md:p-8">
            <h3 class="text-2xl md:text-3xl font-black uppercase mb-4 text-secondary leading-tight">{{ item.title }}</h3>
            <button class="px-6 py-2 bg-accent text-background font-black uppercase text-[10px] tracking-widest rounded-full">Explore</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ items: any[] }>()
</script>
