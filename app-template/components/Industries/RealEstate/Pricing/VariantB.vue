<template>
  <section class="py-48 bg-background text-primary px-12 md:px-24 border-y border-white/5">
    <div class="max-w-7xl mx-auto space-y-12">
      <div v-for="(tier, idx) in tiers" :key="idx" class="group flex flex-col md:flex-row items-center justify-between p-16 bg-white/[0.02] border-2 border-white/5 rounded-[4rem] hover:border-accent transition-all duration-1000 relative overflow-hidden">
        <!-- Floating light effect on hover -->
        <div class="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        
        <div class="text-center md:text-left z-10">
          <h3 class="text-xs font-black uppercase tracking-[1em] text-accent mb-4 italic">{{ tier.name }} Advisory</h3>
          <p class="text-xl font-medium opacity-40 max-w-sm">{{ tier.features.join(' • ') }}</p>
        </div>
        <div class="mt-12 md:mt-0 text-center md:text-right z-10">
          <p class="text-[10vw] font-black tracking-tighter leading-none group-hover:italic transition-all">{{ tier.price }}</p>
          <button class="mt-8 px-12 py-4 bg-white text-background font-black uppercase tracking-widest text-[10px] rounded-full hover:bg-accent transition-colors shadow-2xl">Start Search</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ tiers: any[] }>()
</script>
