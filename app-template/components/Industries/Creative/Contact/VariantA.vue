<template>
  <section class="py-16 md:py-48 bg-background text-primary px-6 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32">
      <div class="space-y-12 md:space-y-24 text-center lg:text-left">
        <h2 class="text-6xl sm:text-8xl md:text-[9vw] font-black uppercase leading-[0.9] tracking-tighter text-secondary italic">SAY <br/>HELLO</h2>
        <div class="space-y-8 md:space-y-12">
          <div class="group cursor-pointer">
            <p class="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-primary/20 mb-2 md:mb-4">Email</p>
            <p class="text-2xl sm:text-4xl font-black uppercase tracking-tighter hover:text-accent transition-colors break-all leading-none">{{ email }}</p>
          </div>
          <div class="group cursor-pointer">
            <p class="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-primary/20 mb-2 md:mb-4">HQ</p>
            <p class="text-2xl sm:text-4xl font-black uppercase tracking-tighter hover:text-accent transition-colors leading-none">Berlin, DE</p>
          </div>
        </div>
      </div>
      
      <form class="space-y-8 md:space-y-12 p-8 md:p-16 border-8 md:border-[12px] border-secondary rounded-3xl md:rounded-[4rem]">
        <input type="text" placeholder="NAME / BRAND" class="w-full bg-transparent border-b-2 md:border-b-4 border-white/10 py-4 md:py-8 text-lg md:text-xl font-black uppercase placeholder:text-primary/10 focus:border-accent outline-none transition-colors" />
        <input type="email" placeholder="EMAIL" class="w-full bg-transparent border-b-2 md:border-b-4 border-white/10 py-4 md:py-8 text-lg md:text-xl font-black uppercase placeholder:text-primary/10 focus:border-accent outline-none transition-colors" />
        <textarea placeholder="THE MISSION" rows="3" class="w-full bg-transparent border-b-2 md:border-b-4 border-white/10 py-4 md:py-8 text-lg md:text-xl font-black uppercase placeholder:text-primary/10 focus:border-accent outline-none transition-colors resize-none"></textarea>
        <button class="w-full py-6 md:py-12 bg-accent text-background font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-lg md:text-xl hover:bg-secondary transition-colors">Transmit</button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string, email: string, phone: string }>()
</script>
