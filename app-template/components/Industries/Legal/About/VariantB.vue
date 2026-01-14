<template>
  <section class="py-48 bg-white text-background px-12 md:px-24">
    <div class="max-w-7xl mx-auto space-y-24">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
        <div class="lg:col-span-8">
          <h2 class="text-[8vw] font-serif italic leading-[0.9] tracking-tighter uppercase mb-12">
            Built on <br/> <span class="text-accent">Integrity</span>
          </h2>
          <p class="text-3xl font-light italic leading-relaxed max-w-3xl">
            {{ content }}
          </p>
        </div>
        <div class="lg:col-span-4 space-y-12">
          <div v-for="stat in stats" :key="stat.label" class="p-8 bg-secondary border-l-4 border-accent flex flex-col justify-between aspect-square group hover:bg-background hover:text-white transition-all duration-700">
            <span class="text-[10px] font-black uppercase tracking-widest opacity-40 group-hover:text-accent">{{ stat.label }}</span>
            <p class="text-6xl font-serif italic tracking-tighter">{{ stat.value }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string, content: string, stats: any[] }>()
</script>
