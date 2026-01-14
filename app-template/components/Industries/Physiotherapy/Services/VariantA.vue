<template>
  <section class="py-24 bg-[#f8f9fa]">
    <div class="max-w-7xl mx-auto px-6">
      <div class="mb-16 space-y-4">
        <h2 class="text-4xl font-serif text-primary">Specialized Care</h2>
        <div class="w-20 h-1 bg-accent"></div>
      </div>
      
      <div class="grid md:grid-cols-3 gap-8">
        <div 
          v-for="(service, index) in services" 
          :key="service.name"
          class="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 group service-card opacity-0 translate-y-10"
          :style="{ transitionDelay: index * 100 + 'ms' }"
        >
          <div class="mb-8 text-accent group-hover:scale-110 transition-transform duration-500">
            <!-- Simplified Icon Placeholder -->
            <svg viewBox="0 0 24 24" class="w-12 h-12 fill-none stroke-current" stroke-width="1.5">
              <path v-if="service.icon === 'Hands'" d="M7 11V7a5 5 0 0 1 10 0v4m-5-4v4m-3 0v3a3 3 0 0 0 6 0v-3m-6 3h6" />
              <path v-else-if="service.icon === 'Activity'" d="M22 12h-4l-3 9L9 3l-3 9H2" />
              <path v-else d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l5 5v11a2 2 0 0 1-2 2z" />
            </svg>
          </div>
          <h3 class="text-2xl font-serif text-primary mb-4">{{ service.name }}</h3>
          <p class="text-primary/60 leading-relaxed">
            {{ service.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

defineProps<{ services: Array<{ name: string, description: string, icon: string }> }>()

onMounted(() => {
  gsap.to('.service-card', {
    scrollTrigger: {
      trigger: '.service-card',
      start: 'top 85%',
    },
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out'
  })
})
</script>
