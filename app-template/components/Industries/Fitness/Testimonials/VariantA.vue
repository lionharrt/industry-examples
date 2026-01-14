<template>
  <section class="py-48 bg-black text-primary px-12 md:px-24 overflow-hidden relative">
    <div class="absolute inset-0 z-0 opacity-10">
      <div v-for="i in 10" :key="i" class="text-[20vw] font-black italic uppercase leading-none opacity-20 whitespace-nowrap -translate-x-12" :style="{ color: i % 2 === 0 ? '#CCFF00' : 'white' }">
        _TESTIMONY_CORE_
      </div>
    </div>

    <div class="max-w-4xl mx-auto space-y-24 relative z-10">
      <div v-for="(t, idx) in testimonials" :key="idx" class="group testimonial-block border-l-8 border-accent pl-12 py-8">
        <blockquote class="text-4xl md:text-6xl font-black italic uppercase leading-none tracking-tighter mb-12 group-hover:text-accent transition-colors duration-500">
          "{{ t.quote }}"
        </blockquote>
        <div class="flex items-center gap-8">
          <div class="w-16 h-16 rounded-full bg-accent text-black flex items-center justify-center font-black italic">0{{ idx + 1 }}</div>
          <div>
            <p class="text-xl font-black italic uppercase">{{ t.author }}</p>
            <p class="text-xs font-black uppercase tracking-widest text-accent italic">{{ t.role }}</p>
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
