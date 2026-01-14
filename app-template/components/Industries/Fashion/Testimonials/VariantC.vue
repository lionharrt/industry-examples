<template>
  <section class="py-48 bg-white text-black px-12 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-black/10 overflow-hidden">
      <div v-for="(t, idx) in testimonials" :key="idx" class="p-24 bg-white hover:bg-black hover:text-primary transition-all duration-1000 flex flex-col justify-between group">
        <div class="text-[8vw] font-black text-black/5 group-hover:text-primary/5 transition-colors">“</div>
        <blockquote class="text-3xl font-black uppercase leading-tight italic mb-16">
          "{{ t.quote }}"
        </blockquote>
        <div class="flex items-center gap-6">
          <div class="w-12 h-px bg-black group-hover:bg-white transition-colors"></div>
          <p class="text-xs font-black uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">{{ t.author }} / {{ t.role }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ testimonials: any[] }>()
</script>
