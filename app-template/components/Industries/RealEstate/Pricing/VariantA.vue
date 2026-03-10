<template>
  <section class="py-24 md:py-48 bg-background text-primary px-6 md:px-24">
    <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-primary/10 border border-primary/10 rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-2xl">
      <div v-for="(tier, idx) in tiers" :key="idx" class="p-8 md:p-24 bg-background hover:bg-primary hover:text-background transition-all duration-1000 flex flex-col justify-between border border-primary/5 group">
        <div class="space-y-12 md:space-y-16">
          <h3 class="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] md:tracking-[1em] text-accent/60 group-hover:text-accent transition-colors">Tier_0{{ idx + 1 }}</h3>
          <p class="text-5xl md:text-8xl font-bold tracking-tighter leading-none italic group-hover:translate-x-4 transition-transform">{{ tier.price }}</p>
          <div class="space-y-6 md:space-y-8 pt-12 md:pt-16 border-t border-primary/10 group-hover:border-background/10">
            <p class="text-xl md:text-2xl font-bold uppercase italic">{{ tier.name }}</p>
            <ul class="space-y-4 md:space-y-6">
              <li v-for="f in tier.features" :key="f" class="flex items-center gap-4 text-sm font-medium opacity-40 group-hover:opacity-100">
                <div class="w-1.5 h-1.5 bg-accent rounded-full group-hover:bg-background transition-colors"></div>
                {{ f }}
              </li>
            </ul>
          </div>
        </div>
        <button class="mt-12 md:mt-24 w-full py-4 md:py-6 border-2 border-primary/20 text-primary font-black uppercase tracking-widest text-[10px] group-hover:bg-background group-hover:text-primary group-hover:border-background transition-all">Schedule Consultation</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ tiers: any[] }>()
</script>
