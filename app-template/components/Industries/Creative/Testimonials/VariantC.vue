<template>
  <section class="py-16 md:py-48 bg-background text-primary px-6 md:px-24 overflow-hidden">
    <div class="max-w-7xl mx-auto flex gap-6 md:gap-12 overflow-x-auto hide-scrollbar pb-8 md:pb-12">
      <div 
        v-for="(t, idx) in testimonials" 
        :key="idx" 
        class="min-w-[80vw] md:min-w-[45vw] p-8 md:p-16 bg-white/5 rounded-3xl md:rounded-[4rem] flex flex-col justify-between border border-white/10 group hover:border-secondary transition-all duration-700"
      >
        <blockquote class="text-2xl md:text-3xl font-black uppercase tracking-tighter italic leading-snug whitespace-normal break-words">
          "{{ t.quote }}"
        </blockquote>
        <div class="flex items-center gap-4 md:gap-6 mt-8 md:mt-12">
          <div class="icon-container w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary flex-shrink-0"></div>
          <div>
            <p class="text-xs md:text-sm font-black uppercase tracking-widest leading-none">{{ t.author }}</p>
            <p class="text-[8px] md:text-[10px] uppercase tracking-widest text-primary/30 mt-1">{{ t.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ testimonials: any[] }>()
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar { display: none; }
.hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>
