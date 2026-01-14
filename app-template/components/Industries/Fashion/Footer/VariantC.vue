<template>
  <footer class="py-48 bg-white text-black px-12 md:px-24 overflow-hidden relative border-t-8 border-black">
    <div class="absolute -right-24 bottom-0 text-[50vw] font-black opacity-[0.03] pointer-events-none select-none italic">NA</div>
    
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-24 relative z-10">
      <div class="md:col-span-2 space-y-12">
        <h2 class="text-8xl font-black uppercase leading-none tracking-tighter">NOIR_ <br/><span class="text-accent">ATELIER</span></h2>
        <p class="text-sm font-black uppercase tracking-widest max-w-xs leading-loose italic">
          Undefined by tradition. Redefined by the moment.
        </p>
      </div>
      
      <div v-for="(links, title) in footerLinks" :key="title" class="space-y-12">
        <p class="text-xs font-black uppercase tracking-[0.5em] opacity-40">{{ title }}</p>
        <ul class="space-y-6 text-sm font-black uppercase tracking-widest">
          <li v-for="link in links" :key="link" class="hover:text-accent transition-colors cursor-pointer group flex items-center gap-4">
            <div class="w-0 h-px bg-accent group-hover:w-8 transition-all duration-500"></div>
            {{ link }}
          </li>
        </ul>
      </div>
    </div>
    
    <div class="max-w-7xl mx-auto mt-48 pt-12 border-t-2 border-black/10 flex justify-between items-center text-[10px] font-black uppercase tracking-[1em] opacity-40">
      <p>{{ copyright }}</p>
      <p>EST. 2026</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{ copyright: string }>()
const footerLinks = {
  COLLECTIONS: ['Ready-To-Wear', 'Haute Couture', 'Accessories'],
  ATELIER: ['About', 'Sustainability', 'Stockists']
}
</script>
