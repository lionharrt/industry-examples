<template>
  <section class="py-24 md:py-48 bg-background text-primary px-6 md:px-24 border-y border-primary/5">
    <div class="max-w-7xl mx-auto">
      <div v-for="(member, idx) in team" :key="idx" class="group flex flex-col md:flex-row items-center gap-12 md:gap-24 py-16 md:py-32 border-b border-primary/5 last:border-0 relative overflow-hidden px-4 md:px-12">
        <!-- Vertical watermark on hover -->
        <div class="absolute right-0 top-0 h-full text-[15vw] font-black uppercase text-primary/[0.02] rotate-90 origin-bottom-right opacity-0 group-hover:opacity-100 transition-opacity duration-1000 select-none pointer-events-none hidden md:block">
          PARTNER
        </div>
        
        <div class="w-full md:w-1/3 aspect-square rounded-full overflow-hidden border-4 border-primary/10 group-hover:border-accent transition-all duration-1000 shadow-2xl bg-primary/5">
          <ParallaxImage :src="member.image" :speed="0.1" />
        </div>
        <div class="w-full md:w-2/3 space-y-8 md:space-y-12 text-center md:text-left">
          <div class="space-y-4">
            <span class="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] md:tracking-[1em] text-accent">Visionary / 0{{ idx + 1 }}</span>
            <h3 class="text-4xl md:text-[8vw] font-bold uppercase tracking-tighter leading-none italic text-primary">{{ member.name }}</h3>
          </div>
          <p class="text-lg md:text-2xl font-light text-primary/40 leading-relaxed max-w-xl group-hover:text-primary transition-colors duration-700">
            Defining the next era of global real estate through strategic acquisitions and visionary architectural curation.
          </p>
          <div class="flex justify-center md:justify-start gap-8 md:gap-12 text-[10px] font-black uppercase tracking-widest pt-8 md:pt-12 border-t border-primary/10">
            <span class="hover:text-accent cursor-pointer transition-colors">LinkedIn</span>
            <span class="hover:text-accent cursor-pointer transition-colors">Private_Key</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ team: any[] }>()
</script>
