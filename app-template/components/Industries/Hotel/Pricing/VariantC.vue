<template>
  <section class="py-16 md:py-48 bg-background text-primary px-6 md:px-24">
    <div class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 md:gap-12 items-stretch">
      <div v-for="(tier, idx) in tiers" :key="idx" class="flex-1 p-8 md:p-16 bg-background border border-primary/5 rounded-3xl md:rounded-[6rem] flex flex-col justify-between group hover:bg-white transition-all duration-1000 relative overflow-hidden text-center lg:text-left">
        <div class="space-y-8 md:space-y-16">
          <div class="flex justify-between items-center">
            <h3 class="text-3xl md:text-5xl font-serif italic tracking-tighter leading-none">{{ tier.name }}</h3>
            <div class="w-12 h-12 md:w-16 md:h-16 rounded-full bg-background border border-primary/10 flex items-center justify-center text-[8px] md:text-[10px] font-black group-hover:bg-accent group-hover:text-white transition-all">STAY</div>
          </div>
          <ul class="space-y-6 md:space-y-8 pt-8 md:pt-12 border-t border-primary/5">
            <li v-for="f in tier.features" :key="f" class="flex items-start gap-4 md:gap-6 text-base md:text-lg font-light italic text-primary/40 group-hover:text-primary transition-colors text-left">
              <div class="w-px h-6 md:h-8 bg-accent group-hover:h-10 md:group-hover:h-12 transition-all"></div>
              {{ f }}
            </li>
          </ul>
        </div>
        <div class="mt-16 md:mt-32">
          <p class="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-secondary mb-2 md:mb-4 leading-none">Starting_From</p>
          <p class="text-5xl sm:text-7xl md:text-[7vw] font-serif italic tracking-tighter mb-8 md:mb-12 leading-none">{{ tier.price }}</p>
          <button class="w-full py-4 md:py-8 bg-primary text-white font-black uppercase tracking-widest text-[10px] rounded-full hover:bg-accent transition-all">Begin_Inquiry</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ tiers: any[] }>()
</script>
