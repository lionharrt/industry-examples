<template>
  <footer class="py-48 bg-background text-white px-12 md:px-24 overflow-hidden relative border-t-8 border-accent">
    <div class="absolute -bottom-24 -left-24 text-[45vw] font-serif italic text-white/[0.02] pointer-events-none select-none italic uppercase">V&A</div>
    
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-24 relative z-10">
      <div class="md:col-span-2 space-y-12">
        <h2 class="text-8xl font-serif italic leading-none tracking-tighter text-accent uppercase italic">VANGUARD_ <br/><span class="text-white">ASSOCIATES</span></h2>
        <p class="text-xl font-light italic tracking-widest max-w-sm leading-relaxed text-white/40 italic">
          Redefining the standard of legal excellence through sophisticated advocacy and global strategic vision.
        </p>
      </div>
      
      <div v-for="(links, title) in footerLinks" :key="title" class="space-y-12">
        <p class="text-[10px] font-black uppercase tracking-[1em] text-accent italic border-b border-accent/30 pb-4">{{ title }}</p>
        <ul class="space-y-6 text-xl font-serif italic tracking-tighter">
          <li v-for="link in links" :key="link" class="hover:text-accent transition-colors cursor-pointer flex items-center gap-4 group">
            <div class="w-0 h-px bg-accent group-hover:w-12 transition-all duration-1000"></div>
            {{ link }}
          </li>
        </ul>
      </div>
    </div>
    
    <div class="max-w-7xl mx-auto mt-48 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[1.5em] text-white/10 italic gap-8">
      <p>{{ copyright }}</p>
      <p>EST. 1982 / ELITE_ADVOCACY_SYSTEMS</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{ copyright: string }>()
const footerLinks = {
  PRACTICE: ['CORPORATE', 'LITIGATION', 'IP_LAW', 'GLOBAL'],
  DIALOG: ['RECRUITING', 'INSIGHTS', 'CONTACT']
}
</script>
