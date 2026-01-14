<template>
  <section class="py-48 bg-primary text-white px-12 md:px-24 border-y border-white/5">
    <div class="max-w-7xl mx-auto">
      <div v-for="(member, idx) in team" :key="idx" class="group flex flex-col md:flex-row items-center gap-24 py-32 border-b border-white/5 last:border-0 relative overflow-hidden px-12 hover:bg-white/[0.02] transition-all duration-1000">
        <div class="w-full md:w-1/3 aspect-square rounded-full overflow-hidden border-4 border-background/20 group-hover:border-background transition-all duration-1000 shadow-2xl grayscale group-hover:grayscale-0">
          <ParallaxImage :src="member.image + '?auto=format&fit=crop&w=800'" speed="0.1" />
        </div>
        <div class="w-full md:w-2/3 space-y-12">
          <div class="space-y-4">
            <span class="text-xs font-black uppercase tracking-[1em] text-accent">Guardian / 0{{ idx + 1 }}</span>
            <h3 class="text-7xl md:text-[10vw] font-serif italic leading-none group-hover:translate-x-4 transition-transform duration-1000">{{ member.name }}</h3>
          </div>
          <div class="h-px w-24 bg-background opacity-20 group-hover:w-full transition-all duration-1000"></div>
          <p class="text-2xl font-light text-white/40 leading-relaxed max-w-xl group-hover:text-white transition-colors duration-1000 italic">
            Dedicated to the art of hospitality and the curation of exceptional moments for the global soul.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ team: any[] }>()
</script>
