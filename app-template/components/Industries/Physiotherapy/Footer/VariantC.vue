<template>
  <footer class="py-16 md:py-24 bg-[#f0fff0] overflow-hidden relative px-6">
    <div class="max-w-7xl mx-auto relative z-10">
      <div class="flex flex-col items-center text-center space-y-10 md:space-y-12">
        <h2 class="text-[15vw] md:text-[12vw] font-serif text-primary/10 tracking-tighter leading-none uppercase select-none">Lumina Physio</h2>
        
        <div class="flex flex-wrap justify-center gap-6 md:gap-12 text-xs md:text-sm font-bold uppercase tracking-[0.4em] text-primary/60">
          <a href="#" class="hover:text-accent transition-colors">Facebook</a>
          <a href="#" class="hover:text-accent transition-colors">Instagram</a>
          <a href="#" class="hover:text-accent transition-colors">Vimeo</a>
          <a href="#" class="hover:text-accent transition-colors">YouTube</a>
        </div>
        
        <div class="w-full pt-10 md:pt-12 border-t border-primary/5 text-center text-[9px] md:text-[10px] font-bold uppercase tracking-[0.5em] text-primary/20">
          {{ copyright }}
        </div>
      </div>
    </div>
    
    <!-- Decorative floating blobs -->
    <div class="absolute top-0 left-0 w-48 md:w-64 h-48 md:h-64 bg-accent/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-primary/5 rounded-full blur-3xl"></div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{ copyright: string }>()
</script>
