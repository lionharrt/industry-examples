<template>
  <section class="py-16 md:py-32 bg-background text-primary px-6 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-start">
      <div class="space-y-8 md:space-y-12 text-center lg:text-left">
        <h2 class="text-5xl sm:text-6xl md:text-7xl font-serif italic leading-[0.9] tracking-tighter uppercase text-accent italic">Establish <br/>Contact</h2>
        <div class="space-y-6 md:space-y-10 border-t border-primary/10 pt-8 md:pt-12">
          <div class="group cursor-pointer">
            <p class="text-[10px] font-black uppercase tracking-[0.5em] text-primary/40 mb-2 italic leading-none">DIRECT_MAIL</p>
            <p class="text-xl md:text-3xl font-serif italic hover:text-accent transition-colors break-words leading-none text-primary">{{ email }}</p>
          </div>
          <div class="group cursor-pointer">
            <p class="text-[10px] font-black uppercase tracking-[0.5em] text-primary/40 mb-2 italic leading-none">CENTRAL_NY</p>
            <p class="text-xl md:text-3xl font-serif italic hover:text-accent transition-colors leading-none text-primary">{{ phone }}</p>
          </div>
        </div>
      </div>
      
      <form class="space-y-6 md:space-y-8 bg-secondary/20 p-6 md:p-12 rounded-xl shadow-xl relative overflow-hidden group border border-primary/5">
        <div class="absolute inset-0 bg-primary/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
        <div class="relative z-10 space-y-6 md:space-y-8">
          <div class="space-y-2 md:space-y-3">
            <label class="text-[10px] font-black uppercase tracking-widest text-primary/50 leading-none">FULL_NAME</label>
            <input type="text" placeholder="GUEST_IDENTITY" class="w-full bg-transparent border-b border-primary/20 py-3 md:py-4 text-lg md:text-xl font-serif italic placeholder:text-primary/20 focus:border-accent outline-none transition-colors text-primary" />
          </div>
          <div class="space-y-2 md:space-y-3">
            <label class="text-[10px] font-black uppercase tracking-widest text-primary/50 leading-none">INQUIRY</label>
            <textarea placeholder="CONFIDENTIAL_BRIEF" rows="3" class="w-full bg-transparent border-b border-primary/20 py-3 md:py-4 text-lg md:text-xl font-serif italic placeholder:text-primary/20 focus:border-accent outline-none transition-colors text-primary"></textarea>
          </div>
          <button class="w-full py-4 md:py-6 bg-primary text-background font-black uppercase tracking-[0.3em] text-[10px] hover:bg-accent hover:text-primary transition-all shadow-xl italic">TRANSMIT_INQUIRY</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string, email: string, phone: string }>()
</script>
