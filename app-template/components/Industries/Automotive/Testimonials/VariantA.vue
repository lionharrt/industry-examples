<template>
  <section class="py-48 bg-[#0A0A0A] text-primary px-12 md:px-24 overflow-hidden relative">
    <div class="absolute inset-0 z-0 opacity-10">
      <div v-for="i in 10" :key="i" class="text-[20vw] font-black italic uppercase leading-none opacity-20 whitespace-nowrap -translate-x-12" :style="{ color: i % 2 === 0 ? '#E60000' : 'white' }">
        _APEX_FEEDBACK_
      </div>
    </div>

    <div class="max-w-5xl mx-auto space-y-24 relative z-10">
      <div v-for="(t, idx) in testimonials" :key="idx" class="group testimonial-block border-l-[15px] border-[#E60000] pl-16 py-8 hover:bg-white/5 transition-colors">
        <blockquote class="text-4xl md:text-7xl font-black italic uppercase leading-[0.9] tracking-tighter mb-12 group-hover:text-[#E60000] transition-colors duration-500 italic">
          "{{ t.quote }}"
        </blockquote>
        <div class="flex items-center gap-12">
          <div class="w-20 h-20 bg-[#E60000] text-black flex items-center justify-center font-black italic text-2xl skew-x-[-15deg]">
            <span class="skew-x-[15deg]">0{{ idx + 1 }}</span>
          </div>
          <div>
            <p class="text-2xl font-black italic uppercase">{{ t.author }}</p>
            <p class="text-[10px] font-black uppercase tracking-[1em] text-[#E60000] italic">{{ t.role }}</p>
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
