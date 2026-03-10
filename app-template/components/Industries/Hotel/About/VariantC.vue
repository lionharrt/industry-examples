<template>
  <section class="py-16 md:py-48 bg-white text-primary px-6 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24 items-center lg:items-end">
      <div class="lg:col-span-8 space-y-12 md:space-y-24 text-center lg:text-left">
        <h2 class="text-7xl sm:text-9xl md:text-[12vw] font-serif italic leading-none uppercase tracking-[0.1em] md:tracking-widest text-background opacity-20 hover:opacity-100 transition-opacity duration-1000 leading-none">
          ESCAPE
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <p class="text-2xl md:text-3xl font-serif italic leading-tight text-primary">
            {{ title }}
          </p>
          <p class="text-primary/40 text-sm md:text-base leading-relaxed font-medium italic">
            {{ content }}
          </p>
        </div>
      </div>
      <div class="lg:col-span-4 aspect-[2/3] rounded-[60px] md:rounded-[100px] overflow-hidden relative group bg-background max-w-sm mx-auto lg:max-w-none w-full">
        <ParallaxImage src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800" speed="0.05" />
        <div class="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-center p-8 md:p-12">
          <p class="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-white">The Sanctuary</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  content: string
}>()
</script>
