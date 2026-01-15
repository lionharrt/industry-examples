<template>
  <footer class="py-16 md:py-32 bg-primary text-white px-6">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-24 mb-16 md:mb-32 text-center sm:text-left">
        <div class="sm:col-span-2 space-y-6 md:space-y-10">
          <div class="text-3xl md:text-4xl font-serif italic text-accent tracking-tighter">Zen<span class="text-white">Flow.</span></div>
          <p class="text-sm md:text-base text-white/30 max-w-sm leading-relaxed font-light mx-auto sm:mx-0">Dedicated to providing a sanctuary for breath, intentional movement, and profound internal peace. Join our conscious community today.</p>
        </div>
        
        <div class="space-y-6 md:space-y-10">
          <h4 class="text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em] text-white/20">Navigate</h4>
          <ul class="space-y-4 md:space-y-6 text-[9px] md:text-[10px] font-bold uppercase tracking-widest">
            <li class="hover:text-accent cursor-pointer transition-colors">Our Classes</li>
            <li class="hover:text-accent cursor-pointer transition-colors">The Studio</li>
            <li class="hover:text-accent cursor-pointer transition-colors">Teacher Training</li>
            <li class="hover:text-accent cursor-pointer transition-colors">Contact</li>
          </ul>
        </div>
        
        <div class="space-y-6 md:space-y-10">
          <h4 class="text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em] text-white/20">Follow</h4>
          <ul class="space-y-4 md:space-y-6 text-[9px] md:text-[10px] font-bold uppercase tracking-widest">
            <li class="hover:text-accent cursor-pointer transition-colors">Instagram</li>
            <li class="hover:text-accent cursor-pointer transition-colors">Vimeo</li>
            <li class="hover:text-accent cursor-pointer transition-colors">Spotify</li>
          </ul>
        </div>
      </div>
      
      <div class="pt-8 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em] text-white/10">
        <div>{{ copyright }}</div>
        <div class="flex flex-wrap justify-center gap-6 md:gap-12">
          <span class="hover:text-white cursor-pointer transition-colors">Privacy</span>
          <span class="hover:text-white cursor-pointer transition-colors">Terms</span>
          <span class="hover:text-white cursor-pointer transition-colors">Accessibility</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{ copyright: string }>()
</script>
