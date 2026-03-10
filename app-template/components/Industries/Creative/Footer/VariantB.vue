<template>
  <footer class="py-16 md:py-48 bg-secondary text-background px-6 md:px-24 overflow-hidden relative border-t-8 md:border-t-[16px] border-background">
    <div class="absolute -right-12 bottom-0 text-[60vw] md:text-[50vw] font-black opacity-10 pointer-events-none select-none italic leading-none">
      C
    </div>
    
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-24 relative z-10 text-center md:text-left">
      <div class="md:col-span-2 space-y-8 md:space-y-12">
        <h2 class="text-6xl md:text-8xl font-black uppercase leading-none tracking-tighter italic">P/C</h2>
        <p class="text-xs md:text-sm font-black uppercase tracking-[0.1em] md:tracking-widest max-w-xs leading-relaxed md:leading-loose mx-auto md:mx-0">
          Inventing the future of digital expression through radical motion and code.
        </p>
      </div>
      
      <div v-for="(links, title) in footerLinks" :key="title" class="space-y-6 md:space-y-8">
        <p class="text-[10px] md:text-xs font-black uppercase tracking-widest opacity-40">{{ title }}</p>
        <ul class="space-y-3 md:space-y-4 text-xs md:text-sm font-black uppercase tracking-widest">
          <li v-for="link in links" :key="link" class="hover:text-accent transition-colors cursor-pointer">{{ link }}</li>
        </ul>
      </div>
    </div>
    
    <div class="max-w-7xl mx-auto mt-16 md:mt-48 pt-8 md:pt-12 border-t-2 md:border-t-4 border-background/10 flex flex-col md:flex-row justify-between items-center text-[8px] md:text-[10px] font-black uppercase tracking-widest opacity-40 gap-4">
      <p>{{ copyright }}</p>
      <p>EST. 2026</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{ copyright: string }>()
const footerLinks = {
  EXPLORE: ['Identity', 'Motion', 'Digital'],
  FOLLOW: ['Instagram', 'Behance', 'Dribbble']
}
</script>
