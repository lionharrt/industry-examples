<template>
  <section class="py-32 bg-background px-12">
    <div class="max-w-6xl mx-auto">
      <div v-for="(service, idx) in services" :key="idx" class="service-panel mb-32 last:mb-0 grid grid-cols-2 gap-24 items-center">
        <div :class="{ 'order-2': idx % 2 === 1 }">
          <ParallaxImage :src="'https://images.unsplash.com/photo-1550966841-3ee3ad3ae447?auto=format&fit=crop&w=1000'" />
        </div>
        <div>
          <span class="text-accent font-black text-xs uppercase tracking-[0.5em] mb-4 block">0{{ idx + 1 }}</span>
          <h3 class="text-5xl font-black uppercase mb-8 leading-none">{{ service.title }}</h3>
          <p class="text-xl text-primary/60 leading-relaxed">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ services: any[] }>()
</script>
