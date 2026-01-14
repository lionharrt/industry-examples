<template>
  <section class="py-48 bg-accent text-background px-12 md:px-24">
    <div class="max-w-7xl mx-auto flex flex-col gap-12">
      <div 
        v-for="(t, idx) in testimonials" 
        :key="idx" 
        class="group p-12 border-4 border-background rounded-[4rem] hover:bg-background hover:text-accent transition-all duration-700"
      >
        <div class="flex items-start gap-12">
          <Quote :size="60" class="opacity-20 flex-shrink-0" />
          <div>
            <blockquote class="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-tight mb-12 italic">
              "{{ t.quote }}"
            </blockquote>
            <p class="text-xs font-black uppercase tracking-widest opacity-60">{{ t.author }} / {{ t.role }}</p>
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
