<template>
  <section class="py-16 md:py-48 bg-black text-white px-6 md:px-24 relative overflow-hidden">
    <div class="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 relative z-10">
      <div v-for="(member, idx) in team" :key="idx" class="group relative overflow-hidden border-4 md:border-8 border-white hover:border-accent transition-all shadow-[8px_8px_0_0_#ffffff] hover:shadow-none">
        <div class="aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
          <img :src="member.image + '?auto=format&fit=crop&w=800'" class="w-full h-full object-cover" />
        </div>
        <div class="p-4 md:p-8 space-y-2 bg-white text-black relative z-10 group-hover:bg-accent transition-all min-h-[120px] md:min-h-[180px] flex flex-col justify-end">
          <h3 class="text-xl md:text-3xl font-black italic uppercase leading-[0.9] tracking-tighter">{{ member.name }}</h3>
          <p class="text-[8px] md:text-xs font-black uppercase tracking-widest bg-black text-accent px-2 py-0.5 inline-block w-fit">{{ member.role }}</p>
          <div class="w-full h-1 md:h-2 bg-black mt-2"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ team: any[] }>()
</script>
