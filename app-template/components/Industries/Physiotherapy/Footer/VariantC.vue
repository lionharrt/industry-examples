<template>
  <footer class="py-24 bg-[#f0fff0] overflow-hidden relative">
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="flex flex-col items-center text-center space-y-12">
        <h2 class="text-[12vw] font-serif text-primary/10 tracking-tighter leading-none uppercase">Lumina Physio</h2>
        
        <div class="flex flex-wrap justify-center gap-12 text-sm font-bold uppercase tracking-[0.4em] text-primary/60">
          <a href="#" class="hover:text-accent transition-colors">Facebook</a>
          <a href="#" class="hover:text-accent transition-colors">Instagram</a>
          <a href="#" class="hover:text-accent transition-colors">Vimeo</a>
          <a href="#" class="hover:text-accent transition-colors">YouTube</a>
        </div>
        
        <div class="w-full pt-12 border-t border-primary/5 text-center text-[10px] font-bold uppercase tracking-[0.5em] text-primary/20">
          {{ copyright }}
        </div>
      </div>
    </div>
    
    <!-- Decorative floating blobs -->
    <div class="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{ copyright: string }>()
</script>
