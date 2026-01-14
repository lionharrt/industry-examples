<template>
  <section class="py-48 bg-white text-black px-12 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div 
        v-for="(service, idx) in services" 
        :key="idx" 
        class="service-card aspect-[3/4] border-2 border-black p-12 flex flex-col justify-between group hover:bg-accent hover:text-primary hover:border-accent transition-all duration-700 relative overflow-hidden"
      >
        <div class="relative z-10 space-y-8">
          <div class="w-12 h-px bg-black group-hover:bg-white transition-colors duration-700"></div>
          <h3 class="text-4xl font-black uppercase leading-tight italic">{{ service.title }}</h3>
        </div>
        <div class="relative z-10 space-y-8">
          <p class="text-xs font-black uppercase tracking-widest opacity-40 group-hover:opacity-100">{{ service.description }}</p>
          <div class="w-12 h-12 rounded-full border border-black flex items-center justify-center group-hover:border-white transition-all">
            <ArrowUpRight :size="20" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
defineProps<{ services: any[] }>()
</script>
