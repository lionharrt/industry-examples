<template>
  <section class="py-48 bg-black text-primary px-12 md:px-24">
    <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border-2 border-white/10 shadow-2xl overflow-hidden">
      <div v-for="(tier, idx) in tiers" :key="idx" class="p-24 bg-black hover:bg-white hover:text-black transition-all duration-1000 flex flex-col justify-between group">
        <div class="space-y-16">
          <h3 class="text-xs font-black uppercase tracking-[1em] text-accent">Tier_0{{ idx + 1 }}</h3>
          <p class="text-[8vw] font-black tracking-tighter leading-none italic">{{ tier.name }}</p>
          <ul class="space-y-6 pt-16 border-t border-white/10 group-hover:border-black/10">
            <li v-for="f in tier.features" :key="f" class="text-xs font-black uppercase tracking-widest opacity-40 group-hover:opacity-100">{{ f }}</li>
          </ul>
        </div>
        <div class="mt-24">
          <p class="text-6xl font-black mb-12 tracking-tighter">{{ tier.price }}</p>
          <button class="w-full py-8 border-4 border-white group-hover:border-black font-black uppercase tracking-widest text-xs hover:bg-black hover:text-primary transition-all">Acquire</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ tiers: any[] }>()
</script>
