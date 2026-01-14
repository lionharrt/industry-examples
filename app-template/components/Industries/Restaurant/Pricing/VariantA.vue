<template>
  <section class="py-48 bg-background text-primary px-6 md:px-24">
    <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-[4rem] overflow-hidden shadow-2xl">
      <div v-for="(tier, idx) in tiers" :key="idx" class="p-24 bg-background hover:bg-white/[0.02] transition-colors flex flex-col items-center text-center">
        <h3 class="text-accent text-xs font-black uppercase tracking-[0.5em] mb-16">{{ tier.name }} Experience</h3>
        <p class="text-8xl font-serif italic text-primary mb-16 leading-none">{{ tier.price }}</p>
        <div class="space-y-6 mb-24 flex flex-col items-center">
          <div v-for="f in tier.features" :key="f" class="flex items-center gap-4">
            <div class="w-1 h-1 bg-accent rounded-full"></div>
            <p class="text-xs font-bold uppercase tracking-widest text-primary/40">{{ f }}</p>
          </div>
        </div>
        <button class="w-full py-6 border border-accent text-accent font-black uppercase tracking-widest text-[10px] hover:bg-accent hover:text-black transition-all">
          Reserve Table
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ tiers: any[] }>()
</script>
