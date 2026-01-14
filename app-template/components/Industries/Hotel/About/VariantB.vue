<template>
  <section class="py-48 bg-primary text-white px-12 md:px-24 relative overflow-hidden">
    <div class="absolute -right-24 top-0 text-[40vw] font-serif italic opacity-[0.03] select-none pointer-events-none">SOUL</div>
    
    <div class="max-w-4xl mx-auto space-y-24 relative z-10 text-center">
      <div class="w-24 h-px bg-accent mx-auto"></div>
      <h2 class="text-[8vw] font-serif italic leading-none tracking-tighter text-background">{{ title }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-24 text-left">
        <p class="text-xl font-light leading-relaxed italic text-white/60">
          "{{ content }}"
        </p>
        <div class="space-y-12 flex flex-col justify-center">
          <div v-for="val in values" :key="val.title" class="space-y-4 group cursor-default">
            <p class="text-xs font-black uppercase tracking-[0.5em] text-accent group-hover:translate-x-2 transition-transform">{{ val.title }}</p>
            <p class="text-white/40 text-sm leading-relaxed italic">{{ val.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  content: string
}>()
const values = [
  { title: 'Presence', desc: 'A commitment to the here and now, curated through local artistry.' },
  { title: 'Silence', desc: 'Creating voids of tranquility in a world of constant noise.' }
]
</script>
