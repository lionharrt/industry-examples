<template>
  <section class="py-16 md:py-48 bg-background text-primary px-6 md:px-24 border-y border-primary/10">
    <div class="max-w-7xl mx-auto space-y-8 md:space-y-12">
      <div v-for="(tier, idx) in tiers" :key="idx" class="group relative flex flex-col md:flex-row items-center justify-between p-8 md:p-16 bg-secondary/10 border border-primary/10 hover:border-accent transition-all duration-1000 overflow-hidden shadow-2xl text-center md:text-left">
        <div class="absolute inset-0 bg-accent/5 -translate-x-full group-hover:translate-x-full transition-transform duration-[2000ms] pointer-events-none"></div>
        
        <div class="z-10 space-y-4 md:space-y-6">
          <h3 class="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] md:tracking-[1em] text-accent italic leading-none">PREMIER_COUNSEL_0{{ idx + 1 }}</h3>
          <p class="text-lg md:text-2xl font-light text-primary opacity-40 max-w-sm italic tracking-tight group-hover:opacity-100 transition-opacity leading-relaxed">{{ tier.features.join(' • ') }}</p>
        </div>
        <div class="mt-12 md:mt-0 z-10 space-y-8 flex flex-col items-center md:items-end">
          <p class="text-6xl sm:text-8xl md:text-[10vw] font-serif italic tracking-tighter leading-none text-primary md:group-hover:translate-x-[-20px] transition-transform duration-1000 italic">{{ tier.price }}</p>
          <button class="px-8 md:px-16 py-4 md:py-6 bg-accent text-background font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-xs hover:bg-primary hover:text-background transition-all shadow-2xl">SECURE_RETAINER</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ tiers: any[] }>()
</script>
