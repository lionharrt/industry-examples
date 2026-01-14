<template>
  <section class="py-48 bg-primary text-white px-12 md:px-24">
    <div class="max-w-7xl mx-auto space-y-48">
      <div 
        v-for="(item, idx) in items" 
        :key="idx" 
        class="group grid grid-cols-1 lg:grid-cols-12 gap-24 items-center"
      >
        <div class="lg:col-span-7 aspect-[4/3] relative rounded-[5rem] overflow-hidden shadow-2xl" :class="{ 'lg:order-2': idx % 2 === 1 }">
          <ParallaxImage :src="item.image + '?auto=format&fit=crop&w=1600'" speed="0.05" />
          <div class="absolute inset-0 bg-background/10 mix-blend-overlay group-hover:opacity-0 transition-opacity"></div>
        </div>
        <div class="lg:col-span-5 space-y-12" :class="{ 'lg:text-right': idx % 2 === 1 }">
          <div class="space-y-4">
            <span class="text-xs font-black uppercase tracking-[1em] text-accent">Sanctuary_0{{ idx + 1 }}</span>
            <h3 class="text-7xl font-serif italic leading-none group-hover:translate-x-4 transition-transform duration-1000">{{ item.title }}</h3>
          </div>
          <p class="text-white/40 text-xl font-light italic leading-relaxed">
            Where the morning light meets hand-woven textures. A celebration of local soul and artisanal intent.
          </p>
          <div class="flex flex-wrap gap-8" :class="{ 'lg:justify-end': idx % 2 === 1 }">
            <span v-for="tag in ['Sea View', 'Artisan Kit', 'Serenity']" :key="tag" class="text-[10px] font-black uppercase tracking-widest text-background italic">{{ tag }}</span>
          </div>
          <button class="group flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.5em] text-accent" :class="{ 'lg:ml-auto': idx % 2 === 1 }">
            <span>Discover More</span>
            <div class="w-12 h-px bg-accent group-hover:w-24 transition-all duration-700"></div>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ items: any[] }>()
</script>
