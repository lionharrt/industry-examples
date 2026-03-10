<template>
  <section class="py-16 md:py-48 bg-background overflow-hidden">
    <div class="px-6 md:px-24 mb-16 md:mb-32 flex flex-col items-center text-center space-y-6 md:space-y-8">
      <div class="w-px h-16 md:h-24 bg-primary/20"></div>
      <h2 class="text-4xl sm:text-6xl md:text-7xl font-serif italic text-primary leading-none">The <span class="text-accent">Experiences</span></h2>
    </div>
    
    <div class="flex gap-6 md:gap-12 overflow-x-auto hide-scrollbar px-6 md:px-24 pb-8 md:pb-12">
      <div
        v-for="(service, idx) in services"
        :key="idx"
        class="min-w-[85vw] md:min-w-[45vw] aspect-video md:aspect-[16/9] relative group rounded-3xl md:rounded-[5rem] overflow-hidden bg-white"
      >
        <ParallaxImage :src="'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200'" speed="0.1" />
        <div class="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
        <div class="absolute bottom-8 left-8 right-8 md:bottom-16 md:left-16 md:right-16 flex flex-col items-start gap-4 md:gap-8">
          <span class="text-accent text-[10px] md:text-xs font-black uppercase tracking-[0.5em] md:tracking-[1em] leading-none">Spirit_0{{ idx + 1 }}</span>
          <h3 class="text-3xl sm:text-5xl md:text-[5vw] font-serif italic text-white leading-none group-hover:translate-x-4 transition-transform duration-700">{{ service.title }}</h3>
          <p class="text-white/60 text-base md:text-lg font-light italic max-w-sm leading-relaxed">{{ service.description }}</p>
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
