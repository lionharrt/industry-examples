<template>
  <section class="py-16 md:py-32 bg-secondary text-background px-6 md:px-24">
    <div class="max-w-6xl mx-auto space-y-6 md:space-y-8">
      <div v-for="(tier, idx) in tiers" :key="idx" class="group relative flex flex-col md:flex-row items-stretch justify-between bg-background text-primary border-4 md:border-8 border-background hover:bg-accent hover:text-background transition-all duration-700 shadow-xl">
        <div class="p-6 md:p-12 flex-1 border-b-4 md:border-b-0 md:border-r-4 border-background/10 group-hover:border-background/20 transition-colors">
          <h3 class="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-3 italic leading-none">{{ tier.name }}</h3>
          <div class="flex flex-wrap gap-3 pt-3">
            <span v-for="f in tier.features" :key="f" class="px-2 py-1 bg-primary text-background group-hover:bg-background group-hover:text-accent text-[10px] font-black uppercase transition-colors">{{ f }}</span>
          </div>
        </div>
        <div class="p-6 md:p-12 flex flex-col items-center md:items-end justify-center min-w-[240px]">
          <p class="text-5xl md:text-7xl font-black leading-none mb-4 md:mb-6 tracking-tighter">{{ tier.price }}</p>
          <button class="w-full md:w-auto px-10 py-3 bg-primary text-background group-hover:bg-background group-hover:text-accent font-black uppercase text-[10px] md:text-xs tracking-widest transition-all">Launch Project</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ tiers: any[] }>()
</script>
