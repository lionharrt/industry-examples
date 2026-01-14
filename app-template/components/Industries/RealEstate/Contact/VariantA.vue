<template>
  <section class="py-48 bg-white text-background px-12 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-48">
      <div class="space-y-24">
        <h2 class="text-[12vw] font-bold uppercase leading-[0.8] tracking-tighter text-accent shadow-sm italic">INQUIRE</h2>
        <div class="space-y-16">
          <div class="group cursor-pointer">
            <p class="text-[10px] font-black uppercase tracking-[1em] text-secondary mb-4">Global_HQ</p>
            <p class="text-5xl font-bold uppercase tracking-tighter hover:text-background transition-colors shadow-sm">New York, NY</p>
          </div>
          <div class="group cursor-pointer border-t border-gray-100 pt-16">
            <p class="text-[10px] font-black uppercase tracking-[1em] text-secondary mb-4">Private_Inquiry</p>
            <p class="text-4xl font-medium tracking-tighter hover:text-background transition-colors">{{ email }}</p>
          </div>
        </div>
      </div>
      
      <form class="space-y-12 bg-background p-16 md:p-24 rounded-[5rem] shadow-2xl relative overflow-hidden">
        <!-- Abstract light background -->
        <div class="absolute inset-0 bg-accent/5 rotate-12 -translate-y-1/2 -translate-x-1/2 scale-150"></div>
        
        <div class="relative z-10 space-y-12">
          <input type="text" placeholder="NAME / REPRESENTATIVE" class="w-full bg-transparent border-b-2 border-white/10 py-8 text-xl font-bold uppercase placeholder:text-primary/10 focus:border-accent outline-none transition-colors text-primary" />
          <input type="email" placeholder="SECURE_EMAIL" class="w-full bg-transparent border-b-2 border-white/10 py-8 text-xl font-bold uppercase placeholder:text-primary/10 focus:border-accent outline-none transition-colors text-primary" />
          <div class="space-y-4">
            <p class="text-[10px] font-black uppercase tracking-widest text-accent">Interest_Area</p>
            <div class="flex flex-wrap gap-4">
              <button v-for="area in ['Residential', 'Commercial', 'Off-Market']" :key="area" type="button" class="px-6 py-3 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-background transition-all">{{ area }}</button>
            </div>
          </div>
          <button class="w-full py-10 bg-accent text-background font-black uppercase tracking-[0.5em] text-sm rounded-2xl hover:bg-white transition-all shadow-[0_20px_50px_rgba(0,0,0,0.3)]">SUBMIT_INQUIRY</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string, email: string, phone: string }>()
</script>
