<template>
  <section class="py-24 md:py-48 bg-background text-primary px-6 md:px-24">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-stretch">
      <div v-for="(tier, idx) in tiers" :key="idx" class="flex-1 p-8 md:p-16 bg-primary/5 border border-primary/10 rounded-[3rem] md:rounded-[4rem] flex flex-col justify-between group hover:bg-primary hover:text-background md:hover:shadow-[0_50px_100px_rgba(0,0,0,0.3)] transition-all duration-1000">
        <div class="space-y-12 md:space-y-16">
          <div class="flex justify-between items-center">
            <h3 class="text-2xl md:text-4xl font-bold uppercase tracking-tighter italic">{{ tier.name }}</h3>
            <div class="w-12 h-px bg-accent group-hover:bg-background group-hover:w-24 transition-all duration-700"></div>
          </div>
          <ul class="space-y-6 md:space-y-8">
            <li v-for="f in tier.features" :key="f" class="flex items-start gap-4 md:gap-6 text-base md:text-lg font-medium text-primary/60 group-hover:text-background transition-colors">
              <Check :size="18" class="text-accent group-hover:text-background mt-1 flex-shrink-0" />
              {{ f }}
            </li>
          </ul>
        </div>
        <div class="mt-16 md:mt-32">
          <p class="text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-primary/40 group-hover:text-background/40 mb-4">Advisory Fee</p>
          <p class="text-5xl md:text-7xl font-bold tracking-tighter mb-8 md:mb-12 shadow-sm">{{ tier.price }}</p>
          <button class="w-full py-4 md:py-6 bg-accent text-background font-black uppercase tracking-widest text-[10px] md:text-xs rounded-xl md:rounded-[2rem] hover:bg-background hover:text-primary transition-all">Secure_Advisor</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Check } from 'lucide-vue-next'
defineProps<{ tiers: any[] }>()
</script>
