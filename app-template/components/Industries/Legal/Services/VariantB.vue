<template>
  <section class="py-48 bg-white text-background px-12 md:px-24">
    <div class="max-w-7xl mx-auto space-y-32">
      <div v-for="(service, idx) in services" :key="idx" class="group grid grid-cols-1 lg:grid-cols-12 gap-24 items-center py-24 border-b border-background/5 last:border-0">
        <div class="lg:col-span-2 text-6xl font-serif italic text-accent opacity-40 italic group-hover:opacity-100 transition-opacity">0{{ idx + 1 }}</div>
        
        <div class="lg:col-span-6 space-y-8">
          <h3 class="text-6xl font-serif italic tracking-tighter leading-none group-hover:translate-x-8 transition-transform duration-1000">{{ service.name }}</h3>
          <p class="text-2xl font-light italic opacity-60 leading-relaxed">{{ service.description }}</p>
        </div>

        <div class="lg:col-span-4 flex justify-end">
          <button class="w-24 h-24 rounded-full border border-background/10 flex items-center justify-center group-hover:bg-background group-hover:text-accent transition-all duration-700">
            <ArrowUpRight :size="32" stroke-width="1" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
defineProps<{ services: any[] }>()
</script>
