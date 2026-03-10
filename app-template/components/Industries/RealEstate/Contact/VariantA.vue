<template>
  <section class="py-24 md:py-48 bg-[#000080] text-white px-6 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-48 items-center">
      <div class="space-y-12 md:space-y-24 relative z-10">
        <h2 class="text-[10vw] md:text-[8vw] font-bold uppercase leading-[0.8] tracking-tighter text-white shadow-sm italic">INQUIRE</h2>
        <div class="space-y-12 md:space-y-16">
          <div class="group cursor-pointer">
            <p class="text-[10px] font-black uppercase tracking-[1em] text-white/40 mb-4">Global_HQ</p>
            <p class="text-3xl md:text-5xl font-bold uppercase tracking-tighter group-hover:text-[#f7e7ce] transition-colors shadow-sm">New York, NY</p>
          </div>
          <div class="group cursor-pointer border-t border-white/10 pt-12 md:pt-16">
            <p class="text-[10px] font-black uppercase tracking-[1em] text-white/40 mb-4">Private_Inquiry</p>
            <p class="text-xl md:text-3xl font-medium tracking-tighter group-hover:text-[#f7e7ce] transition-colors break-words">{{ email }}</p>
          </div>
        </div>
      </div>
      
      <form class="space-y-8 md:space-y-12 bg-white/5 p-8 md:p-24 rounded-[3rem] md:rounded-[5rem] shadow-2xl relative overflow-hidden border border-white/10">
        <!-- Abstract light background -->
        <div class="absolute inset-0 bg-[#f7e7ce]/5 rotate-12 -translate-y-1/2 -translate-x-1/2 scale-150"></div>
        
        <div class="relative z-10 space-y-8 md:space-y-12">
          <div class="space-y-2">
            <label class="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-[#f7e7ce]">Name / Representative</label>
            <input type="text" placeholder="YOUR NAME" class="w-full bg-transparent border-b-2 border-white/10 py-4 md:py-6 text-lg md:text-xl font-bold uppercase placeholder:text-white/10 focus:border-[#f7e7ce] outline-none transition-colors text-white" />
          </div>
          <div class="space-y-2">
            <label class="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-[#f7e7ce]">Secure Email</label>
            <input type="email" placeholder="EMAIL ADDRESS" class="w-full bg-transparent border-b-2 border-white/10 py-4 md:py-6 text-lg md:text-xl font-bold uppercase placeholder:text-white/10 focus:border-[#f7e7ce] outline-none transition-colors text-white" />
          </div>
          <div class="space-y-4">
            <p class="text-[10px] font-black uppercase tracking-widest text-[#f7e7ce]">Interest_Area</p>
            <div class="flex flex-wrap gap-3 md:gap-4">
              <button v-for="area in ['Residential', 'Commercial', 'Off-Market']" :key="area" type="button" class="px-4 py-2 md:px-6 md:py-3 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#f7e7ce] hover:text-[#000080] transition-all text-white">{{ area }}</button>
            </div>
          </div>
          <button class="w-full py-6 md:py-10 bg-[#f7e7ce] text-[#000080] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-xs md:text-sm rounded-2xl hover:bg-white transition-all shadow-[0_20px_50px_rgba(0,0,0,0.3)] transform hover:-translate-y-1">SUBMIT_INQUIRY</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string, email: string, phone: string }>()
</script>
