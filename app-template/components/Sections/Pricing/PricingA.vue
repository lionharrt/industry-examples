<template>
  <section class="py-32 bg-background px-12">
    <div class="max-w-4xl mx-auto">
      <div class="grid grid-cols-2 gap-8">
        <div v-for="(tier, idx) in tiers" :key="idx" class="p-12 border border-white/10 rounded-3xl text-center hover:bg-white/5 transition-all">
          <h3 class="text-xl font-bold uppercase tracking-widest mb-4 text-accent">{{ tier.name }}</h3>
          <p class="text-5xl font-black mb-8">{{ tier.price }}</p>
          <ul class="space-y-4 mb-12 text-primary/60">
            <li v-for="f in tier.features" :key="f">{{ f }}</li>
          </ul>
          <button class="w-full py-4 bg-white text-black font-bold uppercase tracking-widest rounded-full hover:bg-accent transition-colors">Book Now</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ tiers: any[] }>()
</script>
