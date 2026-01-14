<template>
  <section class="py-32 bg-background px-12">
    <div class="max-w-6xl mx-auto grid grid-cols-2 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10">
      <div v-for="(tier, idx) in tiers" :key="idx" class="p-16 bg-background hover:bg-white/5 transition-colors flex flex-col items-center text-center">
        <h3 class="text-xs font-black uppercase tracking-[0.5em] mb-12 text-accent">{{ tier.name }}</h3>
        <p class="text-7xl font-black mb-12 leading-none">{{ tier.price }}</p>
        <ul class="space-y-6 mb-16 text-primary/40 text-sm uppercase tracking-widest font-bold">
          <li v-for="f in tier.features" :key="f">{{ f }}</li>
        </ul>
        <button class="w-full py-6 border border-white text-white font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all">Inquire</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ tiers: any[] }>()
</script>
