<template>
  <section class="py-48 bg-white text-background px-12 md:px-24">
    <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100 border border-gray-100 rounded-[4rem] overflow-hidden shadow-2xl">
      <div v-for="(tier, idx) in tiers" :key="idx" class="p-24 bg-white hover:bg-background hover:text-primary transition-all duration-1000 flex flex-col justify-between border border-gray-50 group">
        <div class="space-y-16">
          <h3 class="text-xs font-black uppercase tracking-[1em] text-secondary group-hover:text-accent transition-colors">Tier_0{{ idx + 1 }}</h3>
          <p class="text-8xl font-bold tracking-tighter leading-none italic group-hover:translate-x-4 transition-transform">{{ tier.price }}</p>
          <div class="space-y-8 pt-16 border-t border-gray-100 group-hover:border-white/10">
            <p class="text-2xl font-bold uppercase italic">{{ tier.name }}</p>
            <ul class="space-y-6">
              <li v-for="f in tier.features" :key="f" class="flex items-center gap-4 text-sm font-medium opacity-40 group-hover:opacity-100">
                <div class="w-1.5 h-1.5 bg-accent rounded-full"></div>
                {{ f }}
              </li>
            </ul>
          </div>
        </div>
        <button class="mt-24 w-full py-6 border-2 border-background text-background font-black uppercase tracking-widest text-[10px] group-hover:bg-white group-hover:border-white transition-all">Schedule Consultation</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ tiers: any[] }>()
</script>
