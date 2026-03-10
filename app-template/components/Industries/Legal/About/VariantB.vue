<template>
  <section class="py-16 md:py-48 bg-background text-primary px-6 md:px-24">
    <div class="max-w-7xl mx-auto space-y-12 md:space-y-24">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24 items-start">
        <div class="lg:col-span-8">
          <h2 class="text-5xl sm:text-7xl md:text-[8vw] font-serif italic leading-[0.9] tracking-tighter uppercase mb-8 md:mb-12 text-primary">
            Built on <br/> <span class="text-accent">Integrity</span>
          </h2>
          <p class="text-xl sm:text-2xl md:text-3xl font-light italic leading-relaxed max-w-3xl text-primary/80">
            {{ content }}
          </p>
        </div>
        <div class="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 md:gap-12">
          <div v-for="stat in stats" :key="stat.label" class="p-8 bg-secondary border-l-4 border-accent flex flex-col justify-between aspect-square group hover:bg-primary hover:text-background transition-all duration-700">
            <span class="text-[10px] font-black uppercase tracking-widest text-primary opacity-40 group-hover:text-accent group-hover:opacity-100 transition-all">{{ stat.label }}</span>
            <p class="text-5xl md:text-6xl font-serif italic tracking-tighter text-primary group-hover:text-background transition-colors">{{ stat.value }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string, content: string, stats: any[] }>()
</script>
