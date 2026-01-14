<template>
  <footer class="py-16 bg-[#E60000] text-black px-12 md:px-24 flex flex-col md:flex-row justify-between items-center border-t-[20px] border-[#0A0A0A] shadow-[0_-30px_150px_rgba(230,0,0,0.4)]">
    <div class="flex items-center gap-12 mb-12 md:mb-0">
      <div class="px-12 py-4 bg-black text-[#E60000] font-black text-xl tracking-[1em] uppercase italic skew-x-[-15deg] shadow-2xl">
        <span class="inline-block skew-x-[15deg]">APEX_OS_X</span>
      </div>
      <p class="text-[10px] font-black uppercase tracking-[1.5em] opacity-60 italic italic">{{ copyright }}</p>
    </div>
    <div class="flex gap-16 text-black">
      <div v-for="social in ['_INSTA', '_PULSE', '_LOG']" :key="social" class="text-3xl font-black italic hover:scale-150 hover:text-primary transition-all cursor-pointer border-b-[10px] border-black hover:border-white pb-2 italic">
        {{ social }}
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{ copyright: string }>()
</script>
