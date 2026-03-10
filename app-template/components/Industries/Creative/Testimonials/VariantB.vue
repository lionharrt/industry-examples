<template>
  <section class="py-16 md:py-48 bg-accent text-background px-6 md:px-24">
    <div class="max-w-7xl mx-auto flex flex-col gap-8 md:gap-12">
      <div 
        v-for="(t, idx) in testimonials" 
        :key="idx" 
        class="group p-8 md:p-12 border-2 md:border-4 border-background rounded-3xl md:rounded-[4rem] hover:bg-background hover:text-accent transition-all duration-700"
      >
        <div class="flex flex-col md:flex-row items-start gap-6 md:gap-12">
          <Quote :size="48" class="opacity-20 flex-shrink-0 md:hidden" />
          <Quote :size="60" class="opacity-20 flex-shrink-0 hidden md:block" />
          <div>
            <blockquote class="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-tight mb-8 md:mb-12 italic">
              "{{ t.quote }}"
            </blockquote>
            <p class="text-[10px] md:text-xs font-black uppercase tracking-widest opacity-60">{{ t.author }} / {{ t.role }}</p>
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
