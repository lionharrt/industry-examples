<template>
  <section class="py-16 md:py-48 bg-background text-primary px-6 md:px-24">
    <div class="max-w-7xl mx-auto flex gap-8 md:gap-12 overflow-x-auto hide-scrollbar pb-12">
      <div v-for="(member, idx) in team" :key="idx" class="min-w-[85vw] md:min-w-[450px] group bg-white border border-black/5 rounded-[3rem] md:rounded-[5rem] p-8 md:p-16 flex flex-col justify-between hover:shadow-[0_50px_100px_rgba(0,0,0,0.1)] transition-all duration-1000 relative overflow-hidden">
        <div class="text-[12vw] font-black absolute -right-8 -top-12 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">F</div>
        <div class="relative h-[40vh] md:h-[50vh] overflow-hidden rounded-[2rem] md:rounded-[4rem] mb-8 md:mb-16 grayscale group-hover:grayscale-0 transition-all duration-1000 shadow-2xl">
          <img :src="member.image + '?auto=format&fit=crop&w=800'" class="w-full h-full object-cover scale-125 group-hover:scale-100 transition-transform duration-1000" />
        </div>
        <div class="text-center space-y-4">
          <h3 class="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter italic group-hover:translate-y-[-4px] transition-transform">{{ member.name }}</h3>
          <p class="text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-accent">{{ member.role }}</p>
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
