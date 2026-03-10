<template>
  <section ref="sectionRef" class="bg-black text-white overflow-hidden relative">
    <!-- Title container (non-pinned or part of pinned) -->
    <div class="px-6 md:px-24 pt-24 pb-12 relative z-10">
      <div class="flex items-center gap-6 md:gap-12">
        <h2 class="text-xl md:text-2xl font-black uppercase tracking-[0.2em] md:tracking-[0.5em] text-white">Selected_Works</h2>
        <div class="h-1 flex-1 bg-[#dc143c]"></div>
      </div>
    </div>

    <!-- Pinned horizontal section -->
    <div ref="pinContainer" class="h-screen flex flex-col justify-center relative bg-black">
      <div ref="lookbook" class="flex gap-12 md:gap-24 px-12 md:px-48 items-center relative z-10">
        <div 
          v-for="(item, idx) in items" 
          :key="idx" 
          class="portfolio-card h-[65vh] md:h-[75vh] aspect-[3/4] flex-shrink-0 relative group"
        >
          <!-- Image Layer with Overflow Hidden -->
          <div class="absolute inset-0 overflow-hidden rounded-2xl md:rounded-[3rem] border-2 border-white/10 bg-neutral-900 shadow-2xl">
            <img 
              :src="item.image + '?auto=format&fit=crop&w=1200'" 
              class="portfolio-img absolute inset-0 w-full h-[130%] object-cover top-[-15%] transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-1000"></div>
            <div class="absolute inset-0 border-[12px] md:border-[24px] border-white/0 group-hover:border-white/5 transition-all duration-1000 pointer-events-none"></div>
          </div>

          <!-- Text Layer -->
          <div class="absolute bottom-[3cqi] md:bottom-[5cqi] left-0 pointer-events-none overflow-hidden pt-24 md:pt-48 portfolio-text-container">
            <div class="px-[3cqi] md:px-[5cqi] pb-[1cqi] md:pb-[2cqi]">
              <h3 class="portfolio-title font-black uppercase tracking-tighter text-white translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-expo leading-[0.8] drop-shadow-2xl pointer-events-auto">{{ item.title }}</h3>
            </div>
          </div>

          <!-- Circle Button (positioned absolutely, independent of text) -->
          <div class="portfolio-circle-pos absolute pointer-events-none">
            <div class="portfolio-circle rounded-full border-white flex items-center justify-center translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-100 ease-expo bg-black/20 backdrop-blur-sm pointer-events-auto">
              <Plus class="portfolio-icon text-[#dc143c]" />
            </div>
          </div>
        </div>
      </div>

      <!-- Decorative background text -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black text-white/[0.02] pointer-events-none select-none italic whitespace-nowrap z-0">
        ARCHIVE_01
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Plus } from 'lucide-vue-next'
import { ref, onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

defineProps<{ items: any[] }>()
const lookbook = ref(null)
const sectionRef = ref(null)
const pinContainer = ref(null)

onMounted(async () => {
  await nextTick()
  if (!lookbook.value || !pinContainer.value) return

  const scrollWidth = lookbook.value.scrollWidth - window.innerWidth + (window.innerWidth > 768 ? 200 : 100)

  // Horizontal scroll
  gsap.to(lookbook.value, {
    x: -scrollWidth,
    ease: "none",
    scrollTrigger: {
      trigger: pinContainer.value,
      start: "top top",
      end: () => `+=${scrollWidth}`,
      scrub: 1,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      refreshPriority: 1
    }
  })

  // Subtle internal parallax for images during horizontal scroll
  const images = lookbook.value.querySelectorAll('.portfolio-img')
  images.forEach(img => {
    gsap.fromTo(img, 
      { yPercent: -10 },
      {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: pinContainer.value,
          start: "top top",
          end: () => `+=${scrollWidth}`,
          scrub: 1
        }
      }
    )
  })
})
</script>

<style scoped>
.ease-expo { transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1); }

/* Container query support for responsive text/circle based on card size */
.portfolio-card {
  container-type: inline-size;
}

.portfolio-title {
  font-size: clamp(1.5rem, 18cqi, 5rem);
}

.portfolio-circle {
  width: clamp(2.5rem, 12cqi, 5rem);
  height: clamp(2.5rem, 12cqi, 5rem);
  border-width: clamp(2px, 1cqi, 4px);
  border-style: solid;
}

.portfolio-icon {
  width: clamp(1rem, 5cqi, 2rem);
  height: clamp(1rem, 5cqi, 2rem);
}

.portfolio-text-container {
  right: clamp(3rem, 18cqi, 7rem); /* Leave space for circle */
}

.portfolio-circle-pos {
  bottom: clamp(0.75rem, 4cqi, 2.5rem);
  right: clamp(0.75rem, 4cqi, 2.5rem);
}
</style>
