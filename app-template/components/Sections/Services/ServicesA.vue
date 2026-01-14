<template>
  <section class="py-32 bg-background px-12">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-3 gap-12">
        <div v-for="(service, idx) in services" :key="idx" class="service-card p-12 bg-white/5 border border-white/10 rounded-3xl hover:border-accent transition-colors">
          <h3 class="text-2xl font-bold mb-4 uppercase tracking-wider">{{ service.title }}</h3>
          <p class="text-primary/60 leading-relaxed">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useGsapAnimations } from '~/composables/useGsapAnimations'

defineProps<{ services: any[] }>()
const { staggerReveal } = useGsapAnimations()

onMounted(() => {
  staggerReveal('.service-card', 0.2)
})
</script>
