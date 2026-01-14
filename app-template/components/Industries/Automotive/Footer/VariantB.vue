<template>
  <footer class="py-48 bg-white text-[#0A0A0A] px-12 md:px-24 border-t-[30px] border-[#0A0A0A] relative overflow-hidden">
    <div class="absolute -bottom-24 -right-24 text-[50vw] font-black italic opacity-[0.05] select-none pointer-events-none uppercase italic">AD</div>
    
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-24 relative z-10">
      <div class="md:col-span-2 space-y-16">
        <h2 class="text-[10vw] font-black italic uppercase tracking-tighter leading-none text-black italic">APEX_ <br/><span class="bg-[#E60000] text-black px-8">DYNAMICS</span></h2>
        <p class="text-2xl font-black italic uppercase tracking-[0.2em] opacity-40 max-w-md leading-[0.9] italic italic">
          Engineering the future of high-performance kinetics through unyielding precision and absolute force.
        </p>
      </div>
      
      <div v-for="(links, title) in footerLinks" :key="title" class="space-y-12">
        <p class="text-xs font-black uppercase tracking-[1em] text-[#E60000] bg-[#0A0A0A] px-4 py-2 inline-block italic italic">{{ title }}</p>
        <ul class="space-y-8 text-3xl font-black italic uppercase tracking-tighter">
          <li v-for="link in links" :key="link" class="hover:translate-x-8 transition-transform duration-[1500ms] cursor-pointer flex items-center gap-6 group italic">
            <div class="w-12 h-3 bg-[#E60000] opacity-0 group-hover:opacity-100 transition-all duration-[1500ms]"></div>
            {{ link }}
          </li>
        </ul>
      </div>
    </div>
    
    <div class="max-w-7xl mx-auto mt-48 pt-16 border-t-[10px] border-[#0A0A0A]/10 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[2em] opacity-20 italic gap-12 italic italic">
      <p>{{ copyright }}</p>
      <p>EST. 2026 / HIGH_PERFORMANCE_KINETICS</p>
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
