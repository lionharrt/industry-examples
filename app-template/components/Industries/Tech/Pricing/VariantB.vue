<template>
  <section class="py-48 bg-background text-primary px-12 md:px-24">
    <div class="max-w-7xl mx-auto space-y-8">
      <div v-for="(tier, idx) in tiers" :key="idx" class="group flex flex-col md:flex-row items-center justify-between p-12 bg-white/[0.02] border border-white/10 rounded-[2rem] hover:border-secondary transition-all duration-700 relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
        
        <div class="relative z-10 flex items-center gap-12">
          <div class="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-2xl font-black text-accent">0{{ idx + 1 }}</div>
          <div>
            <h3 class="text-4xl font-black uppercase tracking-tighter">{{ tier.name }}</h3>
            <p class="text-[10px] font-black uppercase tracking-widest text-primary/20 mt-2">{{ tier.features.join(' // ') }}</p>
          </div>
        </div>
        
        <div class="relative z-10 mt-12 md:mt-0 flex items-center gap-12">
          <p class="text-5xl font-black tracking-tighter text-secondary">{{ tier.price }}</p>
          <button class="w-48 py-5 border-2 border-white/10 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-black transition-all">Deploy</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ tiers: any[] }>()
</script>
