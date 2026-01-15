<template>
  <footer class="py-12 md:py-24 bg-black text-white px-6 md:px-24 flex flex-col md:flex-row justify-between items-center border-t-[16px] md:border-t-[32px] border-accent gap-12 md:gap-0">
    <div class="flex flex-col md:flex-row items-center gap-8 md:gap-16">
      <div class="px-8 md:px-16 py-4 md:py-6 bg-accent text-black font-black text-xl md:text-4xl tracking-tighter uppercase italic border-[8px] border-white">
        KINETIC_OS_2.0
      </div>
      <p class="text-xs md:text-2xl font-black uppercase tracking-widest text-accent italic">{{ copyright }}</p>
    </div>
    <div class="flex gap-8 md:gap-16">
      <div v-for="social in ['_INSTA', '_PULSE', '_LOG']" :key="social" class="text-xl md:text-5xl font-black italic hover:text-accent transition-all cursor-pointer border-b-[8px] border-white hover:border-accent pb-2">
        {{ social }}
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{ copyright: string }>()
</script>
