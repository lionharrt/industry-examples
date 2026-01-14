<template>
  <section class="py-48 bg-background text-primary px-12 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
      <div v-for="(member, idx) in team" :key="idx" class="group relative aspect-[3/4] bg-background p-8 flex flex-col justify-end overflow-hidden border border-white/5 hover:bg-accent/10 transition-all duration-700">
        <!-- Technical overlay -->
        <div class="absolute top-0 left-0 p-8 space-y-2 opacity-20 group-hover:opacity-100 transition-opacity">
          <div class="h-1 w-8 bg-secondary rounded-full"></div>
          <div class="h-1 w-12 bg-white/20 rounded-full"></div>
        </div>
        
        <img :src="member.image" class="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-80 group-hover:scale-110 transition-all duration-1000 grayscale group-hover:grayscale-0" />
        
        <div class="relative z-10 space-y-2">
          <h3 class="text-3xl font-black uppercase tracking-tighter">{{ member.name }}</h3>
          <p class="text-secondary text-xs font-black uppercase tracking-widest">{{ member.role }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ team: any[] }>()
</script>
