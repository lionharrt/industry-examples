<template>
  <section class="py-16 md:py-48 bg-white text-black px-6 md:px-24 border-y-2 border-black">
    <div class="max-w-7xl mx-auto space-y-px">
      <div v-for="(member, idx) in team" :key="idx" class="group flex items-center justify-between py-8 md:py-12 border-b-2 border-black last:border-0 relative overflow-hidden cursor-pointer px-6 md:px-12 transition-colors duration-700">
        <div class="relative z-10 flex items-center gap-6 md:gap-12 transition-transform duration-700 group-hover:translate-x-4 md:group-hover:translate-x-8">
          <span class="text-[10px] md:text-xs font-black uppercase opacity-20">0{{ idx + 1 }}</span>
          <h3 class="text-4xl sm:text-6xl md:text-[7vw] font-black uppercase tracking-tighter leading-none italic">{{ member.name }}</h3>
        </div>
        <div class="relative z-10 hidden sm:block transition-transform duration-700 group-hover:translate-x-4 md:group-hover:translate-x-8">
          <p class="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.5em] group-hover:text-[#dc143c] transition-colors leading-none">{{ member.role }}</p>
        </div>
        <!-- Hover reveal image -->
        <div class="absolute right-12 md:right-48 top-1/2 -translate-y-1/2 w-32 md:w-64 aspect-[3/4] overflow-hidden opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 rotate-12 group-hover:rotate-0 transition-all duration-700 pointer-events-none border-2 border-black z-20 shadow-2xl">
          <img :src="member.image" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ team: any[] }>()
</script>
