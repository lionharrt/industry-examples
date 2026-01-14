<template>
  <section class="py-48 bg-white text-primary px-12 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-black/10 rounded-[4rem] overflow-hidden shadow-2xl border border-black/5">
      <div v-for="(t, idx) in testimonials" :key="idx" class="p-24 bg-white hover:bg-background transition-all duration-1000 flex flex-col justify-between group border border-black/5">
        <div class="space-y-12">
          <div class="text-[8vw] font-black text-primary/5 italic select-none group-hover:text-primary/10 transition-colors">VOICE</div>
          <blockquote class="text-3xl font-black uppercase leading-tight tracking-tighter">
            "{{ t.quote }}"
          </blockquote>
        </div>
        <div class="mt-16 flex items-center gap-8 pt-12 border-t border-black/5">
          <div class="w-16 h-16 rounded-full bg-background border border-black/10 flex items-center justify-center">
            <Quote :size="24" class="text-accent" />
          </div>
          <div>
            <p class="text-xl font-black uppercase tracking-tighter">{{ t.author }}</p>
            <p class="text-[10px] font-black uppercase tracking-[0.5em] text-accent mt-1 italic">{{ t.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Quote } from 'lucide-vue-next'
defineProps<{ testimonials: any[] }>()
</script>
