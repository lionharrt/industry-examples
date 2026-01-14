<template>
  <section class="py-48 bg-background text-primary px-12 md:px-24">
    <div class="max-w-7xl mx-auto space-y-24">
      <div 
        v-for="(item, idx) in items" 
        :key="idx" 
        class="group grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-center"
      >
        <div class="md:col-span-7 aspect-video relative rounded-3xl overflow-hidden border border-white/10" :class="{ 'md:order-2': idx % 2 === 1 }">
          <ParallaxImage :src="item.image + '?auto=format&fit=crop&w=1600'" speed="0.05" />
          <div class="absolute inset-0 bg-accent/10 mix-blend-overlay group-hover:opacity-0 transition-opacity"></div>
        </div>
        <div class="md:col-span-5 space-y-8" :class="{ 'md:text-right': idx % 2 === 1 }">
          <span class="text-xs font-black uppercase tracking-[0.5em] text-secondary">Node 0{{ idx + 1 }}</span>
          <h3 class="text-5xl font-black uppercase tracking-tighter group-hover:text-accent transition-colors">{{ item.title }}</h3>
          <p class="text-primary/40 font-medium leading-relaxed">
            Scalable architecture for the next generation of digital products. High-performance, low-latency, mission-critical infrastructure.
          </p>
          <div class="flex flex-wrap gap-4" :class="{ 'md:justify-end': idx % 2 === 1 }">
            <span v-for="tag in ['AWS', 'Edge', 'GraphQL']" :key="tag" class="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-primary/40">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ items: any[] }>()
</script>
