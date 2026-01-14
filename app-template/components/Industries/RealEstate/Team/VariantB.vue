<template>
  <section class="py-48 bg-background text-primary px-12 md:px-24 border-y border-white/5">
    <div class="max-w-7xl mx-auto">
      <div v-for="(member, idx) in team" :key="idx" class="group flex flex-col md:flex-row items-center gap-24 py-32 border-b border-white/5 last:border-0 relative overflow-hidden px-12">
        <!-- Vertical watermark on hover -->
        <div class="absolute right-0 top-0 h-full text-[15vw] font-black uppercase text-primary/[0.02] rotate-90 origin-bottom-right opacity-0 group-hover:opacity-100 transition-opacity duration-1000 select-none pointer-events-none">
          PARTNER
        </div>
        
        <div class="w-full md:w-1/3 aspect-square rounded-full overflow-hidden border-4 border-accent/20 group-hover:border-accent transition-all duration-1000 shadow-2xl">
          <ParallaxImage :src="member.image + '?auto=format&fit=crop&w=800'" speed="0.1" />
        </div>
        <div class="w-full md:w-2/3 space-y-12">
          <div class="space-y-4">
            <span class="text-xs font-black uppercase tracking-[1em] text-accent">Visionary / 0{{ idx + 1 }}</span>
            <h3 class="text-7xl md:text-[8vw] font-bold uppercase tracking-tighter leading-none italic">{{ member.name }}</h3>
          </div>
          <p class="text-2xl font-light text-primary/40 leading-relaxed max-w-xl group-hover:text-primary transition-colors duration-700">
            Defining the next era of global real estate through strategic acquisitions and visionary architectural curation.
          </p>
          <div class="flex gap-12 text-[10px] font-black uppercase tracking-widest pt-12 border-t border-white/5">
            <span class="hover:text-accent cursor-pointer">LinkedIn</span>
            <span class="hover:text-accent cursor-pointer">Private_Key</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ team: any[] }>()
</script>
