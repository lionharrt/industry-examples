<template>
  <section class="py-48 bg-accent text-black px-12 md:px-24">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-stretch">
      <div v-for="(tier, idx) in tiers" :key="idx" class="flex-1 p-16 bg-black text-primary hover:bg-white hover:text-black transition-all duration-700 border-8 border-black group relative overflow-hidden">
        <div class="absolute -top-8 -right-8 text-9xl font-black italic opacity-10 group-hover:opacity-100 group-hover:text-accent transition-opacity">MAX</div>
        
        <div class="space-y-16 relative z-10">
          <div class="flex justify-between items-center">
            <h3 class="text-5xl font-black italic uppercase tracking-tighter leading-none">{{ tier.name }}</h3>
            <div class="w-16 h-16 rounded-full bg-accent text-black flex items-center justify-center font-black italic">PRO</div>
          </div>
          <ul class="space-y-8 pt-12 border-t-4 border-white/10 group-hover:border-black/10">
            <li v-for="f in tier.features" :key="f" class="flex items-center gap-6 text-2xl font-black italic uppercase group-hover:translate-x-4 transition-transform">
              <div class="w-8 h-2 bg-accent group-hover:bg-black transition-colors"></div>
              {{ f }}
            </li>
          </ul>
        </div>

        <div class="mt-32 relative z-10">
          <p class="text-xs font-black uppercase tracking-[0.5em] opacity-40 mb-4 italic">BILLING_CYCLED_MONTHLY</p>
          <p class="text-[8vw] font-black italic uppercase leading-none tracking-tighter mb-12 shadow-sm">{{ tier.price }}</p>
          <button class="w-full py-10 bg-accent text-black font-black uppercase italic tracking-[0.5em] text-2xl group-hover:bg-black group-hover:text-accent transition-all shadow-2xl">INITIATE_TRAINING</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ tiers: any[] }>()
</script>
