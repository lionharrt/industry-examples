<template>
  <section class="py-24 md:py-48 bg-background text-primary px-6 md:px-24 border-y border-white/5">
    <div class="max-w-7xl mx-auto space-y-8 md:space-y-12">
      <div v-for="(tier, idx) in tiers" :key="idx" class="group flex flex-col md:flex-row items-center justify-between p-8 md:p-16 bg-white/[0.02] border-2 border-white/5 rounded-[2rem] md:rounded-[4rem] hover:border-accent transition-all duration-1000 relative overflow-hidden">
        <!-- Floating light effect on hover -->
        <div class="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 hidden md:block"></div>
        
        <div class="text-center md:text-left z-10 space-y-4">
          <h3 class="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] md:tracking-[1em] text-accent italic">{{ tier.name }} Advisory</h3>
          <p class="text-base md:text-xl font-medium opacity-40 max-w-sm">{{ tier.features.join(' • ') }}</p>
        </div>
        <div class="mt-8 md:mt-0 text-center md:text-right z-10">
          <p class="text-5xl md:text-[10vw] font-black tracking-tighter leading-none group-hover:italic transition-all">{{ tier.price }}</p>
          <button class="mt-8 px-10 md:px-12 py-3 md:py-4 bg-white text-background font-black uppercase tracking-widest text-[10px] rounded-full hover:bg-accent transition-colors shadow-2xl">Start Search</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ tiers: any[] }>()
</script>
