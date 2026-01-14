<template>
  <section class="py-48 bg-background text-primary overflow-hidden relative">
    <!-- Kinetic text background -->
    <div ref="bgText" class="absolute inset-0 flex items-center whitespace-nowrap opacity-5 pointer-events-none select-none">
      <div v-for="i in 10" :key="i" class="text-[30vw] font-black uppercase tracking-tighter">FEEDBACK FEEDBACK</div>
    </div>
    
    <div class="max-w-7xl mx-auto px-12 relative z-10">
      <div v-for="(t, idx) in testimonials" :key="idx" class="mb-32 last:mb-0 group cursor-default">
        <p class="text-xs font-black uppercase tracking-[0.8em] text-accent mb-8">Review 0{{ idx + 1 }}</p>
        <blockquote class="text-[6vw] font-black uppercase leading-none tracking-tighter text-primary group-hover:text-secondary transition-colors duration-500">
          "{{ t.quote }}"
        </blockquote>
        <div class="mt-12 flex items-center gap-6">
          <div class="w-12 h-px bg-white/20"></div>
          <p class="text-sm font-black uppercase tracking-widest text-primary/40">{{ t.author }} — {{ t.role }}</p>
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
