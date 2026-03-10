<template>
  <section class="py-16 md:py-48 bg-black text-white px-6 md:px-24 overflow-hidden relative border-y-[16px] md:border-y-[32px] border-accent">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-32 items-center relative z-10">
      <div class="space-y-8 md:space-y-12 text-center lg:text-left">
        <h2 class="text-4xl sm:text-6xl md:text-[min(8vw,100px)] font-black italic leading-[1] tracking-tighter uppercase text-white about-title leading-none">NO <br/><span class="text-accent">EXCUSE.</span> <br/>JUST <br/><span class="text-accent">RESULTS.</span></h2>
        <div class="space-y-8 md:space-y-12 pt-8 md:pt-12 border-t-[8px] md:border-t-[12px] border-accent w-fit mx-auto lg:mx-0">
          <div class="group cursor-pointer">
            <p class="text-[10px] md:text-sm font-black uppercase tracking-widest text-accent mb-2 italic">COMM_ENCRYPTED_MAIL</p>
            <p class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black italic uppercase hover:text-accent transition-all duration-300 break-all leading-none">{{ email }}</p>
          </div>
          <div class="group cursor-pointer">
            <p class="text-[10px] md:text-sm font-black uppercase tracking-widest text-accent mb-2 italic">LAB_DIRECT_COORD</p>
            <p class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black italic uppercase hover:text-accent transition-all duration-300 leading-none">{{ phone }}</p>
          </div>
        </div>
      </div>
      
      <form class="space-y-6 md:space-y-10 bg-white p-8 md:p-12 lg:p-16 border-[12px] md:border-[16px] border-white shadow-[12px_12px_0_0_#CCFF00] hover:shadow-none transition-all duration-500 relative group overflow-hidden text-black">
        <div class="relative z-10 space-y-6 md:space-y-10">
          <div class="space-y-2">
            <label class="text-[10px] md:text-sm font-black uppercase tracking-widest bg-black text-accent px-3 py-1 inline-block">CADET_NAME</label>
            <input type="text" placeholder="ENTER_NAME" class="w-full bg-transparent border-b-2 md:border-b-4 border-black py-3 text-lg md:text-2xl font-black italic uppercase placeholder:text-black/10 focus:border-accent outline-none transition-colors" />
          </div>
          <div class="space-y-2">
            <label class="text-[10px] md:text-sm font-black uppercase tracking-widest bg-black text-accent px-3 py-1 inline-block">MISSION_OBJECTIVE</label>
            <textarea placeholder="DESCRIBE_TARGET" rows="2" class="w-full bg-transparent border-b-2 md:border-b-4 border-black py-3 text-lg md:text-2xl font-black italic uppercase placeholder:text-black/10 focus:border-accent outline-none transition-colors resize-none"></textarea>
          </div>
          <button class="w-full py-4 md:py-6 bg-black text-accent font-black uppercase italic tracking-widest text-sm md:text-xl lg:text-2xl hover:bg-white hover:text-black transition-all border-4 md:border-6 border-black">
            COMMENCE_ENROLLMENT
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string, email: string, phone: string }>()
</script>
