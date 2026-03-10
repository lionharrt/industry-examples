<template>
  <section class="py-16 md:py-48 bg-black text-white px-6 md:px-24 overflow-hidden">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-48 items-start">
      <div class="space-y-8 md:space-y-16">
        <div class="space-y-2">
          <h2 class="text-4xl sm:text-6xl font-black uppercase leading-[1.1] tracking-tighter italic">V_</h2>
          <h2 class="text-4xl sm:text-6xl font-black uppercase leading-[1.1] tracking-tighter italic text-[#dc143c]">CONTACT</h2>
        </div>
        <div class="space-y-8 md:space-y-12">
          <div class="group cursor-pointer">
            <p class="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 mb-2">Direct</p>
            <p class="text-xl sm:text-3xl font-black uppercase tracking-tighter hover:text-[#dc143c] transition-colors break-words leading-relaxed">{{ email }}</p>
          </div>
          <div class="group cursor-pointer">
            <p class="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 mb-2">Studio</p>
            <p class="text-xl sm:text-3xl font-black uppercase tracking-tighter hover:text-[#dc143c] transition-colors leading-relaxed">Paris, FR</p>
          </div>
        </div>
      </div>
      
      <form class="space-y-8 md:space-y-12 border-t-2 lg:border-t-0 lg:border-l-2 border-white/10 pt-12 lg:pt-0 lg:pl-16 md:pl-32">
        <input type="text" placeholder="NAME / HOUSE" class="w-full bg-transparent border-b-2 border-white/10 py-4 md:py-8 text-xl md:text-2xl font-black uppercase placeholder:text-white/30 focus:border-[#dc143c] outline-none transition-colors" />
        <input type="email" placeholder="EMAIL" class="w-full bg-transparent border-b-2 border-white/10 py-4 md:py-8 text-xl md:text-2xl font-black uppercase placeholder:text-white/30 focus:border-[#dc143c] outline-none transition-colors" />
        <textarea placeholder="INQUIRY" rows="3" class="w-full bg-transparent border-b-2 border-white/10 py-4 md:py-8 text-xl md:text-2xl font-black uppercase placeholder:text-white/30 focus:border-[#dc143c] outline-none transition-colors resize-none"></textarea>
        <button class="w-full py-6 md:py-12 bg-white text-black font-black uppercase tracking-[0.5em] md:tracking-[1em] text-[10px] md:text-sm hover:bg-[#dc143c] hover:text-white transition-all">Submit_Request</button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string, email: string, phone: string }>()
</script>
