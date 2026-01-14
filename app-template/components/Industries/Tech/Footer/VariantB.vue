<template>
  <footer class="py-48 bg-background text-primary px-12 md:px-24 overflow-hidden relative">
    <div class="absolute -bottom-24 -right-24 text-[40vw] font-black opacity-[0.02] pointer-events-none select-none italic">NXS</div>
    
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-24 relative z-10">
      <div class="md:col-span-2 space-y-12">
        <h2 class="text-6xl font-black uppercase leading-none tracking-tighter">THE <br/><span class="text-accent">INFRA</span>STRUCTURE</h2>
        <div class="flex gap-4">
          <div v-for="i in 4" :key="i" class="w-12 h-1 bg-white/10 rounded-full group cursor-pointer overflow-hidden">
            <div class="h-full bg-secondary w-0 group-hover:w-full transition-all duration-500"></div>
          </div>
        </div>
      </div>
      
      <div v-for="(links, title) in footerLinks" :key="title" class="space-y-8">
        <p class="text-xs font-black uppercase tracking-widest text-secondary">{{ title }}</p>
        <ul class="space-y-4 text-sm font-black uppercase tracking-widest text-primary/40">
          <li v-for="link in links" :key="link" class="hover:text-primary transition-colors cursor-pointer">{{ link }}</li>
        </ul>
      </div>
    </div>
    
    <div class="max-w-7xl mx-auto mt-48 pt-12 border-t border-white/5 flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-primary/10">
      <p>{{ copyright }}</p>
      <p>STATUS: OPERATIONAL</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{ copyright: string }>()
const footerLinks = {
  NETWORK: ['Compute', 'Storage', 'Edge'],
  PROTOCOL: ['API', 'SDK', 'Docs']
}
</script>
