<template>
  <section class="py-48 bg-black text-primary px-12 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32">
      <div class="space-y-24">
        <h2 class="text-[12vw] font-black uppercase leading-[0.8] tracking-tighter italic">V_ <br/><span class="text-accent">CONTACT</span></h2>
        <div class="space-y-12">
          <div class="group cursor-pointer">
            <p class="text-[10px] font-black uppercase tracking-[1em] text-primary/20 mb-4">Direct</p>
            <p class="text-5xl font-black uppercase tracking-tighter hover:text-accent transition-colors">{{ email }}</p>
          </div>
          <div class="group cursor-pointer">
            <p class="text-[10px] font-black uppercase tracking-[1em] text-primary/20 mb-4">Studio</p>
            <p class="text-5xl font-black uppercase tracking-tighter hover:text-accent transition-colors">Paris, FR</p>
          </div>
        </div>
      </div>
      
      <form class="space-y-12 border-l-2 border-white/10 pl-16 md:pl-32 py-12">
        <input type="text" placeholder="NAME / HOUSE" class="w-full bg-transparent border-b-2 border-white/10 py-8 text-2xl font-black uppercase placeholder:text-primary/10 focus:border-accent outline-none transition-colors" />
        <input type="email" placeholder="EMAIL" class="w-full bg-transparent border-b-2 border-white/10 py-8 text-2xl font-black uppercase placeholder:text-primary/10 focus:border-accent outline-none transition-colors" />
        <textarea placeholder="INQUIRY" rows="4" class="w-full bg-transparent border-b-2 border-white/10 py-8 text-2xl font-black uppercase placeholder:text-primary/10 focus:border-accent outline-none transition-colors"></textarea>
        <button class="w-full py-12 bg-white text-black font-black uppercase tracking-[1em] text-sm hover:bg-accent hover:text-primary transition-all">Submit_Request</button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string, email: string, phone: string }>()
</script>
