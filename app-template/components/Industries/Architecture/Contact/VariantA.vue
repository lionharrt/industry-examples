<template>
  <section class="py-12 md:py-24 bg-background text-primary px-6 md:px-24 border-t border-black/5">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
      <div class="space-y-8 md:space-y-12 text-center lg:text-left">
        <h2 class="text-5xl sm:text-7xl md:text-[8vw] font-black uppercase leading-[0.85] tracking-tighter text-accent italic">BUILD <br/><span class="text-primary">WITH</span> US</h2>
        <div class="space-y-6 md:space-y-10">
          <div class="group cursor-pointer">
            <p class="text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-accent mb-2">Studio_Mail</p>
            <p class="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tighter hover:text-primary transition-colors break-all">{{ email }}</p>
          </div>
          <div class="group cursor-pointer border-t border-black/5 pt-6 md:pt-10">
            <p class="text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-accent mb-2">Central_Node</p>
            <p class="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tighter hover:text-primary transition-colors">Copenhagen, DK</p>
          </div>
        </div>
      </div>
      
      <form class="space-y-6 md:space-y-8 bg-primary p-8 md:p-16 rounded-3xl md:rounded-[4rem] shadow-[0_30px_60px_rgba(0,0,0,0.2)] relative overflow-hidden">
        <div class="absolute inset-0 bg-white opacity-[0.02] pointer-events-none" :style="{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }"></div>
        
        <div class="relative z-10 space-y-6 md:space-y-8">
          <input type="text" placeholder="IDENTITY / FIRM" class="w-full bg-transparent border-b border-white/10 py-3 md:py-6 text-base md:text-lg font-black uppercase placeholder:text-white/10 focus:border-accent outline-none transition-colors text-white" />
          <input type="email" placeholder="SECURE_CHANNEL" class="w-full bg-transparent border-b border-white/10 py-3 md:py-6 text-base md:text-lg font-black uppercase placeholder:text-white/10 focus:border-accent outline-none transition-colors text-white" />
          <textarea placeholder="PROJECT_INTENT" rows="2" class="w-full bg-transparent border-b border-white/10 py-3 md:py-6 text-base md:text-lg font-black uppercase placeholder:text-white/10 focus:border-accent outline-none transition-colors text-white resize-none"></textarea>
          <button class="w-full py-4 md:py-8 bg-background text-primary font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] hover:bg-white transition-all shadow-xl italic">TRANSMIT_BRIEF</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string, email: string, phone: string }>()
</script>
