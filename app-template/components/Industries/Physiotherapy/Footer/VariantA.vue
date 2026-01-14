<template>
  <footer class="py-20 bg-primary text-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid md:grid-cols-4 gap-12 mb-20">
        <div class="md:col-span-2 space-y-8">
          <div class="text-3xl font-serif tracking-tighter text-accent">Lumina<span class="text-white">Physio.</span></div>
          <p class="text-white/40 max-w-sm leading-relaxed">Dedicated to restoring your natural movement and enhancing your quality of life through precision care and expertise.</p>
        </div>
        
        <div>
          <h4 class="text-xs font-bold uppercase tracking-[0.3em] text-white/20 mb-8">Navigation</h4>
          <ul class="space-y-4 text-sm font-medium">
            <li class="hover:text-accent cursor-pointer transition-colors">Treatments</li>
            <li class="hover:text-accent cursor-pointer transition-colors">Our Clinic</li>
            <li class="hover:text-accent cursor-pointer transition-colors">Specialists</li>
            <li class="hover:text-accent cursor-pointer transition-colors">Contact</li>
          </ul>
        </div>
        
        <div>
          <h4 class="text-xs font-bold uppercase tracking-[0.3em] text-white/20 mb-8">Connect</h4>
          <ul class="space-y-4 text-sm font-medium">
            <li class="hover:text-accent cursor-pointer transition-colors">Instagram</li>
            <li class="hover:text-accent cursor-pointer transition-colors">LinkedIn</li>
            <li class="hover:text-accent cursor-pointer transition-colors">Twitter</li>
          </ul>
        </div>
      </div>
      
      <div class="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-6 text-[10px] font-bold uppercase tracking-widest text-white/20">
        <div>{{ copyright }}</div>
        <div class="flex gap-8">
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
