<template>
  <section class="py-32 bg-background px-12">
    <div class="space-y-px">
      <div v-for="(member, idx) in team" :key="idx" class="group py-12 border-b border-white/10 flex items-center justify-between relative cursor-pointer">
        <div class="z-10">
          <h3 class="text-5xl font-black uppercase tracking-tighter group-hover:translate-x-8 transition-transform duration-500">{{ member.name }}</h3>
          <p class="text-accent uppercase tracking-widest text-xs font-bold mt-2 group-hover:translate-x-8 transition-transform duration-500">{{ member.role }}</p>
        </div>
        <div class="absolute right-0 top-1/2 -translate-y-1/2 w-48 aspect-square rounded-full overflow-hidden opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500 rotate-12 group-hover:rotate-0">
          <img :src="member.image" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ team: any[] }>()
</script>
