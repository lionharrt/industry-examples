<template>
  <section class="py-16 md:py-48 bg-white text-black px-6 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-black/10 overflow-hidden border border-black/10">
      <div v-for="(t, idx) in testimonials" :key="idx" class="p-8 md:p-24 bg-white hover:bg-black hover:text-primary transition-all duration-1000 flex flex-col justify-between group">
        <div class="text-5xl md:text-[8vw] font-black text-black/5 group-hover:text-primary/5 transition-colors leading-none">“</div>
        <blockquote class="text-2xl sm:text-3xl font-black uppercase leading-tight italic mb-8 md:mb-16 mt-4 md:mt-0">
          "{{ t.quote }}"
        </blockquote>
        <div class="flex items-center gap-4 md:gap-6">
          <div class="w-8 md:w-12 h-px bg-black group-hover:bg-white transition-colors"></div>
          <p class="text-[10px] md:text-xs font-black uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">{{ t.author }} / {{ t.role }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ testimonials: any[] }>()
</script>
