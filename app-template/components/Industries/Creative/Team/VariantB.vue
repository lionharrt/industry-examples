<template>
  <section class="py-16 md:py-48 bg-secondary text-background px-6 md:px-24">
    <div class="max-w-7xl mx-auto space-y-px">
      <div v-for="(member, idx) in team" :key="idx" class="group flex items-center justify-between py-8 md:py-12 border-b border-background/20 relative overflow-hidden cursor-pointer px-6 md:px-12">
        <!-- Hover background slide -->
        <div class="absolute inset-0 bg-accent -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-expo"></div>
        
        <div class="relative z-10">
          <h3 class="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none group-hover:italic transition-all">{{ member.name }}</h3>
          <p class="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.5em] mt-2 md:mt-4 opacity-40 leading-none">{{ member.role }}</p>
        </div>
        
        <div class="relative z-10 w-16 md:w-48 aspect-square rounded-full overflow-hidden opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500 border-2 md:border-4 border-background ml-4">
          <img :src="member.image" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ team: any[] }>()
</script>

<style scoped>
.ease-expo { transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1); }
</style>
