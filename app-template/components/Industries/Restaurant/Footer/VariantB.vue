<template>
  <footer class="py-16 md:py-48 bg-background text-primary px-6 md:px-24 overflow-hidden relative">
    <div class="absolute -bottom-24 -left-24 text-[40vw] font-serif font-black italic opacity-5 pointer-events-none select-none hidden md:block">
      E&O
    </div>
    
    <div class="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-24 relative z-10">
      <div class="col-span-2 space-y-6 md:space-y-12 text-center md:text-left">
        <h2 class="text-4xl sm:text-5xl md:text-6xl font-serif italic">EMBER & <br/><span class="text-accent">OAK</span></h2>
        <p class="text-primary/40 text-[10px] md:text-sm max-w-xs uppercase tracking-widest font-bold leading-relaxed mx-auto md:mx-0">
          The primal element of fire meets the enduring strength of the oak tree.
        </p>
      </div>
      
      <div class="space-y-4 md:space-y-8">
        <p class="text-secondary text-[9px] md:text-[10px] font-black uppercase tracking-widest">Explore</p>
        <ul class="space-y-3 md:space-y-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-primary/60">
          <li class="hover:text-primary transition-colors cursor-pointer">The Hearth</li>
          <li class="hover:text-primary transition-colors cursor-pointer">The Cellar</li>
          <li class="hover:text-primary transition-colors cursor-pointer">The Seasons</li>
        </ul>
      </div>

      <div class="space-y-4 md:space-y-8">
        <p class="text-secondary text-[9px] md:text-[10px] font-black uppercase tracking-widest">Connect</p>
        <ul class="space-y-3 md:space-y-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-primary/60">
          <li class="hover:text-accent transition-colors cursor-pointer">Instagram</li>
          <li class="hover:text-accent transition-colors cursor-pointer">Journal</li>
          <li class="hover:text-accent transition-colors cursor-pointer">Newsletter</li>
        </ul>
      </div>
    </div>
    
    <div class="max-w-7xl mx-auto mt-12 md:mt-48 pt-8 md:pt-12 border-t border-white/10 text-center">
      <p class="text-[8px] md:text-[10px] font-black uppercase tracking-[0.5em] md:tracking-[1em] text-primary/10">{{ copyright }}</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{ copyright: string }>()
</script>
