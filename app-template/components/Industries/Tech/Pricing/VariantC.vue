<template>
  <section class="py-48 bg-background text-primary px-12 md:px-24">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
      <div v-for="(tier, idx) in tiers" :key="idx" class="flex-1 p-16 bg-[#161B22] border border-white/10 rounded-3xl flex flex-col justify-between group hover:shadow-[0_0_100px_rgba(106,13,173,0.3)] transition-all duration-1000">
        <div class="space-y-12">
          <div class="w-full h-1 bg-white/5 rounded-full overflow-hidden">
            <div class="h-full bg-accent w-0 group-hover:w-full transition-all duration-1000"></div>
          </div>
          <h3 class="text-2xl font-black uppercase tracking-widest text-secondary">{{ tier.name }}</h3>
          <ul class="space-y-6">
            <li v-for="f in tier.features" :key="f" class="flex items-center gap-4 text-sm font-medium text-primary/40 group-hover:text-primary transition-colors">
              <Zap :size="14" class="text-accent" />
              {{ f }}
            </li>
          </ul>
        </div>
        <div class="mt-24">
          <p class="text-6xl font-black tracking-tighter mb-8 italic">{{ tier.price }}</p>
          <button class="w-full py-6 bg-gradient-to-r from-accent to-secondary text-primary font-black uppercase tracking-widest text-xs rounded-xl shadow-xl hover:scale-105 transition-transform">Initialize</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Zap } from 'lucide-vue-next'
defineProps<{ tiers: any[] }>()
</script>
