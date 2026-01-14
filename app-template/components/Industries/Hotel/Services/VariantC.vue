<template>
  <section class="py-48 bg-background overflow-hidden">
    <div class="px-12 md:px-24 mb-32 flex flex-col items-center text-center space-y-8">
      <div class="w-px h-24 bg-primary/20"></div>
      <h2 class="text-7xl font-serif italic text-primary">The <span class="text-accent">Experiences</span></h2>
    </div>
    
    <div class="flex gap-12 overflow-x-auto hide-scrollbar px-12 md:px-24 pb-12">
      <div 
        v-for="(service, idx) in services" 
        :key="idx" 
        class="min-w-[85vw] md:min-w-[45vw] aspect-[16/9] relative group rounded-[5rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.2)] bg-white"
      >
        <ParallaxImage :src="'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200'" speed="0.1" />
        <div class="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
        <div class="absolute bottom-16 left-16 right-16 flex flex-col items-start gap-8">
          <span class="text-accent text-xs font-black uppercase tracking-[1em]">Spirit_0{{ idx + 1 }}</span>
          <h3 class="text-[5vw] font-serif italic text-white leading-none group-hover:translate-x-4 transition-transform duration-700">{{ service.title }}</h3>
          <p class="text-white/60 text-lg font-light italic max-w-sm">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ services: any[] }>()
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar { display: none; }
.hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>
