<template>
  <section class="py-48 bg-background text-primary px-12 md:px-24 border-y border-white/5">
    <div class="max-w-7xl mx-auto space-y-12">
      <div 
        v-for="(service, idx) in services" 
        :key="idx" 
        class="group flex flex-col md:flex-row items-center justify-between p-12 md:p-24 rounded-[4rem] hover:bg-gradient-to-r from-transparent via-accent/5 to-transparent transition-all duration-1000"
      >
        <div class="flex items-center gap-12 md:w-1/2">
          <span class="text-xs font-black uppercase tracking-[1em] text-primary/10 group-hover:text-accent transition-colors">0{{ idx + 1 }}</span>
          <h3 class="text-5xl md:text-7xl font-black uppercase tracking-tighter group-hover:italic transition-all">{{ service.title }}</h3>
        </div>
        <div class="mt-12 md:mt-0 md:w-1/3 space-y-8">
          <p class="text-xl text-primary/40 leading-relaxed group-hover:text-primary transition-colors">
            {{ service.description }}
          </p>
          <button class="flex items-center gap-4 px-8 py-4 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all group-hover:border-secondary">
            <span class="text-[10px] font-black uppercase tracking-widest">Connect API</span>
            <ArrowRight :size="16" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
defineProps<{ services: any[] }>()
</script>
