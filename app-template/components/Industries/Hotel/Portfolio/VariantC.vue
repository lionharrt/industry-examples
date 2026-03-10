<template>
  <section class="py-16 md:py-48 bg-primary text-white px-6 md:px-24">
    <div class="max-w-7xl mx-auto space-y-24 md:space-y-48">
      <div 
        v-for="(item, idx) in items" 
        :key="idx" 
        class="group grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24 items-center"
      >
        <div class="lg:col-span-7 aspect-[4/3] relative rounded-3xl md:rounded-[5rem] overflow-hidden" :class="{ 'lg:order-2': idx % 2 === 1 }">
          <ParallaxImage :src="item.image + '?auto=format&fit=crop&w=1600'" speed="0.05" />
          <div class="absolute inset-0 bg-background/10 mix-blend-overlay group-hover:opacity-0 transition-opacity"></div>
        </div>
        <div class="lg:col-span-5 space-y-8 md:space-y-12 text-center lg:text-left" :class="{ 'lg:text-right': idx % 2 === 1 }">
          <div class="space-y-4">
            <span class="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] md:tracking-[1em] text-accent leading-none">Sanctuary_0{{ idx + 1 }}</span>
            <h3 class="text-4xl sm:text-6xl md:text-7xl font-serif italic leading-none group-hover:translate-x-4 transition-transform duration-1000">{{ item.title }}</h3>
          </div>
          <p class="text-white/40 text-lg md:text-xl font-light italic leading-relaxed max-w-lg mx-auto lg:mx-0" :class="{ 'lg:ml-auto': idx % 2 === 1 }">
            Where the morning light meets hand-woven textures. A celebration of local soul and artisanal intent.
          </p>
          <div class="flex flex-wrap gap-4 md:gap-8 justify-center lg:justify-start" :class="{ 'lg:justify-end': idx % 2 === 1 }">
            <span v-for="tag in ['Sea View', 'Artisan Kit', 'Serenity']" :key="tag" class="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-background italic">{{ tag }}</span>
          </div>
          <button class="group flex items-center gap-4 md:gap-6 text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-accent justify-center lg:justify-start" :class="{ 'lg:ml-auto lg:flex-row-reverse': idx % 2 === 1 }">
            <span>Discover More</span>
            <div class="w-8 md:w-12 h-px bg-accent group-hover:w-16 md:group-hover:w-24 transition-all duration-700"></div>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ items: any[] }>()
</script>
