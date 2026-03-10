<template>
  <section class="py-16 md:py-32 bg-[#0A0A0A] text-white px-6 md:px-24 overflow-hidden relative border-y-8 md:border-y-[16px] border-[#E60000]">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center relative z-10">
      <div class="space-y-8 md:space-y-16 text-center lg:text-left">
        <h2 class="text-5xl sm:text-7xl md:text-[6vw] font-black italic leading-tight tracking-tighter uppercase text-[#E60000] shadow-2xl about-title italic">START <br/>YOUR <br/>ENGINE.</h2>
        <div class="space-y-6 md:space-y-10 pt-6 md:pt-10 border-t-4 md:border-t-8 border-white/5 w-fit mx-auto lg:mx-0">
          <div class="group cursor-pointer">
            <p class="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] md:tracking-[0.8em] text-[#E60000] mb-2 md:mb-4 italic">COMMAND_CENTER_MAIL</p>
            <p class="text-xl sm:text-3xl md:text-4xl font-black italic uppercase hover:text-[#E60000] transition-colors duration-300 break-all text-white">{{ email }}</p>
          </div>
          <div class="group cursor-pointer">
            <p class="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] md:tracking-[0.8em] text-[#E60000] mb-2 md:mb-4 italic">STUTTGART_DIRECT_LINE</p>
            <p class="text-xl sm:text-3xl md:text-4xl font-black italic uppercase hover:text-[#E60000] transition-colors duration-300 text-white">{{ phone }}</p>
          </div>
        </div>
      </div>
      
      <form class="space-y-6 md:space-y-10 bg-white p-6 md:p-12 border-4 md:border-8 border-white shadow-[10px_10px_0_0_#E60000] hover:shadow-none transition-all duration-500 relative group overflow-hidden text-black">
        <div class="relative z-10 space-y-6 md:space-y-10">
          <div class="space-y-1 md:space-y-2">
            <label class="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-[#E60000] italic">PILOT_IDENTITY</label>
            <input type="text" placeholder="ENTER_CODE_NAME" class="w-full bg-transparent border-b-2 md:border-b-4 border-black/10 py-2 md:py-4 text-lg md:text-2xl font-black italic uppercase placeholder:text-black/5 focus:border-[#E60000] outline-none transition-colors" />
          </div>
          <div class="space-y-1 md:space-y-2">
            <label class="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-[#E60000] italic">MISSION_PARAMETERS</label>
            <textarea placeholder="DEFINE_SPECIFICATIONS" rows="2" class="w-full bg-transparent border-b-2 md:border-b-4 border-black/10 py-2 md:py-4 text-lg md:text-2xl font-black italic uppercase placeholder:text-black/5 focus:border-[#E60000] outline-none transition-colors resize-none"></textarea>
          </div>
          <button class="w-full py-4 md:py-8 bg-black text-[#E60000] font-black uppercase italic tracking-widest md:tracking-[0.5em] text-sm md:text-xl hover:bg-[#E60000] hover:text-black transition-all border-2 md:border-4 border-black px-4 whitespace-nowrap overflow-hidden text-ellipsis">
            SUBMIT_TO_COMMAND
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string, email: string, phone: string }>()
</script>
