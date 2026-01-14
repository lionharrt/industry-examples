<template>
  <section class="py-48 bg-primary text-white px-12 md:px-24 border-y border-white/5">
    <div class="max-w-7xl mx-auto">
      <div v-for="(member, idx) in team" :key="idx" class="group flex flex-col md:flex-row items-center gap-24 py-32 border-b border-white/5 last:border-0 relative overflow-hidden px-12 hover:bg-white/[0.02] transition-colors duration-1000">
        <div class="w-full md:w-1/3 aspect-[4/5] rounded-[4rem] overflow-hidden border-2 border-white/10 group-hover:border-accent transition-all duration-1000 relative shadow-2xl">
          <ParallaxImage :src="member.image + '?auto=format&fit=crop&w=800'" speed="0.1" />
          <div class="absolute inset-0 bg-primary/40 group-hover:opacity-0 transition-opacity duration-700"></div>
        </div>
        <div class="w-full md:w-2/3 space-y-12">
          <div class="space-y-4">
            <span class="text-xs font-black uppercase tracking-[1em] text-accent">Volume_Architect / 0{{ idx + 1 }}</span>
            <h3 class="text-7xl md:text-[10vw] font-black uppercase tracking-tighter leading-none italic group-hover:italic transition-all">{{ member.name }}</h3>
          </div>
          <div class="h-px w-24 bg-accent opacity-20 group-hover:w-full transition-all duration-1000"></div>
          <p class="text-2xl font-light text-white/40 leading-relaxed max-w-xl group-hover:text-white transition-colors duration-1000">
            Shaping the spatial narrative through geometric purity and material honesty.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ team: any[] }>()
</script>
