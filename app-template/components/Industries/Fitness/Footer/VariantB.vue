<template>
  <footer class="py-16 md:py-48 bg-accent text-black px-6 md:px-24 border-t-[16px] md:border-t-[32px] border-black">
    <div class="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-32 relative z-10">
      <div class="col-span-2 space-y-8 md:space-y-16 text-center md:text-left">
        <h2 class="text-5xl sm:text-7xl md:text-[10vw] font-black italic uppercase tracking-tighter leading-[0.7] text-black border-l-[12px] md:border-l-[24px] border-black pl-8">THE_ <br/><span class="bg-black text-accent px-4 py-2">KINETIC</span></h2>
        <p class="text-lg md:text-3xl font-black italic uppercase tracking-tight max-w-md leading-none mx-auto md:mx-0">
          Redefining human performance through algorithmic precision and high-octane methodology.
        </p>
      </div>
      
      <div v-for="(links, title) in footerLinks" :key="title" class="space-y-8 md:space-y-16">
        <p class="text-xs md:text-xl font-black uppercase tracking-[0.3em] text-white bg-black px-4 py-2 inline-block italic">{{ title }}</p>
        <ul class="space-y-4 md:space-y-8 text-xl md:text-4xl font-black italic uppercase tracking-tighter">
          <li v-for="link in links" :key="link" class="hover:translate-x-4 transition-transform cursor-pointer flex items-center gap-4 group">
            <div class="w-8 md:w-16 h-2 md:h-4 bg-black opacity-0 group-hover:opacity-100 transition-all"></div>
            {{ link }}
          </li>
        </ul>
      </div>
    </div>
    
    <div class="max-w-7xl mx-auto mt-24 md:mt-48 pt-12 border-t-[8px] border-black flex flex-col md:flex-row justify-between items-center text-xs md:text-xl font-black uppercase tracking-[0.2em] italic gap-8">
      <p>{{ copyright }}</p>
      <p class="bg-black text-white px-4 py-1 uppercase">EST. 2026 / HIGH_PERFORMANCE_SYSTEMS</p>
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
