<template>
  <section class="py-48 bg-[#FAF9F6] text-background px-12 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-background/10 border border-background/10 shadow-2xl overflow-hidden rounded-[2rem]">
      <div v-for="(member, idx) in team" :key="idx" class="group relative bg-white overflow-hidden p-8 hover:bg-background hover:text-white transition-all duration-700">
        <div class="aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 shadow-xl border border-black/5 mb-8">
          <img :src="member.image + '?auto=format&fit=crop&w=800'" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
        </div>
        <div class="space-y-4 text-center">
          <h3 class="text-3xl font-serif italic tracking-tighter leading-none">{{ member.name }}</h3>
          <p class="text-[10px] font-black uppercase tracking-[0.5em] text-accent italic">{{ member.role }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ team: any[] }>()
</script>
