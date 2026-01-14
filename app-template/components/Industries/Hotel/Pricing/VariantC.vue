<template>
  <section class="py-48 bg-background text-primary px-12 md:px-24">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-stretch">
      <div v-for="(tier, idx) in tiers" :key="idx" class="flex-1 p-16 bg-background border border-primary/5 rounded-[6rem] flex flex-col justify-between group hover:bg-white hover:shadow-[0_50px_150px_rgba(0,0,0,0.1)] transition-all duration-1000 relative overflow-hidden">
        <div class="space-y-16">
          <div class="flex justify-between items-center">
            <h3 class="text-5xl font-serif italic tracking-tighter">{{ tier.name }}</h3>
            <div class="w-16 h-16 rounded-full bg-background border border-primary/10 flex items-center justify-center text-[10px] font-black group-hover:bg-accent group-hover:text-white transition-all">STAY</div>
          </div>
          <ul class="space-y-8 pt-12 border-t border-primary/5">
            <li v-for="f in tier.features" :key="f" class="flex items-start gap-6 text-lg font-light italic text-primary/40 group-hover:text-primary transition-colors">
              <div class="w-px h-8 bg-accent group-hover:h-12 transition-all"></div>
              {{ f }}
            </li>
          </ul>
        </div>
        <div class="mt-32">
          <p class="text-xs font-black uppercase tracking-[0.5em] text-secondary mb-4">Starting_From</p>
          <p class="text-[7vw] font-serif italic tracking-tighter mb-12 shadow-sm leading-none">{{ tier.price }}</p>
          <button class="w-full py-8 bg-primary text-white font-black uppercase tracking-widest text-[10px] rounded-full hover:bg-accent transition-all shadow-xl">Begin_Inquiry</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ tiers: any[] }>()
</script>
