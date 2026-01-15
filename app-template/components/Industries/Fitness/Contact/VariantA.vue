<template>
  <section class="py-16 md:py-48 bg-black text-white px-6 md:px-24 overflow-hidden relative border-y-[16px] md:border-y-[32px] border-accent">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-32 items-center relative z-10">
      <div class="space-y-12 md:space-y-24 text-center lg:text-left">
        <h2 class="text-[15vw] md:text-[15vw] font-black italic leading-[0.7] tracking-tighter uppercase text-white about-title">NO <br/><span class="text-accent">EXCUSE.</span> <br/>JUST <br/><span class="text-accent">RESULTS.</span></h2>
        <div class="space-y-12 md:space-y-24 pt-12 border-t-[16px] border-accent w-fit">
          <div class="group cursor-pointer">
            <p class="text-xs md:text-2xl font-black uppercase tracking-widest text-accent mb-4 italic">COMM_ENCRYPTED_MAIL</p>
            <p class="text-2xl sm:text-4xl md:text-7xl font-black italic uppercase hover:text-accent transition-all duration-300 break-all">{{ email }}</p>
          </div>
          <div class="group cursor-pointer">
            <p class="text-xs md:text-2xl font-black uppercase tracking-widest text-accent mb-4 italic">LAB_DIRECT_COORD</p>
            <p class="text-2xl sm:text-4xl md:text-7xl font-black italic uppercase hover:text-accent transition-all duration-300">{{ phone }}</p>
          </div>
        </div>
      </div>
      
      <form class="space-y-12 md:space-y-24 bg-white p-8 md:p-24 border-[16px] md:border-[32px] border-white shadow-[20px_20px_0_0_#CCFF00] hover:shadow-none transition-all duration-500 relative group overflow-hidden text-black">
        <div class="relative z-10 space-y-12 md:space-y-24">
          <div class="space-y-4">
            <label class="text-xs md:text-xl font-black uppercase tracking-widest bg-black text-accent px-4 py-1 inline-block">CADET_NAME</label>
            <input type="text" placeholder="ENTER_NAME" class="w-full bg-transparent border-b-[8px] md:border-b-[16px] border-black py-6 text-2xl md:text-7xl font-black italic uppercase placeholder:text-black/10 focus:border-accent outline-none transition-colors" />
          </div>
          <div class="space-y-4">
            <label class="text-xs md:text-xl font-black uppercase tracking-widest bg-black text-accent px-4 py-1 inline-block">MISSION_OBJECTIVE</label>
            <textarea placeholder="DESCRIBE_TARGET" rows="2" class="w-full bg-transparent border-b-[8px] md:border-b-[16px] border-black py-6 text-2xl md:text-7xl font-black italic uppercase placeholder:text-black/10 focus:border-accent outline-none transition-colors resize-none"></textarea>
          </div>
          <button class="w-full py-8 md:py-16 bg-black text-accent font-black uppercase italic tracking-widest text-xl md:text-5xl hover:bg-white hover:text-black transition-all border-8 border-black">
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
