<template>
  <section class="py-16 md:py-48 bg-background text-primary px-6 md:px-24">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 md:gap-12 items-stretch">
      <div v-for="(tier, idx) in tiers" :key="idx" class="flex-1 p-8 sm:p-10 md:p-16 bg-white/[0.03] rounded-2xl md:rounded-3xl border border-white/5 flex flex-col justify-between group hover:border-accent transition-all duration-700">
        <div>
          <h3 class="text-2xl md:text-3xl font-serif italic text-accent mb-6 md:mb-8">{{ tier.name }}</h3>
          <ul class="space-y-4 md:space-y-6">
            <li v-for="f in tier.features" :key="f" class="flex items-center gap-3 md:gap-4 text-primary/40 group-hover:text-primary transition-colors">
              <Check :size="14" class="text-secondary md:hidden" />
              <Check :size="16" class="text-secondary hidden md:block" />
              <span class="text-[10px] md:text-xs font-bold uppercase tracking-widest">{{ f }}</span>
            </li>
          </ul>
        </div>
        <div class="mt-10 md:mt-24">
          <p class="text-3xl sm:text-4xl md:text-5xl font-serif mb-6 md:mb-8">{{ tier.price }} <span class="text-[10px] md:text-xs uppercase tracking-widest text-primary/20">/ pp</span></p>
          <button class="w-full py-4 md:py-5 bg-accent text-black font-black uppercase tracking-widest text-[9px] md:text-[10px] rounded-full hover:bg-white transition-colors">Book Experience</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Check } from 'lucide-vue-next'
defineProps<{ tiers: any[] }>()
</script>
