<template>
  <footer class="py-12 bg-accent text-black px-12 md:px-24 flex flex-col md:flex-row justify-between items-center border-t-8 border-black shadow-[0_-20px_100px_rgba(204,255,0,0.3)]">
    <div class="flex items-center gap-8 mb-8 md:mb-0">
      <div class="px-8 py-3 bg-black text-accent font-black text-xs tracking-[0.5em] uppercase italic skew-x-[-12deg]">
        <span class="inline-block skew-x-[12deg]">KINETIC_OS_2.0</span>
      </div>
      <p class="text-[10px] font-black uppercase tracking-widest opacity-40 italic">{{ copyright }}</p>
    </div>
    <div class="flex gap-12">
      <div v-for="social in ['_INSTA', '_PULSE', '_LOG']" :key="social" class="text-xl font-black italic hover:scale-125 transition-all cursor-pointer border-b-4 border-black hover:border-white/20 pb-1">
        {{ social }}
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{ copyright: string }>()
</script>
