<template>
  <section class="py-16 md:py-48 bg-black text-primary px-6 md:px-24">
    <div class="max-w-7xl mx-auto">
      <div v-for="(tier, idx) in tiers" :key="idx" class="group flex flex-col md:flex-row items-center justify-between py-8 md:py-24 border-b border-white/10 md:hover:px-12 transition-all duration-700 cursor-pointer gap-6 md:gap-0">
        <div class="flex items-center gap-6 md:gap-12 w-full md:w-auto">
          <span class="text-primary/10 font-serif text-3xl md:text-5xl italic">0{{ idx + 1 }}</span>
          <div class="text-center md:text-left flex-1">
            <h3 class="text-2xl sm:text-3xl md:text-5xl font-serif group-hover:italic transition-all">{{ tier.name }}</h3>
            <p class="text-accent font-bold text-[9px] md:text-xs uppercase tracking-widest mt-2">{{ tier.features.join(' • ') }}</p>
          </div>
        </div>
        <div class="text-center md:text-right w-full md:w-auto">
          <p class="text-4xl sm:text-5xl md:text-6xl font-serif text-primary mb-4 md:mb-6">{{ tier.price }}</p>
          <div class="h-px w-full md:w-0 bg-accent/30 md:bg-accent group-hover:w-full transition-all duration-700 mx-auto md:mx-0"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ tiers: any[] }>()
</script>
