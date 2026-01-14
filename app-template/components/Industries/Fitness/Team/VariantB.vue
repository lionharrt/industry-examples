<template>
  <section class="py-48 bg-white text-black px-12 md:px-24">
    <div class="max-w-7xl mx-auto space-y-24">
      <div class="flex flex-col md:flex-row justify-between items-end gap-12 border-b-8 border-black pb-8">
        <h2 class="text-8xl md:text-9xl font-black italic uppercase tracking-tighter leading-none">THE_COACHES</h2>
        <p class="text-xl font-black uppercase italic tracking-widest opacity-40">ELITE PERFORMANCE GUARDIANS</p>
      </div>

      <div class="space-y-12">
        <div v-for="(member, idx) in team" :key="idx" class="group flex flex-col md:flex-row items-center gap-24 py-16 border-b-2 border-black/5 hover:bg-accent/10 transition-colors duration-700 px-12">
          <div class="w-full md:w-1/4 aspect-square rounded-[3rem] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 shadow-2xl skew-x-[-10deg]">
            <img :src="member.image + '?auto=format&fit=crop&w=800'" class="w-full h-full object-cover skew-x-[10deg] scale-125" />
          </div>
          <div class="w-full md:w-3/4 space-y-8">
            <div class="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
              <h3 class="text-6xl md:text-8xl font-black italic uppercase leading-none tracking-tighter group-hover:translate-x-4 transition-transform duration-700">{{ member.name }}</h3>
              <p class="text-2xl font-black italic uppercase text-accent bg-black px-4 py-1">{{ member.role }}</p>
            </div>
            <p class="text-2xl font-bold opacity-40 leading-tight max-w-2xl italic">Mastering the intersection of kinetic force and psychological focus. Results-driven, protocol-first.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ team: any[] }>()
</script>
