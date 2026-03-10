<template>
  <section class="py-16 md:py-48 bg-black text-white px-6 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      <div v-for="(member, idx) in team" :key="idx" class="group cursor-pointer">
        <div class="aspect-[3/4] relative overflow-hidden rounded-xl md:rounded-2xl mb-4 md:mb-8">
          <img :src="member.image" class="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 grayscale group-hover:grayscale-0" />
          <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
        </div>
        <div class="space-y-1 md:space-y-2 text-center md:text-left">
          <h3 class="text-xl md:text-2xl font-black uppercase tracking-tighter leading-none">{{ member.name }}</h3>
          <p class="text-[#dc143c] text-[8px] md:text-[10px] font-black uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">{{ member.role }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ team: any[] }>()
</script>
