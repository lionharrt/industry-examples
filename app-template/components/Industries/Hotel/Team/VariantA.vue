<template>
  <section class="py-48 bg-background text-primary px-12 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
      <div v-for="(member, idx) in team" :key="idx" class="group cursor-pointer">
        <div class="aspect-[3/4] relative overflow-hidden rounded-[4rem] mb-8 shadow-2xl bg-white p-4">
          <div class="w-full h-full rounded-[3rem] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000">
            <img :src="member.image" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
          </div>
          <div class="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
        <div class="text-center space-y-2">
          <h3 class="text-3xl font-serif italic">{{ member.name }}</h3>
          <p class="text-accent text-[10px] font-black uppercase tracking-[0.5em] opacity-60 group-hover:opacity-100 transition-opacity">{{ member.role }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ team: any[] }>()
</script>
