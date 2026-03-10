<template>
  <section class="py-16 md:py-48 bg-black text-white px-6 md:px-24">
    <div class="max-w-7xl mx-auto flex gap-6 md:gap-12 overflow-x-auto hide-scrollbar pb-8 md:pb-12">
      <div v-for="(member, idx) in team" :key="idx" class="min-w-[240px] md:min-w-[300px] group flex flex-col items-center">
        <div class="w-full aspect-[2/3] rounded-[60px] md:rounded-[100px] overflow-hidden relative mb-8 md:mb-12 border border-white/10 group-hover:border-[#dc143c] transition-all duration-700">
          <img :src="member.image" class="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" />
        </div>
        <h3 class="text-2xl md:text-3xl font-black uppercase tracking-tighter group-hover:italic transition-all leading-none">{{ member.name }}</h3>
        <p class="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-white/20 mt-3 md:mt-4">{{ member.role }}</p>
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
