<template>
  <section class="py-48 bg-background text-primary px-12 md:px-24 border-y border-white/5">
    <div class="max-w-7xl mx-auto">
      <div v-for="(member, idx) in team" :key="idx" class="group flex flex-col md:flex-row items-center gap-24 py-24 border-b border-white/5 last:border-0 hover:bg-white/[0.01] transition-all duration-700 px-12">
        <div class="w-full md:w-1/4 aspect-square rounded-3xl overflow-hidden border-2 border-white/10 group-hover:border-accent transition-all duration-700 relative">
          <img :src="member.image" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-secondary/20 group-hover:opacity-0 transition-opacity duration-700"></div>
        </div>
        <div class="w-full md:w-3/4 flex flex-col md:flex-row justify-between items-end md:items-center">
          <div class="space-y-6">
            <h3 class="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">{{ member.name }}</h3>
            <p class="text-2xl font-medium text-primary/40 tracking-tight">{{ member.role }}</p>
          </div>
          <button class="mt-8 md:mt-0 px-8 py-4 border border-accent rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-accent transition-all">Profile_OS</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ team: any[] }>()
</script>
