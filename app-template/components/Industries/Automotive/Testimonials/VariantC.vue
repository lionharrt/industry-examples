<template>
  <section class="py-16 md:py-32 bg-white text-[#0A0A0A] px-6 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 border-8 md:border-[16px] border-black p-6 md:p-12 bg-[#B4B4B4] shadow-[12px_12px_0_0_#E60000]">
      <div v-for="(t, idx) in testimonials" :key="idx" class="p-6 md:p-10 bg-white group hover:bg-[#0A0A0A] hover:text-primary transition-all duration-700 relative overflow-hidden border-4 md:border-8 border-black flex flex-col justify-between">
        <div class="absolute top-0 right-0 p-4 md:p-8 text-6xl md:text-[8vw] font-black italic opacity-[0.03] group-hover:text-[#E60000] transition-colors italic leading-none">A</div>
        <div class="space-y-6 md:space-y-10 relative z-10">
          <div class="w-14 h-14 md:w-20 md:h-20 bg-[#E60000] text-black flex items-center justify-center skew-x-[-15deg] border-4 border-black group-hover:border-white shadow-xl">
            <Quote :size="28" stroke-width="4" class="skew-x-[15deg] md:hidden" />
            <Quote :size="40" stroke-width="4" class="skew-x-[15deg] hidden md:block" />
          </div>
          <blockquote class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black italic uppercase leading-tight tracking-tighter group-hover:translate-x-4 transition-transform duration-700 italic">
            "{{ t.quote }}"
          </blockquote>
        </div>
        <div class="pt-6 md:pt-10 border-t-4 border-[#0A0A0A]/10 group-hover:border-white/20 relative z-10">
          <p class="text-xl md:text-2xl lg:text-3xl font-black italic uppercase text-[#E60000] italic">{{ t.author }}</p>
          <p class="text-[10px] md:text-xs font-black uppercase tracking-widest opacity-40 italic">{{ t.role }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Quote } from 'lucide-vue-next'
defineProps<{ testimonials: any[] }>()
</script>
