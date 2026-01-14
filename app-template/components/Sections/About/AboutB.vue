<template>
  <section class="py-32 bg-background px-12 overflow-hidden">
    <div class="grid grid-cols-2 gap-24 items-center">
      <div class="aspect-[4/5]">
        <ParallaxImage src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1000" alt="About Image" />
      </div>
      <div>
        <h2 class="text-6xl font-black mb-8 uppercase tracking-tighter">{{ title }}</h2>
        <p class="text-xl leading-loose text-primary/60">{{ content }}</p>
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
