<template>
  <footer class="py-48 bg-white text-black px-12 md:px-24 border-t-8 border-black relative overflow-hidden">
    <div class="absolute -bottom-12 -right-12 text-[40vw] font-black italic opacity-[0.03] select-none pointer-events-none uppercase">KL</div>
    
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-24 relative z-10">
      <div class="md:col-span-2 space-y-12">
        <h2 class="text-8xl font-black italic uppercase tracking-tighter leading-none text-black">THE_ <br/><span class="bg-black text-accent px-4">KINETIC</span></h2>
        <p class="text-xl font-bold italic uppercase tracking-widest opacity-40 max-w-sm leading-tight">
          Redefining human performance through algorithmic precision and high-octane methodology.
        </p>
      </div>
      
      <div v-for="(links, title) in footerLinks" :key="title" class="space-y-12">
        <p class="text-[10px] font-black uppercase tracking-[1em] text-accent bg-black px-2 py-1 inline-block italic">{{ title }}</p>
        <ul class="space-y-6 text-xl font-black italic uppercase tracking-tighter">
          <li v-for="link in links" :key="link" class="hover:translate-x-4 transition-transform cursor-pointer flex items-center gap-4 group">
            <div class="w-8 h-1 bg-accent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            {{ link }}
          </li>
        </ul>
      </div>
    </div>
    
    <div class="max-w-7xl mx-auto mt-48 pt-12 border-t-4 border-black/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[1.5em] opacity-20 italic gap-8">
      <p>{{ copyright }}</p>
      <p>EST. 2026 / HIGH_PERFORMANCE_SYSTEMS</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{ copyright: string }>()
const footerLinks = {
  ZONE: ['THE_ARENA', 'IRON_CORE', 'VELOCITY', 'RECOVERY'],
  TECH: ['BIO_FEEDBACK', 'KINETIC_APP', 'PRO_PROTOCOL']
}
</script>
