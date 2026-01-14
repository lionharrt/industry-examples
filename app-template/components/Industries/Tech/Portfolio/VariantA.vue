<template>
  <section class="py-48 bg-background text-primary px-12 md:px-24">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)]">
        <div 
          v-for="(item, idx) in items" 
          :key="idx" 
          class="group relative aspect-video bg-background overflow-hidden p-8 flex flex-col justify-end border border-white/5 hover:bg-[#161B22] transition-all duration-700"
        >
          <!-- Background visualization effect -->
          <div class="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-100 transition-opacity">
            <Activity :size="48" class="text-secondary" />
          </div>
          
          <img :src="item.image + '?auto=format&fit=crop&w=1200'" class="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-1000 grayscale" />
          
          <div class="relative z-10 space-y-4">
            <span class="text-[10px] font-black uppercase tracking-widest text-secondary">Deployment Active</span>
            <h3 class="text-3xl font-black uppercase tracking-tighter">{{ item.title }}</h3>
            <button class="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
              View Stats <ChevronRight :size="12" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Activity, ChevronRight } from 'lucide-vue-next'
defineProps<{ items: any[] }>()
</script>
