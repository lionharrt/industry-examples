<template>
  <footer class="py-16 md:py-20 bg-primary text-white px-6">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-12 mb-16 md:mb-20 text-center sm:text-left">
        <div class="sm:col-span-2 space-y-6 md:space-y-8">
          <div class="text-2xl md:text-3xl font-serif tracking-tighter text-accent">Lumina<span class="text-white">Physio.</span></div>
          <p class="text-white/40 max-w-sm leading-relaxed mx-auto sm:mx-0 text-sm md:text-base">Dedicated to restoring your natural movement and enhancing your quality of life through precision care and expertise.</p>
        </div>
        
        <div class="space-y-6 md:space-y-8">
          <h4 class="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-white/20">Navigation</h4>
          <ul class="space-y-3 md:space-y-4 text-xs md:text-sm font-medium">
            <li class="hover:text-accent cursor-pointer transition-colors">Treatments</li>
            <li class="hover:text-accent cursor-pointer transition-colors">Our Clinic</li>
            <li class="hover:text-accent cursor-pointer transition-colors">Specialists</li>
            <li class="hover:text-accent cursor-pointer transition-colors">Contact</li>
          </ul>
        </div>
        
        <div class="space-y-6 md:space-y-8">
          <h4 class="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-white/20">Connect</h4>
          <ul class="space-y-3 md:space-y-4 text-xs md:text-sm font-medium">
            <li class="hover:text-accent cursor-pointer transition-colors">Instagram</li>
            <li class="hover:text-accent cursor-pointer transition-colors">LinkedIn</li>
            <li class="hover:text-accent cursor-pointer transition-colors">Twitter</li>
          </ul>
        </div>
      </div>
      
      <div class="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/20">
        <div>{{ copyright }}</div>
        <div class="flex gap-6 md:gap-8">
          <span class="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
          <span class="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{ copyright: string }>()
</script>
