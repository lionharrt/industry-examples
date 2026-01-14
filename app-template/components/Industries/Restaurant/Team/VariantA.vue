<template>
  <section class="py-48 bg-[#1A1A1A] text-white px-6 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      <div 
        v-for="(member, idx) in team" 
        :key="idx" 
        class="team-card group cursor-pointer"
      >
        <div class="relative aspect-[3/4] rounded-3xl overflow-hidden mb-8">
          <ParallaxImage :src="member.image" speed="0.05" />
          <div class="absolute inset-0 bg-[#A0522D]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
            <button class="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center scale-50 group-hover:scale-100 transition-transform duration-700">
              <Plus :size="24" />
            </button>
          </div>
        </div>
        <h3 class="text-3xl font-serif group-hover:italic transition-all">{{ member.name }}</h3>
        <p class="text-[#D4AF37] text-xs font-black uppercase tracking-[0.3em] mt-2">{{ member.role }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Plus } from 'lucide-vue-next'
defineProps<{ team: any[] }>()
</script>
