<template>
  <section class="py-16 md:py-48 bg-primary text-white px-6 md:px-24 border-y border-white/5">
    <div class="max-w-7xl mx-auto space-y-8 md:space-y-12">
      <div v-for="(tier, idx) in tiers" :key="idx" class="group flex flex-col md:flex-row items-center justify-between p-8 md:p-16 bg-white/[0.02] border-2 border-white/10 rounded-2xl md:rounded-[4rem] hover:border-background transition-all duration-1000 relative overflow-hidden text-center md:text-left">
        <!-- Floating material texture background on hover -->
        <div class="absolute inset-0 bg-background/5 -translate-y-full group-hover:translate-y-0 transition-transform duration-1000 ease-expo"></div>
        
        <div class="z-10 space-y-4 md:space-y-6">
          <h3 class="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] md:tracking-[1em] text-accent italic">Structural_Scale_0{{ idx + 1 }}</h3>
          <p class="text-xl md:text-2xl font-light opacity-40 max-w-sm italic uppercase">{{ tier.features.join(' + ') }}</p>
        </div>
        <div v-for="i in 1" :key="i" class="mt-8 md:mt-0 text-center md:text-right z-10 space-y-6 md:space-y-8">
          <p class="text-6xl sm:text-8xl md:text-[12vw] font-black tracking-tighter leading-none italic group-hover:translate-x-[-20px] transition-transform duration-700">{{ tier.price }}</p>
          <button class="px-8 md:px-16 py-4 md:py-6 bg-background text-primary font-black uppercase tracking-widest text-[10px] md:text-xs rounded-full hover:bg-white transition-colors">Initiate_Process</button>
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
