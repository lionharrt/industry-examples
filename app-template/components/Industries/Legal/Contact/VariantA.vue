<template>
  <section class="py-48 bg-white text-background px-12 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-48">
      <div class="space-y-24">
        <h2 class="text-[12vw] font-serif italic leading-[0.8] tracking-tighter uppercase text-accent italic">ESTABLISH <br/>CONTACT</h2>
        <div class="space-y-16 border-t border-background/10 pt-16">
          <div class="group cursor-pointer">
            <p class="text-[10px] font-black uppercase tracking-[1em] text-background mb-4 italic opacity-40">DIRECT_COUNSEL_MAIL</p>
            <p class="text-5xl font-serif italic hover:text-accent transition-colors">{{ email }}</p>
          </div>
          <div class="group cursor-pointer">
            <p class="text-[10px] font-black uppercase tracking-[1em] text-background mb-4 italic opacity-40">CENTRAL_HQ_NY</p>
            <p class="text-5xl font-serif italic hover:text-accent transition-colors">{{ phone }}</p>
          </div>
        </div>
      </div>
      
      <form class="space-y-12 bg-secondary p-16 md:p-24 rounded-[1rem] shadow-2xl relative overflow-hidden group">
        <div class="absolute inset-0 bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
        <div class="relative z-10 space-y-12">
          <div class="space-y-4">
            <label class="text-[10px] font-black uppercase tracking-widest text-background opacity-40">FULL_LEGAL_NAME</label>
            <input type="text" placeholder="GUEST_IDENTITY" class="w-full bg-transparent border-b border-background/20 py-6 text-2xl font-serif italic placeholder:text-background/10 focus:border-accent outline-none transition-colors" />
          </div>
          <div class="space-y-4">
            <label class="text-[10px] font-black uppercase tracking-widest text-background opacity-40">NATURE_OF_INQUIRY</label>
            <textarea placeholder="CONFIDENTIAL_BRIEF" rows="4" class="w-full bg-transparent border-b border-background/20 py-6 text-2xl font-serif italic placeholder:text-background/10 focus:border-accent outline-none transition-colors"></textarea>
          </div>
          <button class="w-full py-12 bg-background text-accent font-black uppercase tracking-[0.5em] text-xs hover:bg-black transition-all shadow-2xl italic">TRANSMIT_INQUIRY</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string, email: string, phone: string }>()
</script>
