<template>
  <section class="py-32 bg-background px-12">
    <div class="max-w-6xl mx-auto space-y-4">
      <div v-for="(tier, idx) in tiers" :key="idx" class="group p-12 bg-white/5 rounded-3xl flex items-center justify-between hover:bg-white/10 transition-all">
        <div>
          <h3 class="text-2xl font-bold uppercase tracking-widest mb-2">{{ tier.name }}</h3>
          <p class="text-primary/40">{{ tier.features.join(' • ') }}</p>
        </div>
        <div class="text-right">
          <p class="text-4xl font-black mb-4 group-hover:text-accent transition-colors">{{ tier.price }}</p>
          <button class="px-8 py-3 border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">Select</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ tiers: any[] }>()
</script>
