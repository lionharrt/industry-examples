<template>
  <section class="py-48 bg-black text-primary px-12 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-1">
      <div v-for="(member, idx) in team" :key="idx" class="group relative overflow-hidden bg-white/5 border border-white/10 hover:border-accent transition-all">
        <div class="aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
          <img :src="member.image + '?auto=format&fit=crop&w=800'" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
        </div>
        <div class="p-8 space-y-4 bg-black/80 backdrop-blur-sm relative z-10 group-hover:bg-accent group-hover:text-black transition-all">
          <h3 class="text-3xl font-black italic uppercase leading-none">{{ member.name }}</h3>
          <p class="text-xs font-black uppercase tracking-widest opacity-60">{{ member.role }}</p>
          <div class="w-0 h-1 bg-black group-hover:w-full transition-all duration-700"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ team: any[] }>()
</script>
