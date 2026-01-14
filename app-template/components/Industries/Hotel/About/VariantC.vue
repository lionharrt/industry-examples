<template>
  <section class="py-48 bg-white text-primary px-12 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 items-end">
      <div class="lg:col-span-8 space-y-24">
        <h2 class="text-[12vw] font-serif italic leading-none uppercase tracking-widest text-background opacity-20 hover:opacity-100 transition-opacity duration-1000">
          ESCAPE
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <p class="text-3xl font-serif italic leading-none text-primary">
            {{ title }}
          </p>
          <p class="text-primary/40 leading-relaxed font-medium italic">
            {{ content }}
          </p>
        </div>
      </div>
      <div class="lg:col-span-4 aspect-[2/3] rounded-[100px] overflow-hidden shadow-2xl relative group bg-background">
        <ParallaxImage src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800" speed="0.05" />
        <div class="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-center p-12">
          <p class="text-xs font-black uppercase tracking-[0.5em] text-white">The Sanctuary</p>
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
