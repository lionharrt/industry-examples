<template>
  <section class="py-48 bg-background text-primary px-12 md:px-24">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-stretch">
      <div v-for="(tier, idx) in tiers" :key="idx" class="flex-1 p-16 rounded-[4rem] border-4 border-white flex flex-col justify-between group relative overflow-hidden">
        <div class="absolute inset-0 bg-accent -translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-expo"></div>
        
        <div class="relative z-10">
          <h3 class="text-4xl font-black uppercase mb-12 group-hover:text-background transition-colors">{{ tier.name }}</h3>
          <div class="space-y-6">
            <div v-for="f in tier.features" :key="f" class="flex items-center gap-4 text-primary/40 group-hover:text-background transition-colors">
              <div class="w-4 h-4 rounded-full border-2 border-white group-hover:border-background"></div>
              <span class="text-[10px] font-black uppercase tracking-widest">{{ f }}</span>
            </div>
          </div>
        </div>
        
        <div class="relative z-10 mt-24">
          <p class="text-6xl font-black mb-8 group-hover:text-background transition-colors tracking-tighter">{{ tier.price }}</p>
          <button class="w-full py-6 bg-white text-background font-black uppercase tracking-widest text-xs group-hover:bg-background group-hover:text-primary transition-all">Go</button>
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
