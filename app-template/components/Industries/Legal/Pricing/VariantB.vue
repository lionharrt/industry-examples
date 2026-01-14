<template>
  <section class="py-48 bg-background text-white px-12 md:px-24 border-y border-white/5">
    <div class="max-w-7xl mx-auto space-y-12">
      <div v-for="(tier, idx) in tiers" :key="idx" class="group relative flex flex-col md:flex-row items-center justify-between p-16 bg-white/[0.02] border border-white/10 hover:border-accent transition-all duration-1000 overflow-hidden shadow-2xl">
        <div class="absolute inset-0 bg-accent/5 -translate-x-full group-hover:translate-x-full transition-transform duration-[2000ms] pointer-events-none"></div>
        
        <div class="text-center md:text-left z-10 space-y-6">
          <h3 class="text-xs font-black uppercase tracking-[1em] text-accent italic">PREMIER_COUNSEL_0{{ idx + 1 }}</h3>
          <p class="text-2xl font-light opacity-40 max-w-sm italic tracking-tight group-hover:opacity-100 transition-opacity">{{ tier.features.join(' • ') }}</p>
        </div>
        <div class="mt-12 md:mt-0 text-center md:text-right z-10 space-y-8">
          <p class="text-[10vw] font-serif italic tracking-tighter leading-none group-hover:translate-x-[-20px] transition-transform duration-1000 italic">{{ tier.price }}</p>
          <button class="px-16 py-6 bg-accent text-background font-black uppercase tracking-[0.5em] text-xs hover:bg-white transition-all shadow-2xl">SECURE_RETAINER</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ tiers: any[] }>()
</script>
