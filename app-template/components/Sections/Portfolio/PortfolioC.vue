<template>
  <section class="py-32 bg-background px-12">
    <div class="columns-2 md:columns-3 gap-8 space-y-8">
      <div v-for="(item, idx) in items" :key="idx" class="break-inside-avoid rounded-3xl overflow-hidden group relative">
        <img :src="item.image + '?auto=format&fit=crop&w=800'" :alt="item.title" class="w-full h-auto group-hover:scale-110 transition-transform duration-700" />
        <div class="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ items: any[] }>()
</script>
