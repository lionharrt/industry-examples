<template>
  <section class="py-16 md:py-48 bg-[#0A0A0A] text-white px-6 md:px-24 overflow-hidden relative border-y-8 md:border-y-[16px] border-[#E60000]">
    <div class="absolute inset-0 z-0 opacity-10">
      <div v-for="i in 10" :key="i" class="text-[15vw] font-black italic uppercase leading-none opacity-20 whitespace-nowrap -translate-x-12" :style="{ color: i % 2 === 0 ? '#E60000' : 'white' }">
        _APEX_FEEDBACK_
      </div>
    </div>

    <div class="max-w-5xl mx-auto space-y-12 md:space-y-24 relative z-10">
      <div v-for="(t, idx) in testimonials" :key="idx" class="group testimonial-block border-l-8 md:border-l-[16px] border-[#E60000] pl-6 md:pl-16 py-6 md:py-12 hover:bg-white/5 transition-colors shadow-[8px_8px_0_0_#ffffff] mb-8 md:mb-16">
        <blockquote class="text-xl sm:text-3xl md:text-5xl font-black italic uppercase leading-tight tracking-tighter mb-8 md:mb-12 group-hover:text-[#E60000] transition-colors duration-500 italic text-white">
          "{{ t.quote }}"
        </blockquote>
        <div class="flex items-center gap-6 md:gap-12 text-left">
          <div class="w-12 h-12 md:w-20 md:h-20 bg-[#E60000] text-black flex items-center justify-center font-black italic text-lg md:text-3xl skew-x-[-15deg] border-4 border-white shadow-lg">
            <span class="skew-x-[15deg]">0{{ idx + 1 }}</span>
          </div>
          <div>
            <p class="text-xl md:text-3xl font-black italic uppercase tracking-tighter text-white">{{ t.author }}</p>
            <p class="text-[10px] md:text-base font-black uppercase tracking-[0.3em] text-[#E60000] italic">{{ t.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useGsapAnimations } from '~/composables/useGsapAnimations'

defineProps<{ testimonials: any[] }>()
const { staggerReveal } = useGsapAnimations()

onMounted(() => {
  staggerReveal('.testimonial-block', 0.3)
})
</script>
