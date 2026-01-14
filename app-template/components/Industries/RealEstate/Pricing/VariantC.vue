<template>
  <section class="py-48 bg-white text-background px-12 md:px-24">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-stretch">
      <div v-for="(tier, idx) in tiers" :key="idx" class="flex-1 p-16 bg-gray-50 border border-gray-100 rounded-[4rem] flex flex-col justify-between group hover:bg-white hover:shadow-[0_50px_100px_rgba(0,0,0,0.1)] transition-all duration-1000">
        <div class="space-y-16">
          <div class="flex justify-between items-center">
            <h3 class="text-4xl font-bold uppercase tracking-tighter italic">{{ tier.name }}</h3>
            <div class="w-12 h-px bg-accent group-hover:w-24 transition-all duration-700"></div>
          </div>
          <ul class="space-y-8">
            <li v-for="f in tier.features" :key="f" class="flex items-start gap-6 text-lg font-medium text-secondary group-hover:text-background transition-colors">
              <Check :size="20" class="text-accent mt-1" />
              {{ f }}
            </li>
          </ul>
        </div>
        <div class="mt-32">
          <p class="text-xs font-black uppercase tracking-[0.5em] text-secondary mb-4">Advisory Fee</p>
          <p class="text-7xl font-bold tracking-tighter mb-12 shadow-sm">{{ tier.price }}</p>
          <button class="w-full py-6 bg-background text-primary font-black uppercase tracking-widest text-xs rounded-[2rem] hover:bg-accent hover:text-background transition-all">Secure_Advisor</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Check } from 'lucide-vue-next'
defineProps<{ tiers: any[] }>()
</script>
