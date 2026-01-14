<template>
  <section class="py-48 bg-black text-primary px-12 md:px-24 overflow-hidden relative">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-48 items-center">
      <div class="space-y-16">
        <h2 class="text-[12vw] font-black italic leading-[0.8] tracking-tighter uppercase text-accent shadow-2xl about-title">NO <br/>EXCUSE. <br/>JUST <br/>RESULTS.</h2>
        <div class="space-y-12 pt-12 border-t-8 border-accent/20">
          <div class="group cursor-pointer">
            <p class="text-[10px] font-black uppercase tracking-[1em] text-accent mb-4 italic">COMM_ENCRYPTED_MAIL</p>
            <p class="text-5xl font-black italic uppercase hover:translate-x-8 transition-transform duration-500">{{ email }}</p>
          </div>
          <div class="group cursor-pointer">
            <p class="text-[10px] font-black uppercase tracking-[1em] text-accent mb-4 italic">LAB_DIRECT_COORD</p>
            <p class="text-5xl font-black italic uppercase hover:translate-x-8 transition-transform duration-500">{{ phone }}</p>
          </div>
        </div>
      </div>
      
      <form class="space-y-12 bg-white/5 p-12 md:p-24 border-8 border-white/10 hover:border-accent transition-colors duration-700 relative group overflow-hidden">
        <div class="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div class="relative z-10 space-y-12">
          <div class="space-y-2">
            <label class="text-[10px] font-black uppercase tracking-widest text-accent">CADET_NAME</label>
            <input type="text" placeholder="ENTER_NAME" class="w-full bg-transparent border-b-4 border-white/20 py-6 text-4xl font-black italic uppercase placeholder:text-primary/10 focus:border-accent outline-none transition-colors" />
          </div>
          <div class="space-y-2">
            <label class="text-[10px] font-black uppercase tracking-widest text-accent">MISSION_OBJECTIVE</label>
            <textarea placeholder="DESCRIBE_TARGET" rows="4" class="w-full bg-transparent border-b-4 border-white/20 py-6 text-4xl font-black italic uppercase placeholder:text-primary/10 focus:border-accent outline-none transition-colors"></textarea>
          </div>
          <button class="w-full py-12 bg-accent text-black font-black uppercase italic tracking-[1em] text-2xl hover:bg-white transition-all shadow-2xl skew-x-[-12deg]">
            <span class="inline-block skew-x-[12deg]">COMMENCE_ENROLLMENT</span>
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string, email: string, phone: string }>()
</script>
