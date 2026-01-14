<template>
  <section class="py-48 bg-white text-background px-12 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      <div v-for="(member, idx) in team" :key="idx" class="group cursor-pointer">
        <div class="aspect-[3/4] relative overflow-hidden rounded-[3rem] mb-12 shadow-2xl">
          <img :src="member.image" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0" />
          <div class="absolute inset-0 bg-background/20 group-hover:opacity-0 transition-opacity"></div>
          <!-- Corner info -->
          <div class="absolute bottom-0 right-0 p-8 bg-white rounded-tl-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <Mail :size="24" />
          </div>
        </div>
        <div class="space-y-4">
          <h3 class="text-4xl font-bold uppercase tracking-tighter group-hover:italic transition-all">{{ member.name }}</h3>
          <div class="h-px w-12 bg-accent group-hover:w-full transition-all duration-700"></div>
          <p class="text-secondary text-xs font-black uppercase tracking-widest">{{ member.role }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Mail } from 'lucide-vue-next'
defineProps<{ team: any[] }>()
</script>
