<template>
  <footer class="py-16 md:py-48 bg-white text-[#0A0A0A] px-6 md:px-24 border-t-[15px] md:border-t-[30px] border-[#0A0A0A] relative overflow-hidden">
    <div class="absolute -bottom-24 -right-24 text-[50vw] font-black italic opacity-[0.05] select-none pointer-events-none uppercase italic leading-none text-black">AD</div>
    
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-24 relative z-10 text-center md:text-left">
      <div class="md:col-span-2 space-y-8 md:space-y-16">
        <h2 class="text-5xl sm:text-7xl md:text-[7vw] font-black italic uppercase tracking-tighter leading-[0.8] text-black italic">APEX_ <br/><span class="bg-[#E60000] text-black px-4 md:px-8">DYNAMICS</span></h2>
        <p class="text-lg md:text-2xl font-black italic uppercase tracking-tight md:tracking-[0.2em] opacity-40 max-w-md leading-none md:leading-[0.9] italic mx-auto md:mx-0">
          Engineering the future of high-performance kinetics through unyielding precision and absolute force.
        </p>
      </div>
      
      <div v-for="(links, title) in footerLinks" :key="title" class="space-y-8 md:space-y-12">
        <p class="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] md:tracking-[1em] text-[#E60000] bg-[#0A0A0A] px-3 py-1 inline-block italic">{{ title }}</p>
        <ul class="space-y-4 md:space-y-8 text-xl md:text-3xl font-black italic uppercase tracking-tighter">
          <li v-for="link in links" :key="link" class="hover:translate-x-4 md:hover:translate-x-8 transition-transform duration-[1500ms] cursor-pointer flex items-center gap-4 md:gap-6 group italic justify-center md:justify-start">
            <div class="w-0 h-px md:h-3 bg-[#E60000] opacity-0 group-hover:w-8 md:group-hover:w-12 group-hover:opacity-100 transition-all duration-[1500ms]"></div>
            {{ link }}
          </li>
        </ul>
      </div>
    </div>
    
    <div class="max-w-7xl mx-auto mt-16 md:mt-48 pt-8 md:pt-16 border-t-2 md:border-t-[10px] border-[#0A0A0A]/10 flex flex-col md:flex-row justify-between items-center text-[8px] md:text-[10px] font-black uppercase tracking-[1em] md:tracking-[2em] opacity-20 italic gap-8">
      <p>{{ copyright }}</p>
      <p class="text-center">EST. 2026 / HIGH_PERFORMANCE_KINETICS</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{ copyright: string }>()
const footerLinks = {
  KINETICS: ['PROJECT_ZERO', 'VELOCITY_SV', 'OBSIDIAN', 'ZENITH'],
  SYSTEMS: ['AERO_LAB', 'POWER_UNIT', 'CARBON_TECH']
}
</script>
