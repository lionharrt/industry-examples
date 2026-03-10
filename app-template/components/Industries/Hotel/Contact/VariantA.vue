<template>
  <section class="py-16 md:py-48 bg-background text-primary px-6 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-48 items-center">
      <div class="space-y-12 md:space-y-24 text-center lg:text-left">
        <h2 class="text-6xl sm:text-8xl md:text-9xl lg:text-[12vw] font-serif italic leading-[0.8] tracking-tighter text-accent uppercase">FIND <br/>YOUR <br/>STAY</h2>
        <div class="space-y-12 md:space-y-16">
          <div class="group cursor-pointer">
            <p class="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] md:tracking-[1em] text-secondary mb-2 md:mb-4 leading-none">Concierge_Mail</p>
            <p class="text-3xl md:text-5xl font-serif italic hover:text-accent transition-colors break-words leading-none">{{ email }}</p>
          </div>
          <div class="group cursor-pointer border-t border-primary/5 pt-8 md:pt-16">
            <p class="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] md:tracking-[1em] text-secondary mb-2 md:mb-4 leading-none">The_Amalfi_HQ</p>
            <p class="text-3xl md:text-5xl font-serif italic hover:text-accent transition-colors leading-none">Ravello, IT</p>
          </div>
        </div>
      </div>
      
      <form class="space-y-8 md:space-y-12 bg-white p-8 md:p-24 rounded-3xl md:rounded-[6rem] border border-primary/5 relative overflow-hidden">
        <div class="absolute inset-0 bg-background/5 pointer-events-none" :style="{ backgroundImage: 'radial-gradient(circle at 2px 2px, #E2725B 1px, transparent 0)', backgroundSize: '60px 60px' }"></div>
        
        <div class="relative z-10 space-y-8 md:space-y-12">
          <input type="text" placeholder="GUEST_NAME" class="w-full bg-transparent border-b border-primary/10 py-4 md:py-8 text-xl font-serif italic placeholder:text-primary/20 focus:border-accent outline-none transition-colors" />
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
            <input type="text" placeholder="ARRIVAL" class="w-full bg-transparent border-b border-primary/10 py-4 md:py-8 text-xl font-serif italic placeholder:text-primary/20 focus:border-accent outline-none transition-colors" />
            <input type="text" placeholder="DEPARTURE" class="w-full bg-transparent border-b border-primary/10 py-4 md:py-8 text-xl font-serif italic placeholder:text-primary/20 focus:border-accent outline-none transition-colors" />
          </div>
          <textarea placeholder="POETIC_REQUESTS" rows="3" class="w-full bg-transparent border-b border-primary/10 py-4 md:py-8 text-xl font-serif italic placeholder:text-primary/20 focus:border-accent outline-none transition-colors resize-none"></textarea>
          <button class="w-full py-6 md:py-12 bg-primary text-white font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-xs rounded-full hover:bg-accent transition-all">TRANSMIT_DESIRE</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string, email: string, phone: string }>()
</script>
