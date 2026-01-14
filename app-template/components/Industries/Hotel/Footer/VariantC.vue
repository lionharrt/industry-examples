<template>
  <footer class="py-12 bg-black text-background px-12 md:px-24 flex justify-between items-center border-t-8 border-primary">
    <div class="flex items-center gap-8">
      <div class="px-8 py-3 bg-primary text-white font-black text-[10px] tracking-[0.5em] uppercase rounded-full shadow-2xl italic">WANDERER_SYSTEM</div>
      <p class="text-[10px] font-black uppercase tracking-widest opacity-40">{{ copyright }}</p>
    </div>
    <div class="flex gap-12">
      <div v-for="social in ['INSTA', 'SOUL', 'PATH']" :key="social" class="text-[10px] font-black opacity-40 hover:opacity-100 hover:text-accent transition-all cursor-pointer italic border-b border-transparent hover:border-white/10 pb-1">
        _{{ social }}
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{ copyright: string }>()
</script>
