<template>
  <section class="py-48 bg-background text-primary px-12 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-[4rem] overflow-hidden">
      <div v-for="(tier, idx) in tiers" :key="idx" class="p-24 bg-background hover:bg-accent hover:text-background transition-all duration-700 flex flex-col justify-between group">
        <div class="space-y-12">
          <h3 class="text-[5vw] font-black uppercase tracking-tighter leading-none">{{ tier.name }}</h3>
          <ul class="space-y-4">
            <li v-for="f in tier.features" :key="f" class="flex items-center gap-4">
              <div class="w-2 h-2 bg-secondary group-hover:bg-background rounded-full"></div>
              <span class="text-xs font-black uppercase tracking-widest opacity-60 group-hover:opacity-100">{{ f }}</span>
            </li>
          </ul>
        </div>
        <div class="mt-24">
          <p class="text-8xl font-black mb-12 tracking-tighter">{{ tier.price }}</p>
          <button class="w-full py-8 border-[4px] border-white group-hover:border-background font-black uppercase tracking-widest text-sm hover:bg-background hover:text-primary transition-all">Start Now</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ tiers: any[] }>()
</script>
