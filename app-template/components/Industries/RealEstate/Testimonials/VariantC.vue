<template>
  <section class="py-48 bg-gray-50 text-background px-12 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      <div v-for="(t, idx) in testimonials" :key="idx" class="p-16 md:p-24 bg-white rounded-[4rem] border border-gray-100 shadow-xl flex flex-col justify-between group hover:-translate-y-4 transition-all duration-1000">
        <div class="space-y-12">
          <div class="flex gap-2">
            <Star v-for="i in 5" :key="i" :size="16" class="text-accent fill-current" />
          </div>
          <blockquote class="text-3xl font-medium leading-relaxed italic text-secondary group-hover:text-background transition-colors">
            "{{ t.quote }}"
          </blockquote>
        </div>
        <div class="mt-16 flex items-center gap-8 border-t border-gray-50 pt-12">
          <div class="w-20 h-20 rounded-full overflow-hidden border-2 border-accent p-1">
            <div class="w-full h-full rounded-full bg-gray-100"></div>
          </div>
          <div>
            <p class="text-xl font-bold uppercase tracking-tighter">{{ t.author }}</p>
            <p class="text-xs font-black uppercase tracking-widest text-secondary mt-1">{{ t.role }}</p>
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
