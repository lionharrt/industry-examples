<template>
  <footer class="py-24 md:py-48 bg-[#02060C] text-[#FAF9F6] px-6 md:px-24 overflow-hidden relative border-t border-accent/20">
    <!-- Subtle Background Element -->
    <div class="absolute top-0 right-0 text-[40vw] font-serif italic text-white/[0.02] pointer-events-none select-none italic uppercase leading-none translate-x-1/4 -translate-y-1/4">V&A</div>
    
    <div class="max-w-7xl mx-auto relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
        <div class="lg:col-span-6 space-y-12 md:space-y-20">
          <div class="space-y-8">
            <h2 class="text-6xl sm:text-8xl md:text-9xl font-serif italic leading-[0.8] tracking-tighter text-accent uppercase italic">Vanguard <br/><span class="text-white">& Associates</span></h2>
            <div class="h-px w-24 bg-accent"></div>
          </div>
          
          <p class="text-xl md:text-2xl font-light italic tracking-tight max-w-xl leading-relaxed text-white/50 italic">
            Providing sophisticated legal counsel and strategic advocacy for complex global matters. Our legacy is built on trust, excellence, and unwavering commitment to justice.
          </p>

          <div class="flex flex-wrap gap-8 md:gap-16 items-center pt-8">
            <div v-for="s in ['LEX_GLOBAL', 'ELITE_ADVOCACY', 'EST_1982']" :key="s" class="text-[10px] font-black uppercase tracking-[0.4em] text-accent/40 italic">{{ s }}</div>
          </div>
        </div>
        
        <div class="lg:col-span-6 grid grid-cols-2 gap-12">
          <div v-for="(links, title) in footerLinks" :key="title" class="space-y-10 md:space-y-16">
            <p class="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-accent italic border-b border-accent/20 pb-6 leading-none">{{ title }}</p>
            <ul class="space-y-6 md:space-y-8 text-xl md:text-2xl font-serif italic tracking-tighter text-white/80">
              <li v-for="link in links" :key="link" class="hover:text-accent transition-all duration-500 cursor-pointer hover:translate-x-2">
                {{ link }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="mt-24 md:mt-48 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[1em] text-white/20 italic gap-8 text-center">
        <p>{{ copyright }}</p>
        <p>REDEFINING_EXCELLENCE</p>
      </div>
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
