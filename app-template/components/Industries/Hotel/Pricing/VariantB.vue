<template>
  <section class="py-16 md:py-48 bg-primary text-white px-6 md:px-24 border-y border-white/5">
    <div class="max-w-7xl mx-auto space-y-8 md:space-y-12">
      <div v-for="(tier, idx) in tiers" :key="idx" class="group flex flex-col lg:flex-row items-center justify-between p-8 md:p-16 bg-white/[0.02] border-2 border-white/10 rounded-3xl md:rounded-[5rem] hover:border-background transition-all duration-1000 relative overflow-hidden text-center lg:text-left">
        <!-- Soft light drift on hover -->
        <div class="absolute inset-0 bg-background/5 -translate-x-full group-hover:translate-x-full transition-transform duration-[2000ms]"></div>
        
        <div class="text-center lg:text-left z-10 space-y-4 md:space-y-6">
          <h3 class="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] md:tracking-[1em] text-accent italic leading-none">The_Escape_Level_0{{ idx + 1 }}</h3>
          <p class="text-lg md:text-2xl font-light opacity-40 max-w-sm italic tracking-tight leading-relaxed">{{ tier.features.join(' • ') }}</p>
        </div>
        <div class="mt-8 lg:mt-0 text-center lg:text-right z-10 space-y-6 md:space-y-8 flex flex-col items-center lg:items-end">
          <p class="text-6xl sm:text-8xl md:text-[10vw] font-serif italic tracking-tighter leading-none lg:group-hover:translate-x-[-20px] transition-transform duration-1000">{{ tier.price?.split('/')[0] }}</p>
          <button class="px-8 md:px-16 py-4 md:py-6 bg-background text-primary font-black uppercase tracking-widest text-[10px] md:text-xs rounded-full hover:bg-white transition-all">Secure_Stay</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ tiers: any[] }>()
</script>
