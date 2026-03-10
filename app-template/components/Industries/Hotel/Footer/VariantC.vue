<template>
  <footer class="py-8 md:py-12 bg-black text-background px-6 md:px-24 flex flex-col md:flex-row justify-between items-center border-t-8 border-primary gap-6 text-center md:text-left">
    <div class="flex flex-col md:flex-row items-center gap-4 md:gap-8">
      <div class="px-6 md:px-8 py-2 md:py-3 bg-primary text-white font-black text-[10px] tracking-[0.3em] md:tracking-[0.5em] uppercase rounded-full italic leading-none">WANDERER_SYSTEM</div>
      <p class="text-[8px] md:text-[10px] font-black uppercase tracking-widest opacity-40 leading-none">{{ copyright }}</p>
    </div>
    <div class="flex gap-8 md:gap-12">
      <div v-for="social in ['INSTA', 'SOUL', 'PATH']" :key="social" class="text-[10px] font-black opacity-40 hover:opacity-100 hover:text-accent transition-all cursor-pointer italic border-b border-transparent hover:border-white/10 pb-1 leading-none">
        _{{ social }}
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{ copyright: string }>()
</script>
