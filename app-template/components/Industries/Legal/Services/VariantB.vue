<template>
  <section class="py-16 md:py-48 bg-background text-primary px-6 md:px-24">
    <div class="max-w-7xl mx-auto space-y-16 md:space-y-32">
      <div v-for="(service, idx) in services" :key="idx" class="group grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-24 items-center py-12 md:py-24 border-b border-primary/10 last:border-0">
        <div class="lg:col-span-2 text-4xl md:text-6xl font-serif italic text-accent opacity-40 italic group-hover:opacity-100 transition-opacity">0{{ idx + 1 }}</div>
        
        <div class="lg:col-span-6 space-y-6 md:space-y-8">
          <h3 class="text-4xl sm:text-5xl md:text-6xl font-serif italic tracking-tighter leading-none text-primary group-hover:translate-x-4 md:group-hover:translate-x-8 transition-transform duration-1000 uppercase italic">{{ service.name }}</h3>
          <p class="text-lg md:text-2xl font-light italic text-primary opacity-60 leading-relaxed">{{ service.description }}</p>
        </div>

        <div class="lg:col-span-4 flex justify-start lg:justify-end mt-8 lg:mt-0">
          <button class="w-16 h-16 md:w-24 md:h-24 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-all duration-700">
            <ArrowUpRight :size="24" class="md:hidden" stroke-width="1" />
            <ArrowUpRight :size="32" class="hidden md:block" stroke-width="1" />
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
