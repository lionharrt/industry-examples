<template>
  <footer class="py-16 md:py-48 bg-primary text-white px-6 md:px-24 overflow-hidden relative">
    <div class="absolute -bottom-12 -left-12 md:-bottom-24 md:-left-24 text-[60vw] md:text-[50vw] font-serif italic text-white/[0.02] pointer-events-none select-none italic leading-none">TW</div>
    
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-24 relative z-10 text-center md:text-left">
      <div class="md:col-span-2 space-y-8 md:space-y-12">
        <h2 class="text-6xl md:text-8xl font-serif italic leading-none tracking-tighter text-background">THE_ <br/><span class="text-white">WANDERER</span></h2>
        <p class="text-xs md:text-sm font-medium italic tracking-widest max-w-xs leading-relaxed md:leading-loose text-white/40 mx-auto md:mx-0">
          Where the rhythm of the tides meets the comfort of home. Your escape, redefined through artisanal intent.
        </p>
      </div>
      
      <div v-for="(links, title) in footerLinks" :key="title" class="space-y-6 md:space-y-12">
        <p class="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-accent leading-none">{{ title }}</p>
        <ul class="space-y-4 md:space-y-6 text-sm font-serif italic tracking-widest">
          <li v-for="link in links" :key="link" class="hover:text-background transition-colors cursor-pointer flex items-center justify-center md:justify-start gap-4 group">
            <div class="w-0 h-px bg-background group-hover:w-8 md:group-hover:w-12 transition-all duration-1000 hidden md:block"></div>
            {{ link }}
          </li>
        </ul>
      </div>
    </div>
    
    <div class="max-w-7xl mx-auto mt-16 md:mt-48 pt-8 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[8px] md:text-[10px] font-black uppercase tracking-[1em] md:tracking-[1.5em] text-white/10 italic gap-4">
      <p>{{ copyright }}</p>
      <p>EST. 2026 / ARTISANAL_HOSPITALITY</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{ copyright: string }>()
const footerLinks = {
  ESCAPE: ['Ravello', 'Positano', 'Capri', 'Sorrento'],
  JOURNEY: ['Spa', 'Cuisine', 'Exploration']
}
</script>
