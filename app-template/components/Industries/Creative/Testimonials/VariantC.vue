<template>
  <section class="py-48 bg-background text-primary px-12 md:px-24">
    <div class="max-w-7xl mx-auto flex gap-12 overflow-x-auto hide-scrollbar pb-12">
      <div 
        v-for="(t, idx) in testimonials" 
        :key="idx" 
        class="min-w-[80vw] md:min-w-[50vw] p-16 bg-white/5 rounded-[4rem] flex flex-col justify-between border border-white/10 group hover:border-secondary transition-all duration-700"
      >
        <blockquote class="text-3xl font-black uppercase tracking-tighter italic">
          "{{ t.quote }}"
        </blockquote>
        <div class="flex items-center gap-6 mt-12">
          <div class="w-12 h-12 rounded-full bg-secondary"></div>
          <div>
            <p class="text-sm font-black uppercase tracking-widest">{{ t.author }}</p>
            <p class="text-[10px] uppercase tracking-widest text-primary/30">{{ t.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ testimonials: any[] }>()
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar { display: none; }
.hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>
