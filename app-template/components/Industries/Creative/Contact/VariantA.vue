<template>
  <section class="py-48 bg-background text-primary px-12 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32">
      <div class="space-y-24">
        <h2 class="text-[12vw] font-black uppercase leading-[0.8] tracking-tighter text-secondary italic">SAY <br/>HELLO</h2>
        <div class="space-y-12">
          <div class="group cursor-pointer">
            <p class="text-xs font-black uppercase tracking-[0.5em] text-primary/20 mb-4">Email</p>
            <p class="text-4xl font-black uppercase tracking-tighter hover:text-accent transition-colors">{{ email }}</p>
          </div>
          <div class="group cursor-pointer">
            <p class="text-xs font-black uppercase tracking-[0.5em] text-primary/20 mb-4">HQ</p>
            <p class="text-4xl font-black uppercase tracking-tighter hover:text-accent transition-colors">Berlin, DE</p>
          </div>
        </div>
      </div>
      
      <form class="space-y-12 p-16 border-[12px] border-secondary rounded-[4rem]">
        <input type="text" placeholder="NAME / BRAND" class="w-full bg-transparent border-b-4 border-white/10 py-8 text-xl font-black uppercase placeholder:text-primary/10 focus:border-accent outline-none transition-colors" />
        <input type="email" placeholder="EMAIL" class="w-full bg-transparent border-b-4 border-white/10 py-8 text-xl font-black uppercase placeholder:text-primary/10 focus:border-accent outline-none transition-colors" />
        <textarea placeholder="THE MISSION" rows="4" class="w-full bg-transparent border-b-4 border-white/10 py-8 text-xl font-black uppercase placeholder:text-primary/10 focus:border-accent outline-none transition-colors"></textarea>
        <button class="w-full py-12 bg-accent text-background font-black uppercase tracking-[0.5em] text-xl hover:bg-secondary transition-colors">Transmit</button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string, email: string, phone: string }>()
</script>
