<template>
  <footer class="py-32 bg-primary text-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid md:grid-cols-4 gap-24 mb-32">
        <div class="md:col-span-2 space-y-10">
          <div class="text-4xl font-serif italic text-accent tracking-tighter">Zen<span class="text-white">Flow.</span></div>
          <p class="text-white/30 max-w-sm leading-relaxed font-light">Dedicated to providing a sanctuary for breath, intentional movement, and profound internal peace. Join our conscious community today.</p>
        </div>
        
        <div>
          <h4 class="text-[9px] font-black uppercase tracking-[0.4em] text-white/20 mb-10">Navigate</h4>
          <ul class="space-y-6 text-[10px] font-bold uppercase tracking-widest">
            <li class="hover:text-accent cursor-pointer transition-colors">Our Classes</li>
            <li class="hover:text-accent cursor-pointer transition-colors">The Studio</li>
            <li class="hover:text-accent cursor-pointer transition-colors">Teacher Training</li>
            <li class="hover:text-accent cursor-pointer transition-colors">Contact</li>
          </ul>
        </div>
        
        <div>
          <h4 class="text-[9px] font-black uppercase tracking-[0.4em] text-white/20 mb-10">Follow</h4>
          <ul class="space-y-6 text-[10px] font-bold uppercase tracking-widest">
            <li class="hover:text-accent cursor-pointer transition-colors">Instagram</li>
            <li class="hover:text-accent cursor-pointer transition-colors">Vimeo</li>
            <li class="hover:text-accent cursor-pointer transition-colors">Spotify</li>
          </ul>
        </div>
      </div>
      
      <div class="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between gap-8 text-[9px] font-black uppercase tracking-[0.4em] text-white/10">
        <div>{{ copyright }}</div>
        <div class="flex gap-12">
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
