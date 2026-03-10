<template>
  <section class="py-12 md:py-24 bg-background text-primary px-6 md:px-24">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 md:gap-8 items-stretch">
      <div v-for="(tier, idx) in tiers" :key="idx" class="flex-1 p-6 md:p-10 bg-secondary/10 border border-primary/10 flex flex-col justify-between group hover:bg-primary hover:text-background transition-all duration-1000 shadow-2xl relative overflow-hidden text-center md:text-left">
        <div class="absolute -top-12 -right-12 text-7xl md:text-8xl font-serif italic text-primary opacity-[0.02] group-hover:text-background transition-colors italic">S</div>
        <div class="space-y-8 md:space-y-12 relative z-10">
          <div class="flex justify-between items-center">
            <h3 class="text-2xl md:text-4xl font-serif italic tracking-tighter leading-none text-primary group-hover:text-background uppercase italic">{{ tier.name }}</h3>
            <div class="w-10 h-10 md:w-12 md:h-12 rounded-full border border-accent flex items-center justify-center text-[8px] md:text-[10px] font-black group-hover:bg-accent group-hover:text-background transition-all italic">LAW</div>
          </div>
          <ul class="space-y-4 md:space-y-6 pt-6 md:pt-10 border-t border-primary/10 group-hover:border-background/20">
            <li v-for="f in tier.features" :key="f" class="flex items-center gap-3 md:gap-4 text-base md:text-lg font-light italic text-primary opacity-40 group-hover:opacity-100 group-hover:text-background transition-all italic text-left">
              <div class="w-1 h-1 bg-accent group-hover:w-3 transition-all shrink-0"></div>
              {{ f }}
            </li>
          </ul>
        </div>
        <div class="mt-12 md:mt-24 relative z-10">
          <p class="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-primary opacity-40 mb-2 md:mb-4 italic">CONFIDENTIAL_PRICING</p>
          <p class="text-4xl sm:text-5xl md:text-6xl font-serif italic tracking-tighter text-primary group-hover:text-background mb-6 md:mb-8 shadow-sm italic leading-none transition-colors">{{ tier.price }}</p>
          <button class="w-full py-4 md:py-6 bg-primary text-background border border-accent font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] hover:bg-accent hover:text-primary transition-all shadow-2xl">ENGAGE_COUNSEL</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ tiers: any[] }>()
</script>
