<template>
  <section class="py-48 bg-[#0A0A0A] text-primary px-12 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
      <div v-for="(member, idx) in team" :key="idx" class="group relative overflow-hidden bg-white/5 border border-white/10 hover:border-[#E60000] transition-all">
        <div class="aspect-[4/5] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000">
          <img :src="member.image + '?auto=format&fit=crop&w=800'" class="w-full h-full object-cover group-hover:scale-125 transition-transform duration-[2000ms]" />
        </div>
        <div class="p-12 space-y-4 bg-black/90 backdrop-blur-md relative z-10 group-hover:bg-[#E60000] group-hover:text-black transition-all">
          <p class="text-[10px] font-black uppercase tracking-[1em] opacity-40 group-hover:opacity-100 italic">EXPERT_CODE: 0{{ idx + 1 }}</p>
          <h3 class="text-4xl font-black italic uppercase leading-none tracking-tighter">{{ member.name }}</h3>
          <p class="text-xs font-black uppercase tracking-[0.5em] opacity-40 italic">{{ member.role }}</p>
          <div class="w-0 h-2 bg-black group-hover:w-full transition-all duration-1000"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ team: any[] }>()
</script>
