<template>
  <footer class="py-12 md:py-16 bg-[#E60000] text-black px-6 md:px-24 flex flex-col md:flex-row justify-between items-center border-t-8 md:border-t-[20px] border-[#0A0A0A] shadow-[0_-30px_150px_rgba(230,0,0,0.4)] gap-8 md:gap-0">
    <div class="flex flex-col md:flex-row items-center gap-6 md:gap-12 text-center md:text-left">
      <div class="px-8 md:px-12 py-3 md:py-4 bg-black text-[#E60000] font-black text-lg md:text-xl tracking-[0.5em] md:tracking-[1em] uppercase italic skew-x-[-15deg] shadow-2xl">
        <span class="inline-block skew-x-[15deg]">APEX_OS_X</span>
      </div>
      <p class="text-[8px] md:text-[10px] font-black uppercase tracking-[1em] md:tracking-[1.5em] opacity-60 italic">{{ copyright }}</p>
    </div>
    <div class="flex gap-8 md:gap-16 text-black flex-wrap justify-center">
      <div v-for="social in ['_INSTA', '_PULSE', '_LOG']" :key="social" class="text-xl md:text-3xl font-black italic hover:scale-125 transition-all cursor-pointer border-b-4 md:border-b-[10px] border-black hover:border-white pb-1 italic leading-none">
        {{ social }}
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{ copyright: string }>()
</script>
