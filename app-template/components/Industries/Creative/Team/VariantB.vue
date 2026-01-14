<template>
  <section class="py-48 bg-secondary text-background px-12 md:px-24">
    <div class="max-w-7xl mx-auto space-y-px">
      <div v-for="(member, idx) in team" :key="idx" class="group flex items-center justify-between py-12 border-b border-background/20 relative overflow-hidden cursor-pointer px-12">
        <!-- Hover background slide -->
        <div class="absolute inset-0 bg-accent -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-expo"></div>
        
        <div class="relative z-10">
          <h3 class="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none group-hover:italic transition-all">{{ member.name }}</h3>
          <p class="text-xs font-black uppercase tracking-[0.5em] mt-4 opacity-40">{{ member.role }}</p>
        </div>
        
        <div class="relative z-10 w-24 md:w-48 aspect-square rounded-full overflow-hidden opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500">
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
