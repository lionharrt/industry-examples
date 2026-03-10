<template>
  <footer class="py-16 md:py-48 bg-primary text-white px-6 md:px-24 overflow-hidden relative">
    <div class="absolute -bottom-24 -left-24 text-[50vw] font-black uppercase text-white/[0.02] pointer-events-none select-none italic leading-none">FS</div>
    
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-24 relative z-10 text-center md:text-left">
      <div class="md:col-span-2 space-y-8 md:space-y-12">
        <h2 class="text-5xl sm:text-7xl md:text-8xl font-black uppercase leading-none tracking-tighter italic text-accent">FORMA_ <br/><span class="text-white">STUDIO</span></h2>
        <p class="text-sm md:text-base font-medium uppercase tracking-widest max-w-xs leading-loose text-white/40 italic mx-auto md:mx-0">
          Designing spaces where light, form, and purpose converge into a singular spatial experience.
        </p>
      </div>
      
      <div v-for="(links, title) in footerLinks" :key="title" class="space-y-8 md:space-y-12">
        <p class="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-accent">{{ title }}</p>
        <ul class="space-y-4 md:space-y-6 text-xs md:text-sm font-black uppercase tracking-widest">
          <li v-for="link in links" :key="link" class="hover:text-accent transition-colors cursor-pointer flex items-center gap-4 group justify-center md:justify-start">
            <div class="w-0 h-px bg-accent group-hover:w-8 md:group-hover:w-12 transition-all duration-1000"></div>
            {{ link }}
          </li>
        </ul>
      </div>
    </div>
    
    <div class="max-w-7xl mx-auto mt-16 md:mt-48 pt-8 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[8px] md:text-[10px] font-black uppercase tracking-[1em] md:tracking-[1.5em] text-white/10 italic gap-4">
      <p>{{ copyright }}</p>
      <p>EST. 2026 / GEOMETRIC_ORDER</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{ copyright: string }>()
const footerLinks = {
  DOMAIN: ['Residential', 'Public', 'Cultural'],
  NETWORK: ['Copenhagen', 'Berlin', 'Tokyo']
}
</script>
