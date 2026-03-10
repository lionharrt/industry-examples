<template>
  <section class="h-screen bg-white text-black flex items-center justify-center px-6 md:px-12 text-center relative overflow-hidden border-y-8 md:border-y-[16px] border-black">
    <div class="absolute inset-0 z-0 opacity-[0.02] pointer-events-none">
      <div v-for="i in 15" :key="i" class="text-[40vw] md:text-[20vw] font-black uppercase tracking-tighter leading-none">CONTACT CONTACT</div>
    </div>
    
    <div class="relative z-10 space-y-8 md:space-y-12 w-full max-w-5xl">
      <h2 class="text-5xl sm:text-7xl font-black uppercase leading-none tracking-tighter italic border-b-4 md:border-b-8 border-[#dc143c]">ATELIER</h2>
      <div class="flex flex-col gap-8 md:gap-12 pt-8 md:pt-12 items-center">
        <a :href="'mailto:' + email" class="text-xl sm:text-4xl font-black uppercase tracking-tighter hover:text-[#dc143c] transition-colors break-words leading-tight italic px-4">{{ email }}</a>
        <div class="flex justify-center gap-8 md:gap-16">
          <div v-for="s in ['IG', 'TW', 'LI']" :key="s" class="text-[10px] md:text-xs font-black uppercase tracking-widest border-b border-black pb-1 md:pb-2 hover:border-[#dc143c] hover:text-[#dc143c] transition-all cursor-pointer leading-none">
            {{ s }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string, email: string, phone: string }>()
</script>
