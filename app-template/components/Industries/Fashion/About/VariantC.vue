<template>
  <section class="py-48 bg-black text-primary px-12 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
      <div class="lg:col-span-4 space-y-12 sticky top-24">
        <h2 class="text-xs font-black uppercase tracking-[1em] text-accent">Core_Values</h2>
        <AnimatedText class="text-5xl font-black uppercase tracking-tighter">
          {{ title }}
        </AnimatedText>
      </div>
      <div class="lg:col-span-8 space-y-32">
        <p class="text-[5vw] font-black uppercase leading-none tracking-tighter text-primary/20 hover:text-primary transition-colors duration-700">
          {{ content }}
        </p>
        <div class="grid grid-cols-2 gap-12">
          <div v-for="i in 4" :key="i" class="aspect-[4/5] bg-white/5 rounded-2xl overflow-hidden relative group">
            <ParallaxImage :src="'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800'" :speed="0.05 * i" />
            <div class="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
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
