<template>
  <footer class="py-48 bg-background text-primary px-12 md:px-24 overflow-hidden relative">
    <div class="absolute -bottom-24 -right-24 text-[40vw] font-black uppercase text-primary/[0.02] pointer-events-none select-none italic">MP</div>
    
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-24 relative z-10">
      <div class="md:col-span-2 space-y-12">
        <h2 class="text-8xl font-black uppercase leading-none tracking-tighter italic">MERIDIAN_ <br/><span class="text-accent">ESTATE</span></h2>
        <p class="text-sm font-medium uppercase tracking-widest max-w-xs leading-loose text-primary/40">
          Curating the world’s most exceptional addresses for the next generation of legacy builders.
        </p>
      </div>
      
      <div v-for="(links, title) in footerLinks" :key="title" class="space-y-12">
        <p class="text-xs font-black uppercase tracking-[0.5em] text-accent">{{ title }}</p>
        <ul class="space-y-6 text-sm font-bold uppercase tracking-widest">
          <li v-for="link in links" :key="link" class="hover:text-accent transition-colors cursor-pointer flex items-center gap-4 group">
            <div class="w-0 h-px bg-accent group-hover:w-8 transition-all duration-500"></div>
            {{ link }}
          </li>
        </ul>
      </div>
    </div>
    
    <div class="max-w-7xl mx-auto mt-48 pt-12 border-t border-white/5 flex justify-between items-center text-[10px] font-black uppercase tracking-[1em] text-primary/20">
      <p>{{ copyright }}</p>
      <p>EST. 2026 / GLOBAL_NETWORK</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{ copyright: string }>()
const footerLinks = {
  EXPLORE: ['New York', 'London', 'Dubai', 'Tokyo'],
  SERVICES: ['Acquisitions', 'Advisory', 'Portfolio Mgmt']
}
</script>
