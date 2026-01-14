<template>
  <section class="py-48 bg-secondary text-background px-12 md:px-24">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-stretch">
      <div v-for="(tier, idx) in tiers" :key="idx" class="flex-1 p-16 bg-white border border-background/10 flex flex-col justify-between group hover:bg-background hover:text-white transition-all duration-1000 shadow-2xl relative overflow-hidden">
        <div class="absolute -top-12 -right-12 text-9xl font-serif italic opacity-[0.02] group-hover:text-accent transition-colors italic">S</div>
        <div class="space-y-16 relative z-10">
          <div class="flex justify-between items-center">
            <h3 class="text-5xl font-serif italic tracking-tighter leading-none uppercase italic">{{ tier.name }}</h3>
            <div class="w-16 h-16 rounded-full border border-accent flex items-center justify-center text-[10px] font-black group-hover:bg-accent group-hover:text-background transition-all italic">LAW</div>
          </div>
          <ul class="space-y-8 pt-12 border-t border-background/10 group-hover:border-white/10">
            <li v-for="f in tier.features" :key="f" class="flex items-center gap-6 text-xl font-light italic opacity-40 group-hover:opacity-100 transition-all italic">
              <div class="w-1 h-1 bg-accent group-hover:w-4 transition-all"></div>
              {{ f }}
            </li>
          </ul>
        </div>
        <div class="mt-32 relative z-10">
          <p class="text-xs font-black uppercase tracking-[0.5em] opacity-40 mb-4 italic italic">CONFIDENTIAL_PRICING</p>
          <p class="text-[7vw] font-serif italic tracking-tighter mb-12 shadow-sm italic leading-none">{{ tier.price }}</p>
          <button class="w-full py-10 bg-background text-accent border border-accent font-black uppercase tracking-[0.5em] text-[10px] group-hover:bg-accent group-hover:text-background transition-all shadow-2xl">ENGAGE_COUNSEL</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ tiers: any[] }>()
</script>
