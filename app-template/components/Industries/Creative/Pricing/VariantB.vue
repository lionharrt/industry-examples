<template>
  <section class="py-48 bg-secondary text-background px-12 md:px-24">
    <div class="max-w-7xl mx-auto space-y-12">
      <div v-for="(tier, idx) in tiers" :key="idx" class="group flex flex-col md:flex-row items-center justify-between p-16 border-[8px] border-background rounded-[4rem] hover:bg-background hover:text-secondary transition-all duration-700">
        <div class="text-center md:text-left">
          <h3 class="text-6xl font-black uppercase tracking-tighter mb-4 italic">{{ tier.name }}</h3>
          <p class="text-xs font-black uppercase tracking-widest opacity-40">{{ tier.features.join(' + ') }}</p>
        </div>
        <div class="mt-12 md:mt-0 flex flex-col items-center md:items-end">
          <p class="text-8xl font-black leading-none mb-8 tracking-tighter">{{ tier.price }}</p>
          <button class="px-12 py-4 bg-background group-hover:bg-secondary text-secondary group-hover:text-background font-black uppercase text-xs tracking-widest transition-colors">Launch Project</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ tiers: any[] }>()
</script>
