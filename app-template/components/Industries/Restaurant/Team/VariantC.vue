<template>
  <section class="py-48 bg-[#1A1A1A] text-white px-6 md:px-24">
    <div class="max-w-7xl mx-auto flex gap-12 overflow-x-auto hide-scrollbar pb-12">
      <div v-for="(member, idx) in team" :key="idx" class="min-w-[300px] md:min-w-[400px] group">
        <div class="relative h-[60vh] overflow-hidden rounded-[100px] mb-12">
          <ParallaxImage :src="member.image" speed="0.05" class="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-110 group-hover:scale-100 transition-all duration-1000" />
        </div>
        <div class="text-center">
          <p class="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-4 opacity-0 group-hover:opacity-100 transition-opacity">{{ member.role }}</p>
          <h3 class="text-4xl font-serif italic">{{ member.name }}</h3>
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
