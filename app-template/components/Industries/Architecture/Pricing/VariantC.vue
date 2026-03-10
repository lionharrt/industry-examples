<template>
  <section class="py-16 md:py-48 bg-background text-primary px-6 md:px-24">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-stretch">
      <div v-for="(tier, idx) in tiers" :key="idx" class="flex-1 p-8 md:p-16 bg-white border border-black/5 rounded-[2rem] md:rounded-[5rem] flex flex-col justify-between group hover:shadow-[0_100px_150px_rgba(0,0,0,0.1)] transition-all duration-1000 relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-2 bg-black/5 overflow-hidden">
          <div class="h-full bg-primary w-0 group-hover:w-full transition-all duration-1000"></div>
        </div>
        
        <div class="space-y-8 md:space-y-16 mt-4 md:mt-8">
          <div class="flex justify-between items-center">
            <h3 class="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter italic leading-none">{{ tier.name }}</h3>
            <div class="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-black/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
              <span class="text-[10px] md:text-xs font-black">0{{ idx + 1 }}</span>
            </div>
          </div>
          <ul class="space-y-4 md:space-y-8">
            <li v-for="f in tier.features" :key="f" class="flex items-start gap-4 md:gap-6 text-base md:text-lg font-black uppercase text-accent group-hover:text-primary transition-colors italic">
              <div class="w-2 h-2 rounded-full bg-primary mt-2 group-hover:scale-150 transition-transform"></div>
              {{ f }}
            </li>
          </ul>
        </div>
        <div class="mt-16 md:mt-32">
          <p class="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-accent mb-2 md:mb-4">Investment_Scale</p>
          <p class="text-4xl sm:text-6xl md:text-[6vw] font-black tracking-tighter mb-8 md:mb-12 leading-none italic">{{ tier.price }}</p>
          <button class="w-full py-6 md:py-8 border-2 md:border-4 border-primary text-primary font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-xs hover:bg-primary hover:text-white transition-all">Book_Advisory</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ tiers: any[] }>()
</script>
