<template>
  <section class="py-48 bg-black text-primary overflow-hidden">
    <div class="px-12 md:px-24 mb-32">
      <h2 class="text-xs font-black uppercase tracking-[1em] text-primary/20 mb-8">Selected_Works</h2>
      <div class="h-px w-full bg-white/10"></div>
    </div>

    <div ref="lookbook" class="flex gap-12 px-12 md:px-24">
      <div 
        v-for="(item, idx) in items" 
        :key="idx" 
        class="min-w-[80vw] md:min-w-[45vw] aspect-[3/4] relative group rounded-2xl overflow-hidden shadow-2xl"
      >
        <ParallaxImage :src="item.image + '?auto=format&fit=crop&w=1200'" speed="0.1" />
        <div class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
        <div class="absolute bottom-12 left-12 right-12 flex justify-between items-end overflow-hidden">
          <h3 class="text-[6vw] font-black uppercase tracking-tighter text-primary translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-expo">{{ item.title }}</h3>
          <div class="w-16 h-16 rounded-full border border-white flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-700 delay-100 ease-expo">
            <Plus :size="24" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Plus } from 'lucide-vue-next'
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

defineProps<{ items: any[] }>()
const lookbook = ref(null)

onMounted(() => {
  gsap.to(lookbook.value, {
    x: () => -(lookbook.value.scrollWidth - window.innerWidth + 200),
    ease: "none",
    scrollTrigger: {
      trigger: lookbook.value,
      start: "top center",
      end: () => `+=${lookbook.value.scrollWidth}`,
      scrub: 1,
      pin: true,
      invalidateOnRefresh: true
    }
  })
})
</script>

<style scoped>
.ease-expo { transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1); }
</style>
