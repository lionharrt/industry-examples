<template>
  <section class="py-48 bg-background text-primary px-12 md:px-24 relative overflow-hidden">
    <!-- Large background watermark -->
    <div class="absolute -right-24 top-0 text-[40vw] font-black opacity-[0.03] select-none pointer-events-none">ESTATE</div>
    
    <div class="max-w-4xl mx-auto space-y-24 relative z-10">
      <h2 class="text-[8vw] font-bold uppercase leading-none tracking-tighter text-accent">{{ title }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-24">
        <p class="text-xl font-medium leading-relaxed italic">
          "{{ content }}"
        </p>
        <div class="space-y-12">
          <div v-for="val in values" :key="val.title" class="space-y-4 group cursor-default">
            <p class="text-xs font-black uppercase tracking-[0.5em] text-accent group-hover:translate-x-2 transition-transform">{{ val.title }}</p>
            <p class="text-primary/40 text-sm leading-relaxed">{{ val.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  content: string
}>()
const values = [
  { title: 'Discretion', desc: 'Unwavering commitment to privacy and exclusivity.' },
  { title: 'Precision', desc: 'Strategic analysis for unparalleled market advantage.' }
]
</script>
