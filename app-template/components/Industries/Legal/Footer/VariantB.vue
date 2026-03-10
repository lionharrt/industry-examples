<template>
  <footer class="py-8 md:py-12 bg-background text-primary px-6 md:px-24 flex flex-col md:flex-row justify-between items-center border-t border-primary/10 text-center gap-8">
    <div class="flex flex-col md:flex-row items-center gap-6 md:gap-8">
      <div class="px-6 md:px-8 py-3 border border-primary/20 font-black text-[8px] md:text-[10px] tracking-[0.3em] md:tracking-[0.5em] text-primary uppercase italic leading-none">VANGUARD_OFFICIAL_CHANNEL</div>
      <p class="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-primary opacity-40 italic leading-none">{{ copyright }}</p>
    </div>
    <div class="flex gap-8 md:gap-12 text-accent">
      <div v-for="social in ['LINKED', 'LEX', 'PATH']" :key="social" class="text-[8px] md:text-[10px] font-black opacity-40 hover:opacity-100 hover:text-primary transition-all cursor-pointer italic underline decoration-current decoration-offset-4">
        {{ social }}
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{ copyright: string }>()
</script>
