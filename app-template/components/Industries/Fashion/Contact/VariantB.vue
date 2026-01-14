<template>
  <section class="h-screen bg-white text-black flex items-center justify-center p-12 text-center relative overflow-hidden">
    <div class="absolute inset-0 z-0 opacity-[0.02] pointer-events-none">
      <div v-for="i in 15" :key="i" class="text-[20vw] font-black uppercase tracking-tighter">CONTACT CONTACT</div>
    </div>
    
    <div class="relative z-10 space-y-12">
      <h2 class="text-[15vw] font-black uppercase leading-none tracking-tighter italic border-b-8 border-accent">ATELIER</h2>
      <div class="flex flex-col gap-12 pt-12">
        <a :href="'mailto:' + email" class="text-4xl md:text-6xl font-black uppercase tracking-tighter hover:text-accent transition-colors">{{ email }}</a>
        <div class="flex justify-center gap-16">
          <div v-for="s in ['IG', 'TW', 'LI']" :key="s" class="text-xs font-black uppercase tracking-widest border-b border-black pb-2 hover:border-accent hover:text-accent transition-all cursor-pointer">
            {{ s }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string, email: string, phone: string }>()
</script>
