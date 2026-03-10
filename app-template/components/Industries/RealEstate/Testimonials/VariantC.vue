<template>
  <section class="py-24 md:py-48 bg-background text-primary px-6 md:px-24 border-y border-primary/5">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
      <div v-for="(t, idx) in testimonials" :key="idx" class="p-8 md:p-24 bg-primary/5 rounded-[3rem] md:rounded-[4rem] border border-primary/10 shadow-xl flex flex-col justify-between group md:hover:-translate-y-4 transition-all duration-1000">
        <div class="space-y-8 md:space-y-12">
          <div class="flex gap-2">
            <Star v-for="i in 5" :key="i" :size="16" class="text-accent fill-current" />
          </div>
          <blockquote class="text-xl md:text-3xl font-medium leading-relaxed italic text-primary/60 group-hover:text-primary transition-colors">
            "{{ t.quote }}"
          </blockquote>
        </div>
        <div class="mt-8 md:mt-16 flex items-center gap-6 md:gap-8 border-t border-primary/10 pt-8 md:pt-12">
          <div class="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-accent p-1">
            <div class="w-full h-full rounded-full bg-primary/10"></div>
          </div>
          <div>
            <p class="text-lg md:text-xl font-bold uppercase tracking-tighter">{{ t.author }}</p>
            <p class="text-[10px] md:text-xs font-black uppercase tracking-widest text-primary/40 mt-1">{{ t.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Star } from 'lucide-vue-next'
defineProps<{ testimonials: any[] }>()
</script>
