<template>
  <section class="py-48 bg-[#B4B4B4] text-[#0A0A0A] px-12 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
      <div v-for="(member, idx) in team" :key="idx" class="group flex bg-[#0A0A0A] p-4 shadow-2xl hover:translate-x-8 transition-transform duration-700">
        <div class="w-1/2 aspect-[4/5] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 border-4 border-white/10">
          <img :src="member.image + '?auto=format&fit=crop&w=800'" class="w-full h-full object-cover" />
        </div>
        <div class="w-1/2 p-12 flex flex-col justify-center space-y-12 text-primary">
          <div class="space-y-4">
            <p class="text-[10px] font-black uppercase tracking-[1em] text-[#E60000] italic italic">EXPERT_0{{ idx + 1 }}</p>
            <h3 class="text-5xl font-black italic uppercase leading-none tracking-tighter">{{ member.name }}</h3>
            <p class="text-xs font-black uppercase tracking-[0.5em] opacity-40 italic italic">{{ member.role }}</p>
          </div>
          <div class="flex gap-6">
            <div v-for="s in ['CAD', 'AERO', 'PRO']" :key="s" class="w-12 h-12 border-2 border-[#E60000] flex items-center justify-center text-[8px] font-black hover:bg-[#E60000] hover:text-black transition-all cursor-pointer italic">
              {{ s }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ team: any[] }>()
</script>
