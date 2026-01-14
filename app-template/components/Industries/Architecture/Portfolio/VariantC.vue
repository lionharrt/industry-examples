<template>
  <section class="py-48 bg-background text-primary px-12 md:px-24">
    <div class="max-w-7xl mx-auto space-y-48">
      <div 
        v-for="(item, idx) in items" 
        :key="idx" 
        class="group grid grid-cols-1 lg:grid-cols-12 gap-24 items-start"
      >
        <div class="lg:col-span-7 aspect-[4/5] relative rounded-[4rem] overflow-hidden shadow-2xl" :class="{ 'lg:order-2': idx % 2 === 1 }">
          <ParallaxImage :src="item.image + '?auto=format&fit=crop&w=1200'" speed="0.05" />
          <!-- Architectural dimension lines on hover -->
          <div class="absolute inset-0 border-x border-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
            <div class="absolute top-1/2 left-0 w-full h-px bg-black/10"></div>
          </div>
        </div>
        <div class="lg:col-span-5 space-y-12 pt-24" :class="{ 'lg:text-right': idx % 2 === 1 }">
          <div class="space-y-4">
            <span class="text-xs font-black uppercase tracking-[1em] text-accent">Archive_0{{ idx + 1 }}</span>
            <h3 class="text-7xl font-black uppercase tracking-tighter leading-none italic group-hover:translate-x-4 transition-transform duration-1000">{{ item.title }}</h3>
          </div>
          <p class="text-primary/60 text-2xl font-light leading-relaxed">
            Exploring the intersection of brutalist mass and atmospheric light. A testament to structural purity and geometric intent.
          </p>
          <div class="flex flex-wrap gap-8" :class="{ 'lg:justify-end': idx % 2 === 1 }">
            <div v-for="mat in ['CONCRETE', 'GLASS', 'STEEL']" :key="mat" class="px-6 py-2 border border-black/10 rounded-full text-[10px] font-black uppercase tracking-widest text-accent">{{ mat }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ items: any[] }>()
</script>
