<template>
  <section class="py-48 bg-background text-primary px-12 md:px-24">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="(service, idx) in services" 
          :key="idx" 
          class="service-card p-12 bg-white/[0.02] border border-white/5 rounded-[2rem] hover:bg-accent/10 hover:border-accent/50 transition-all duration-700 group cursor-pointer"
        >
          <div class="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-12 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
            <component :is="service.icon" :size="32" class="text-secondary group-hover:text-primary transition-colors" />
          </div>
          <h3 class="text-3xl font-black uppercase tracking-tighter mb-6 group-hover:translate-x-2 transition-transform">{{ service.title }}</h3>
          <p class="text-primary/40 leading-relaxed font-medium group-hover:text-primary transition-colors">{{ service.description }}</p>
          <div class="mt-12 flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-secondary">
            <span>System Ready</span>
            <div class="h-px flex-1 bg-secondary/30"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import * as LucideIcons from 'lucide-vue-next'
defineProps<{ services: any[] }>()
</script>
