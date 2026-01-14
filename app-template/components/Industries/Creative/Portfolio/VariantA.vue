<template>
  <section class="py-48 bg-background text-primary px-12 md:px-24">
    <div class="max-w-7xl mx-auto">
      <div class="mb-32 flex flex-col md:flex-row justify-between items-end gap-12">
        <h2 class="text-[10vw] font-black uppercase leading-none text-secondary">WORK</h2>
        <p class="max-w-xs text-xs font-black uppercase tracking-[0.4em] text-primary/40 leading-loose">
          A selection of digital artifacts designed to disrupt the noise.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
        <div 
          v-for="(item, idx) in items" 
          :key="idx" 
          class="portfolio-card aspect-video relative group overflow-hidden bg-background cursor-pointer"
        >
          <img 
            :src="item.image + '?auto=format&fit=crop&w=1200'" 
            class="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
          />
          <div class="absolute inset-0 bg-accent/40 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-expo flex items-center justify-center">
            <h3 class="text-4xl font-black uppercase tracking-tighter text-background">{{ item.title }}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ items: any[] }>()
</script>

<style scoped>
.ease-expo { transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1); }
</style>
