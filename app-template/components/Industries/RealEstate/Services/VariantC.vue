<template>
  <section class="py-48 bg-white overflow-hidden">
    <div class="px-12 md:px-24 mb-32 flex justify-between items-end">
      <h2 class="text-6xl font-bold uppercase text-background tracking-tighter shadow-sm">OUR <span class="text-accent">SERVICES</span></h2>
      <p class="text-[10px] font-black uppercase tracking-[0.5em] text-secondary">Consultancy in the art of lifestyle</p>
    </div>
    
    <div class="flex gap-12 overflow-x-auto hide-scrollbar px-12 md:px-24">
      <div 
        v-for="(service, idx) in services" 
        :key="idx" 
        class="min-w-[85vw] md:min-w-[40vw] relative group bg-gray-50 border border-gray-100 rounded-[4rem] p-16 flex flex-col justify-between hover:border-accent transition-all duration-700 shadow-xl"
      >
        <div class="flex justify-between items-start">
          <div class="text-[8vw] font-black text-background/5 group-hover:text-accent/20 transition-colors">0{{ idx + 1 }}</div>
          <div class="w-24 h-24 rounded-full border-2 border-gray-100 flex items-center justify-center group-hover:bg-background group-hover:text-primary transition-all">
            <component :is="service.icon" :size="40" />
          </div>
        </div>
        <div class="space-y-12">
          <h3 class="text-5xl font-bold uppercase tracking-tighter text-background">{{ service.title }}</h3>
          <p class="text-secondary text-xl font-medium leading-relaxed max-w-sm">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import * as LucideIcons from 'lucide-vue-next'
defineProps<{ services: any[] }>()
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar { display: none; }
.hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>
