<template>
  <section class="py-32 bg-background px-12">
    <div class="max-w-6xl mx-auto space-y-px">
      <div v-for="(service, idx) in services" :key="idx" class="service-row group py-12 border-b border-white/10 flex items-center justify-between hover:px-8 transition-all duration-500 cursor-pointer">
        <h3 class="text-4xl font-light uppercase tracking-tighter group-hover:text-accent transition-colors">{{ service.title }}</h3>
        <p class="max-w-md text-primary/40 text-right group-hover:text-primary transition-colors">{{ service.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ services: any[] }>()
</script>
