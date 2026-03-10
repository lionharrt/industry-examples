<template>
  <section class="py-16 md:py-48 bg-background text-primary overflow-hidden relative">
    <!-- Kinetic text background -->
    <div ref="bgText" class="absolute inset-0 flex items-center whitespace-nowrap opacity-5 pointer-events-none select-none">
      <div v-for="i in 10" :key="i" class="text-[40vw] md:text-[30vw] font-black uppercase tracking-tighter leading-none">FEEDBACK FEEDBACK</div>
    </div>
    
    <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
      <div v-for="(t, idx) in testimonials" :key="idx" class="mb-16 md:mb-32 last:mb-0 group cursor-default text-center md:text-left">
        <p class="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] md:tracking-[0.8em] text-accent mb-6 md:mb-8">Review 0{{ idx + 1 }}</p>
        <blockquote class="text-4xl sm:text-6xl md:text-[6vw] font-black uppercase leading-[0.9] tracking-tighter text-primary group-hover:text-secondary transition-colors duration-500 leading-none">
          "{{ t.quote }}"
        </blockquote>
        <div class="mt-8 md:mt-12 flex items-center gap-4 md:gap-6 justify-center md:justify-start">
          <div class="w-8 md:w-12 h-px bg-white/20"></div>
          <p class="text-xs md:text-sm font-black uppercase tracking-widest text-primary/40">{{ t.author }} — {{ t.role }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

defineProps<{ testimonials: any[] }>()
const bgText = ref(null)

onMounted(() => {
  gsap.to(bgText.value, {
    xPercent: -50,
    repeat: -1,
    duration: 60,
    ease: "none"
  })
})
</script>
