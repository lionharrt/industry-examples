<template>
  <section class="py-48 bg-background text-primary px-12 md:px-24">
    <div class="max-w-7xl mx-auto flex flex-col items-center text-center">
      <div class="w-24 h-24 rounded-full border border-accent flex items-center justify-center mb-16 shadow-[0_0_50px_rgba(106,13,173,0.2)]">
        <div class="w-4 h-4 bg-accent rounded-full animate-ping"></div>
      </div>
      <h2 class="text-[8vw] font-black uppercase leading-none tracking-tighter mb-16">{{ title }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 text-left w-full mt-24">
        <div v-for="i in 3" :key="i" class="p-12 border border-white/5 rounded-3xl bg-white/[0.02] hover:border-secondary/50 transition-colors">
          <p class="text-[10px] font-black uppercase tracking-[0.5em] text-secondary mb-8">Node 0{{ i }}</p>
          <p class="text-primary/60 leading-relaxed">
            {{ i === 1 ? 'Distributed intelligence across 40+ regions.' : i === 2 ? 'Security that scales with your ambition.' : 'Pure, unadulterated performance.' }}
          </p>
        </div>
      </div>
      <p class="max-w-3xl mt-24 text-2xl font-medium text-primary/40 leading-relaxed italic">
        "{{ content }}"
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  content: string
}>()
</script>
