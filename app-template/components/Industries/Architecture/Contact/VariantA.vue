<template>
  <section class="py-48 bg-background text-primary px-12 md:px-24 border-t border-black/5">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-48">
      <div class="space-y-24">
        <h2 class="text-[12vw] font-black uppercase leading-[0.8] tracking-tighter text-accent italic mix-blend-multiply">BUILD <br/><span class="text-primary">WITH</span> US</h2>
        <div class="space-y-16">
          <div class="group cursor-pointer">
            <p class="text-[10px] font-black uppercase tracking-[1em] text-accent mb-4">Studio_Mail</p>
            <p class="text-5xl font-black uppercase tracking-tighter hover:text-primary transition-colors">{{ email }}</p>
          </div>
          <div class="group cursor-pointer border-t border-black/5 pt-16">
            <p class="text-[10px] font-black uppercase tracking-[1em] text-accent mb-4">Central_Node</p>
            <p class="text-5xl font-black uppercase tracking-tighter hover:text-primary transition-colors">Copenhagen, DK</p>
          </div>
        </div>
      </div>
      
      <form class="space-y-12 bg-primary p-16 md:p-24 rounded-[6rem] shadow-[0_50px_100px_rgba(0,0,0,0.3)] relative overflow-hidden">
        <div class="absolute inset-0 bg-white opacity-[0.02] pointer-events-none" :style="{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }"></div>
        
        <div class="relative z-10 space-y-12">
          <input type="text" placeholder="IDENTITY / FIRM" class="w-full bg-transparent border-b-2 border-white/10 py-8 text-xl font-black uppercase placeholder:text-white/10 focus:border-accent outline-none transition-colors text-white" />
          <input type="email" placeholder="SECURE_CHANNEL" class="w-full bg-transparent border-b-2 border-white/10 py-8 text-xl font-black uppercase placeholder:text-white/10 focus:border-accent outline-none transition-colors text-white" />
          <textarea placeholder="PROJECT_INTENT" rows="4" class="w-full bg-transparent border-b-2 border-white/10 py-8 text-xl font-black uppercase placeholder:text-white/10 focus:border-accent outline-none transition-colors text-white"></textarea>
          <button class="w-full py-12 bg-background text-primary font-black uppercase tracking-[0.5em] text-sm hover:bg-white transition-all shadow-2xl">TRANSMIT_BRIEF</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string, email: string, phone: string }>()
</script>
