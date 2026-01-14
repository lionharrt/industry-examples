<template>
  <section class="py-48 bg-[#FAF9F6] text-background px-12 md:px-24">
    <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-background/5 border border-background/5 shadow-2xl bg-white overflow-hidden rounded-[2rem]">
      <div v-for="(tier, idx) in tiers" :key="idx" class="p-24 bg-white hover:bg-background group transition-all duration-1000 flex flex-col justify-between h-[70vh]">
        <div class="space-y-16">
          <h3 class="text-xs font-black uppercase tracking-[1em] text-accent italic">RETAINER_MODALITY_0{{ idx + 1 }}</h3>
          <p class="text-[8vw] font-serif italic tracking-tighter leading-none group-hover:text-white transition-colors italic">{{ tier.price }}</p>
          <div class="space-y-12 pt-16 border-t border-background/5 group-hover:border-white/10 group-hover:text-white transition-all">
            <p class="text-4xl font-serif italic">{{ tier.name }}</p>
            <ul class="space-y-6">
              <li v-for="f in tier.features" :key="f" class="flex items-center gap-6 text-sm font-medium opacity-40 group-hover:opacity-100 transition-opacity italic">
                <div class="w-1 h-1 bg-accent rounded-full group-hover:scale-150 transition-transform"></div>
                {{ f }}
              </li>
            </ul>
          </div>
        </div>
        <button class="mt-24 w-full py-8 border border-background text-background font-black uppercase tracking-[0.5em] text-[10px] group-hover:border-accent group-hover:text-accent transition-all">INITIAL_CONSULT</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ tiers: any[] }>()
</script>
