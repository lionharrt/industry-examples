<template>
  <section class="py-48 bg-background text-primary px-12 md:px-24">
    <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-background/20 border border-background/20 rounded-[5rem] overflow-hidden shadow-2xl bg-white">
      <div v-for="(tier, idx) in tiers" :key="idx" class="p-24 bg-white hover:bg-background transition-all duration-1000 flex flex-col justify-between border border-background group">
        <div class="space-y-16">
          <h3 class="text-xs font-black uppercase tracking-[1em] text-accent group-hover:translate-x-2 transition-transform italic">Experience_0{{ idx + 1 }}</h3>
          <p class="text-[8vw] font-serif italic tracking-tighter leading-none group-hover:translate-x-4 transition-transform">{{ tier.price?.split('/')[0] }}<span class="text-xl font-black uppercase tracking-widest text-secondary">/ nt</span></p>
          <div class="space-y-12 pt-16 border-t border-background">
            <p class="text-4xl font-serif italic">{{ tier.name }}</p>
            <ul class="space-y-6">
              <li v-for="f in tier.features" :key="f" class="flex items-center gap-6 text-sm font-medium opacity-40 group-hover:opacity-100 transition-opacity">
                <div class="w-1 h-1 bg-accent rounded-full group-hover:scale-150 transition-transform"></div>
                {{ f }}
              </li>
            </ul>
          </div>
        </div>
        <button class="mt-24 w-full py-8 border-2 border-primary text-primary font-black uppercase tracking-widest text-[10px] rounded-full hover:bg-accent hover:border-accent hover:text-white transition-all">Check_Availability</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ tiers: any[] }>()
</script>
