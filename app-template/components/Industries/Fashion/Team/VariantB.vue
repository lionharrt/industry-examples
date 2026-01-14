<template>
  <section class="py-48 bg-white text-black px-12 md:px-24 border-y-2 border-black">
    <div class="max-w-7xl mx-auto space-y-px">
      <div v-for="(member, idx) in team" :key="idx" class="group flex items-center justify-between py-12 border-b-2 border-black last:border-0 relative overflow-hidden cursor-pointer px-12 hover:px-24 transition-all duration-700">
        <div class="relative z-10 flex items-center gap-12">
          <span class="text-xs font-black uppercase opacity-20">0{{ idx + 1 }}</span>
          <h3 class="text-6xl md:text-[8vw] font-black uppercase tracking-tighter leading-none italic group-hover:translate-x-8 transition-transform duration-700">{{ member.name }}</h3>
        </div>
        <div class="relative z-10 hidden md:block">
          <p class="text-xs font-black uppercase tracking-[0.5em] group-hover:text-accent transition-colors">{{ member.role }}</p>
        </div>
        <!-- Hover reveal image -->
        <div class="absolute right-48 top-1/2 -translate-y-1/2 w-64 aspect-[3/4] overflow-hidden opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 rotate-12 group-hover:rotate-0 transition-all duration-700 pointer-events-none">
          <img :src="member.image" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ team: any[] }>()
</script>
