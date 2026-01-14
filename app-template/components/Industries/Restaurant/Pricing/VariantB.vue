<template>
  <section class="py-48 bg-black text-primary px-6 md:px-24">
    <div class="max-w-7xl mx-auto">
      <div v-for="(tier, idx) in tiers" :key="idx" class="group flex flex-col md:flex-row items-center justify-between py-24 border-b border-white/10 hover:px-12 transition-all duration-700 cursor-pointer">
        <div class="flex items-center gap-12">
          <span class="text-primary/10 font-serif text-5xl italic">0{{ idx + 1 }}</span>
          <div>
            <h3 class="text-5xl font-serif group-hover:italic transition-all">{{ tier.name }}</h3>
            <p class="text-accent font-bold text-xs uppercase tracking-widest mt-2">{{ tier.features.join(' • ') }}</p>
          </div>
        </div>
        <div class="mt-12 md:mt-0 text-right">
          <p class="text-6xl font-serif text-primary mb-6">{{ tier.price }}</p>
          <div class="h-px w-0 bg-accent group-hover:w-full transition-all duration-700"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ tiers: any[] }>()
</script>
