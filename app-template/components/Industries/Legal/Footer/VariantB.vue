<template>
  <footer class="py-12 bg-[#FAF9F6] text-background px-12 md:px-24 flex flex-col md:flex-row justify-between items-center border-t border-background/10">
    <div class="flex items-center gap-8 mb-8 md:mb-0">
      <div class="px-8 py-3 border border-background font-black text-[10px] tracking-[0.5em] uppercase italic">VANGUARD_OFFICIAL_CHANNEL</div>
      <p class="text-[10px] font-black uppercase tracking-widest opacity-40 italic">{{ copyright }}</p>
    </div>
    <div class="flex gap-12 text-accent">
      <div v-for="social in ['LINKED', 'LEX', 'PATH']" :key="social" class="text-[10px] font-black opacity-40 hover:opacity-100 hover:text-background transition-all cursor-pointer italic underline decoration-current decoration-offset-4">
        {{ social }}
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{ copyright: string }>()
</script>
