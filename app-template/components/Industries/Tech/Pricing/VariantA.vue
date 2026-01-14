<template>
  <section class="py-48 bg-background text-primary px-12 md:px-24">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(106,13,173,0.2)]">
      <div v-for="(tier, idx) in tiers" :key="idx" class="p-24 bg-background hover:bg-[#161B22] transition-all duration-700 flex flex-col justify-between border border-white/5 group">
        <div class="space-y-12">
          <div class="flex justify-between items-center">
            <h3 class="text-xs font-black uppercase tracking-[0.5em] text-secondary">{{ tier.name }}</h3>
            <div v-if="idx === 1" class="px-4 py-1 bg-accent rounded-full text-[8px] font-black uppercase tracking-widest">Scalable</div>
          </div>
          <p class="text-8xl font-black tracking-tighter leading-none italic">{{ tier.price }}</p>
          <ul class="space-y-6">
            <li v-for="f in tier.features" :key="f" class="flex items-center gap-4 text-primary/40 group-hover:text-primary transition-colors">
              <div class="w-1.5 h-1.5 bg-accent rounded-full"></div>
              <span class="text-xs font-bold uppercase tracking-widest">{{ f }}</span>
            </li>
          </ul>
        </div>
        <button class="mt-24 w-full py-6 bg-white text-black font-black uppercase tracking-[0.3em] text-[10px] rounded-xl hover:bg-accent hover:text-primary transition-all">Select Node</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ tiers: any[] }>()
</script>
