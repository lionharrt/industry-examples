<template>
  <section class="py-48 bg-background text-white px-12 md:px-24 border-y border-white/5">
    <div class="max-w-7xl mx-auto space-y-32">
      <div v-for="(member, idx) in team" :key="idx" class="group flex flex-col md:flex-row items-center gap-24 py-24 border-b border-white/5 last:border-0 relative overflow-hidden hover:bg-white/[0.02] transition-all duration-1000 px-12">
        <div class="w-full md:w-1/3 aspect-[4/5] relative overflow-hidden shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-1000">
          <ParallaxImage :src="member.image + '?auto=format&fit=crop&w=800'" speed="0.1" />
          <div class="absolute inset-0 bg-accent/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
        <div class="w-full md:w-2/3 space-y-12">
          <div class="space-y-4">
            <span class="text-xs font-black uppercase tracking-[1em] text-accent italic">PRINCIPAL_0{{ idx + 1 }}</span>
            <h3 class="text-7xl md:text-[8vw] font-serif italic leading-none tracking-tighter group-hover:translate-x-8 transition-transform duration-1000 uppercase italic">{{ member.name }}</h3>
          </div>
          <p class="text-2xl font-light italic text-white/40 leading-relaxed max-w-xl group-hover:text-white transition-colors duration-1000 italic">
            Dedicated to the highest standards of jurisprudential excellence and strategic advocacy on a global scale.
          </p>
          <div class="flex gap-12 pt-8 border-t border-white/10">
            <div v-for="s in ['V-CARD', 'BIO', 'INSIGHTS']" :key="s" class="text-[10px] font-black uppercase tracking-widest text-accent hover:text-white cursor-pointer transition-all italic">
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
