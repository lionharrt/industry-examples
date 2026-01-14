<template>
  <section class="py-48 bg-[#0A0A0A] text-primary px-12 md:px-24 overflow-hidden relative">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-48 items-center">
      <div class="space-y-16">
        <h2 class="text-[15vw] font-black italic leading-[0.7] tracking-tighter uppercase text-[#E60000] shadow-2xl about-title italic">START <br/>YOUR <br/>ENGINE.</h2>
        <div class="space-y-16 pt-16 border-t-[15px] border-white/5">
          <div class="group cursor-pointer">
            <p class="text-[10px] font-black uppercase tracking-[1.5em] text-[#E60000] mb-4 italic italic">COMMAND_CENTER_MAIL</p>
            <p class="text-6xl font-black italic uppercase hover:translate-x-12 transition-transform duration-[1500ms] italic">{{ email }}</p>
          </div>
          <div class="group cursor-pointer">
            <p class="text-[10px] font-black uppercase tracking-[1.5em] text-[#E60000] mb-4 italic italic">STUTTGART_DIRECT_LINE</p>
            <p class="text-6xl font-black italic uppercase hover:translate-x-12 transition-transform duration-[1500ms] italic">{{ phone }}</p>
          </div>
        </div>
      </div>
      
      <form class="space-y-16 bg-white/5 p-16 md:p-32 border-[20px] border-white/10 hover:border-[#E60000] transition-colors duration-[1500ms] relative group overflow-hidden shadow-2xl">
        <div class="absolute inset-0 bg-gradient-to-br from-[#E60000]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
        <div class="relative z-10 space-y-16">
          <div class="space-y-4">
            <label class="text-xs font-black uppercase tracking-[1em] text-[#E60000] italic">PILOT_IDENTITY</label>
            <input type="text" placeholder="ENTER_CODE_NAME" class="w-full bg-transparent border-b-8 border-white/10 py-8 text-5xl font-black italic uppercase placeholder:text-primary/5 focus:border-[#E60000] outline-none transition-colors" />
          </div>
          <div class="space-y-4">
            <label class="text-xs font-black uppercase tracking-[1em] text-[#E60000] italic">MISSION_PARAMETERS</label>
            <textarea placeholder="DEFINE_SPECIFICATIONS" rows="4" class="w-full bg-transparent border-b-8 border-white/10 py-8 text-5xl font-black italic uppercase placeholder:text-primary/5 focus:border-[#E60000] outline-none transition-colors"></textarea>
          </div>
          <button class="w-full py-16 bg-[#E60000] text-black font-black uppercase italic tracking-[1.5em] text-3xl hover:bg-white transition-all shadow-2xl skew-x-[-15deg]">
            <span class="inline-block skew-x-[15deg]">SUBMIT_TO_COMMAND</span>
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string, email: string, phone: string }>()
</script>
