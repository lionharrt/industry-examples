<template>
  <section class="py-48 bg-white text-black px-12 md:px-24 border-y-2 border-black">
    <div class="max-w-7xl mx-auto space-y-12">
      <div v-for="(tier, idx) in tiers" :key="idx" class="group flex flex-col md:flex-row items-center justify-between p-16 border-2 border-black hover:bg-accent hover:text-primary hover:border-accent transition-all duration-700 relative overflow-hidden">
        <div class="text-center md:text-left">
          <h3 class="text-7xl font-black uppercase tracking-tighter italic">{{ tier.name }}</h3>
          <p class="text-[10px] font-black uppercase tracking-[0.5em] mt-4 opacity-40 group-hover:opacity-100 transition-opacity">{{ tier.features.join(' • ') }}</p>
        </div>
        <div class="mt-12 md:mt-0 text-right">
          <p class="text-8xl font-black tracking-tighter mb-8">{{ tier.price }}</p>
          <div class="h-2 w-full bg-black group-hover:bg-white transition-colors duration-700"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ tiers: any[] }>()
</script>
