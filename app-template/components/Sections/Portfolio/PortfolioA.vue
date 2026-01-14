<template>
  <section class="py-32 bg-background px-12">
    <div class="max-w-6xl mx-auto grid grid-cols-3 gap-4">
      <div v-for="(item, idx) in items" :key="idx" class="portfolio-item aspect-square overflow-hidden rounded-2xl relative group">
        <ParallaxImage :src="item.image + '?auto=format&fit=crop&w=800'" :alt="item.title" />
        <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <p class="text-white text-xl font-bold uppercase tracking-widest">{{ item.title }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ items: any[] }>()
</script>
