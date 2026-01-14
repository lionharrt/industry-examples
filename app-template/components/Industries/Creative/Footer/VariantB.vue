<template>
  <footer class="py-48 bg-secondary text-background px-12 md:px-24 overflow-hidden relative">
    <div class="absolute -right-24 bottom-0 text-[50vw] font-black opacity-10 pointer-events-none select-none italic">
      C
    </div>
    
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-24 relative z-10">
      <div class="md:col-span-2 space-y-12">
        <h2 class="text-8xl font-black uppercase leading-none tracking-tighter italic">P/C</h2>
        <p class="text-sm font-black uppercase tracking-widest max-w-xs leading-loose">
          Inventing the future of digital expression through radical motion and code.
        </p>
      </div>
      
      <div v-for="(links, title) in footerLinks" :key="title" class="space-y-8">
        <p class="text-xs font-black uppercase tracking-widest opacity-40">{{ title }}</p>
        <ul class="space-y-4 text-sm font-black uppercase tracking-widest">
          <li v-for="link in links" :key="link" class="hover:text-accent transition-colors cursor-pointer">{{ link }}</li>
        </ul>
      </div>
    </div>
    
    <div class="max-w-7xl mx-auto mt-48 pt-12 border-t-4 border-background/10 flex justify-between items-center text-[10px] font-black uppercase tracking-widest opacity-40">
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
