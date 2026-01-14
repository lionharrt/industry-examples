<template>
  <section class="py-48 bg-white text-[#0A0A0A] px-12 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-[#0A0A0A] border-8 border-[#0A0A0A] shadow-[40px_40px_0_0_#E60000]">
      <div v-for="(t, idx) in testimonials" :key="idx" class="p-24 bg-white group hover:bg-[#0A0A0A] hover:text-primary transition-all duration-700 relative overflow-hidden">
        <div class="absolute top-0 right-0 p-12 text-[15vw] font-black italic opacity-[0.03] group-hover:text-[#E60000] transition-colors italic">A</div>
        <div class="space-y-16 relative z-10">
          <div class="w-20 h-20 bg-[#E60000] text-black flex items-center justify-center skew-x-[-15deg]">
            <Quote :size="40" stroke-width="4" class="skew-x-[15deg]" />
          </div>
          <blockquote class="text-4xl font-black italic uppercase leading-none tracking-tighter group-hover:translate-x-8 transition-transform duration-700 italic">
            "{{ t.quote }}"
          </blockquote>
          <div class="pt-12 border-t-4 border-[#0A0A0A]/10 group-hover:border-white/20">
            <p class="text-3xl font-black italic uppercase text-[#E60000] italic">{{ t.author }}</p>
            <p class="text-[10px] font-black uppercase tracking-[1em] opacity-40 italic">{{ t.role }}</p>
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
