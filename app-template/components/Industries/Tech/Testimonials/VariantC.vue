<template>
  <section class="py-48 bg-background text-primary px-12 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 rounded-[3rem] overflow-hidden">
      <div v-for="(t, idx) in testimonials" :key="idx" class="p-16 bg-background hover:bg-[#161B22] transition-all duration-700 border border-white/5 flex flex-col justify-between group">
        <div class="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-16 text-secondary group-hover:scale-110 transition-transform">
          <Terminal :size="32" />
        </div>
        <blockquote class="text-3xl font-bold italic leading-relaxed text-primary/60 group-hover:text-primary transition-colors">
          "{{ t.quote }}"
        </blockquote>
        <div class="mt-16 pt-12 border-t border-white/5 flex items-center gap-6">
          <div class="w-12 h-12 rounded-full overflow-hidden border border-accent p-1">
            <div class="w-full h-full rounded-full bg-accent/20"></div>
          </div>
          <div>
            <p class="text-sm font-black uppercase tracking-widest">{{ t.author }}</p>
            <p class="text-[10px] uppercase tracking-widest text-primary/20">{{ t.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Terminal } from 'lucide-vue-next'
defineProps<{ testimonials: any[] }>()
</script>
