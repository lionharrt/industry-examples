<template>
  <footer class="py-24 md:py-40 bg-[#f5f1e9] overflow-hidden relative text-center px-6">
    <div class="max-w-7xl mx-auto relative z-10 space-y-16 md:space-y-24">
      <div class="space-y-8 md:space-y-12">
        <h2 class="text-[18vw] md:text-[15vw] font-serif text-primary/5 tracking-tighter leading-none uppercase italic select-none">Breathe Out</h2>
        
        <div class="flex flex-wrap justify-center gap-8 md:gap-16 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.5em] text-primary/60">
          <a href="#" class="hover:text-accent transition-colors">Facebook</a>
          <a href="#" class="hover:text-accent transition-colors">Instagram</a>
          <a href="#" class="hover:text-accent transition-colors">Vimeo</a>
          <a href="#" class="hover:text-accent transition-colors">LinkedIn</a>
        </div>
      </div>
      
      <div class="pt-8 md:pt-12 border-t border-primary/5 text-[8px] md:text-[9px] font-black uppercase tracking-[0.6em] text-primary/20">
        {{ copyright }}
      </div>
    </div>
    
    <!-- Abstract Flowing Blobs -->
    <div class="absolute top-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-accent/5 rounded-full blur-[100px] md:blur-[150px]"></div>
    <div class="absolute bottom-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-primary/5 rounded-full blur-[100px] md:blur-[150px]"></div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{ copyright: string }>()
</script>
