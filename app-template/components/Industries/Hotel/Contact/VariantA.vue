<template>
  <section class="py-48 bg-background text-primary px-12 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-48">
      <div class="space-y-24">
        <h2 class="text-[12vw] font-serif italic leading-[0.8] tracking-tighter text-accent shadow-sm">FIND <br/>YOUR <br/>STAY</h2>
        <div class="space-y-16">
          <div class="group cursor-pointer">
            <p class="text-[10px] font-black uppercase tracking-[1em] text-secondary mb-4">Concierge_Mail</p>
            <p class="text-5xl font-serif italic hover:text-accent transition-colors">{{ email }}</p>
          </div>
          <div class="group cursor-pointer border-t border-primary/5 pt-16">
            <p class="text-[10px] font-black uppercase tracking-[1em] text-secondary mb-4">The_Amalfi_HQ</p>
            <p class="text-5xl font-serif italic hover:text-accent transition-colors">Ravello, IT</p>
          </div>
        </div>
      </div>
      
      <form class="space-y-12 bg-white p-16 md:p-24 rounded-[6rem] shadow-[0_50px_100px_rgba(0,0,0,0.05)] border border-primary/5 relative overflow-hidden">
        <div class="absolute inset-0 bg-background/5 pointer-events-none" :style="{ backgroundImage: 'radial-gradient(circle at 2px 2px, #E2725B 1px, transparent 0)', backgroundSize: '60px 60px' }"></div>
        
        <div class="relative z-10 space-y-12">
          <input type="text" placeholder="GUEST_NAME" class="w-full bg-transparent border-b border-primary/10 py-8 text-xl font-serif italic placeholder:text-primary/20 focus:border-accent outline-none transition-colors" />
          <div class="grid grid-cols-2 gap-12">
            <input type="text" placeholder="ARRIVAL" class="w-full bg-transparent border-b border-primary/10 py-8 text-xl font-serif italic placeholder:text-primary/20 focus:border-accent outline-none transition-colors" />
            <input type="text" placeholder="DEPARTURE" class="w-full bg-transparent border-b border-primary/10 py-8 text-xl font-serif italic placeholder:text-primary/20 focus:border-accent outline-none transition-colors" />
          </div>
          <textarea placeholder="POETIC_REQUESTS" rows="4" class="w-full bg-transparent border-b border-primary/10 py-8 text-xl font-serif italic placeholder:text-primary/20 focus:border-accent outline-none transition-colors"></textarea>
          <button class="w-full py-12 bg-primary text-white font-black uppercase tracking-[0.5em] text-xs rounded-full hover:bg-accent transition-all shadow-2xl">TRANSMIT_DESIRE</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string, email: string, phone: string }>()
</script>
