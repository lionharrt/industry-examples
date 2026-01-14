<template>
  <section class="py-48 bg-background text-primary px-12 md:px-24">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-stretch">
      <div v-for="(tier, idx) in tiers" :key="idx" class="flex-1 p-16 bg-white border border-black/5 rounded-[5rem] flex flex-col justify-between group hover:shadow-[0_100px_150px_rgba(0,0,0,0.1)] transition-all duration-1000 relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-2 bg-black/5 overflow-hidden">
          <div class="h-full bg-primary w-0 group-hover:w-full transition-all duration-1000"></div>
        </div>
        
        <div class="space-y-16 mt-8">
          <div class="flex justify-between items-center">
            <h3 class="text-5xl font-black uppercase tracking-tighter italic">{{ tier.name }}</h3>
            <div class="w-16 h-16 rounded-full border-2 border-black/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
              <span class="text-xs font-black">0{{ idx + 1 }}</span>
            </div>
          </div>
          <ul class="space-y-8">
            <li v-for="f in tier.features" :key="f" class="flex items-start gap-6 text-lg font-medium text-accent group-hover:text-primary transition-colors">
              <div class="w-2 h-2 rounded-full bg-primary mt-2 group-hover:scale-150 transition-transform"></div>
              {{ f }}
            </li>
          </ul>
        </div>
        <div class="mt-32">
          <p class="text-xs font-black uppercase tracking-[0.5em] text-accent mb-4">Investment_Scale</p>
          <p class="text-[6vw] font-black tracking-tighter mb-12 shadow-sm leading-none italic">{{ tier.price }}</p>
          <button class="w-full py-8 border-4 border-primary text-primary font-black uppercase tracking-[0.5em] text-xs hover:bg-primary hover:text-white transition-all">Book_Advisory</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ tiers: any[] }>()
</script>
