<template>
  <section class="py-48 bg-background text-primary px-12 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-black/5 border border-black/5 shadow-2xl rounded-[3rem] overflow-hidden">
      <div v-for="(member, idx) in team" :key="idx" class="group relative aspect-[3/4] bg-white p-12 flex flex-col justify-between hover:bg-primary hover:text-white transition-all duration-700 cursor-pointer">
        <div class="space-y-4">
          <span class="text-[10px] font-black uppercase tracking-widest text-accent">Principal / 0{{ idx + 1 }}</span>
          <h3 class="text-3xl font-black uppercase tracking-tighter leading-none italic group-hover:translate-x-2 transition-transform duration-500">{{ member.name }}</h3>
        </div>
        <div class="relative h-1/2 overflow-hidden rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700">
          <img :src="member.image" class="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" />
        </div>
        <p class="text-[10px] font-black uppercase tracking-[0.5em] text-accent group-hover:text-white/40 transition-colors">{{ member.role }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ team: any[] }>()
</script>
