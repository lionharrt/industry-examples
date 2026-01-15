<template>
  <section class="py-16 md:py-48 bg-[#1A1A1A] text-white px-6 md:px-24">
    <div class="max-w-7xl mx-auto flex gap-6 md:gap-12 overflow-x-auto hide-scrollbar pb-6 md:pb-12">
      <div v-for="(member, idx) in team" :key="idx" class="min-w-[260px] sm:min-w-[300px] md:min-w-[400px] group">
        <div class="relative h-[45vh] sm:h-[50vh] md:h-[60vh] overflow-hidden rounded-[60px] md:rounded-[100px] mb-6 md:mb-12">
          <ParallaxImage :src="member.image" speed="0.05" class="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-110 group-hover:scale-100 transition-all duration-1000" />
        </div>
        <div class="text-center">
          <p class="text-[#D4AF37] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-2 md:mb-4 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">{{ member.role }}</p>
          <h3 class="text-2xl sm:text-3xl md:text-4xl font-serif italic">{{ member.name }}</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ team: any[] }>()
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar { display: none; }
.hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>
