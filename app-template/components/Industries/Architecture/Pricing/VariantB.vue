<template>
  <section class="py-48 bg-primary text-white px-12 md:px-24 border-y border-white/5">
    <div class="max-w-7xl mx-auto space-y-12">
      <div v-for="(tier, idx) in tiers" :key="idx" class="group flex flex-col md:flex-row items-center justify-between p-16 bg-white/[0.02] border-2 border-white/10 rounded-[4rem] hover:border-background transition-all duration-1000 relative overflow-hidden">
        <!-- Floating material texture background on hover -->
        <div class="absolute inset-0 bg-background/5 -translate-y-full group-hover:translate-y-0 transition-transform duration-1000 ease-expo"></div>
        
        <div class="text-center md:text-left z-10 space-y-6">
          <h3 class="text-xs font-black uppercase tracking-[1em] text-accent italic">Structural_Scale_0{{ idx + 1 }}</h3>
          <p class="text-2xl font-light opacity-40 max-w-sm italic">{{ tier.features.join(' + ') }}</p>
        </div>
        <div class="mt-12 md:mt-0 text-center md:text-right z-10 space-y-8">
          <p class="text-[12vw] font-black tracking-tighter leading-none italic group-hover:translate-x-[-20px] transition-transform duration-700 shadow-2xl">{{ tier.price }}</p>
          <button class="px-16 py-6 bg-background text-primary font-black uppercase tracking-widest text-xs rounded-full hover:bg-white transition-colors">Initiate_Process</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ tiers: any[] }>()
</script>

<style scoped>
.ease-expo { transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1); }
</style>
