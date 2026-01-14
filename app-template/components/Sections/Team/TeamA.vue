<template>
  <section class="py-32 bg-background px-12">
    <div class="max-w-6xl mx-auto grid grid-cols-2 gap-12">
      <div v-for="(member, idx) in team" :key="idx" class="team-card text-center">
        <div class="aspect-[3/4] overflow-hidden rounded-3xl mb-8">
          <ParallaxImage :src="member.image + '?auto=format&fit=crop&w=800'" :alt="member.name" />
        </div>
        <h3 class="text-2xl font-bold uppercase tracking-widest mb-2">{{ member.name }}</h3>
        <p class="text-accent uppercase tracking-widest text-xs font-bold">{{ member.role }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ team: any[] }>()
</script>
