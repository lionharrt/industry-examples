<template>
  <section class="py-16 md:py-32 bg-background text-primary px-6 md:px-24">
    <div class="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 md:gap-8 items-stretch relative z-10">
      <div v-for="(tier, idx) in tiers" :key="idx" class="flex-1 p-6 md:p-10 rounded-2xl md:rounded-[3rem] border-4 md:border-8 border-white flex flex-col justify-between group relative overflow-hidden bg-white/5 shadow-xl">
        <div class="absolute inset-0 bg-accent -translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-expo"></div>
        
        <div class="relative z-10">
          <div class="flex justify-between items-start mb-8 md:mb-12">
            <h3 class="text-3xl md:text-4xl font-black uppercase group-hover:text-background transition-colors leading-none italic">{{ tier.name }}</h3>
            <div class="text-[10px] font-black uppercase tracking-widest group-hover:text-background opacity-40">0{{ idx + 1 }}</div>
          </div>
          <div class="space-y-3 md:space-y-4">
            <div v-for="f in tier.features" :key="f" class="flex items-center gap-3 text-primary group-hover:text-background transition-colors border-b border-white/10 pb-3">
              <span class="text-[10px] font-black uppercase tracking-widest">{{ f }}</span>
            </div>
          </div>
        </div>
        
        <div class="relative z-10 mt-12 md:mt-20">
          <p class="text-5xl md:text-7xl font-black mb-6 md:mb-8 group-hover:text-background transition-colors tracking-tighter leading-none">{{ tier.price }}</p>
          <button class="w-full py-4 bg-primary text-background font-black uppercase tracking-widest text-[10px] group-hover:bg-background group-hover:text-accent transition-all border-2 md:border-4 border-primary">EXPLORE_PLAN</button>
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
