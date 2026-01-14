<template>
  <div class="overflow-hidden relative w-full h-full bg-neutral-900">
    <img 
      ref="imgRef" 
      :src="optimizedSrc" 
      :alt="alt" 
      crossorigin="anonymous"
      class="w-full h-[120%] object-cover absolute top-[-10%] transition-opacity duration-700"
      :class="{ 'opacity-0': !isLoaded, 'opacity-100': isLoaded }"
      @load="isLoaded = true"
      @error="handleError"
    />
    <!-- Fallback if image fails -->
    <div v-if="hasError" class="absolute inset-0 flex items-center justify-center bg-neutral-800 text-neutral-500">
      <component :is="ImageOff" :size="48" stroke-width="1" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed, watch } from 'vue'
import { ImageOff } from 'lucide-vue-next'
import { useGsapAnimations } from '~/composables/useGsapAnimations'
import { useImage } from '~/composables/useImage'

const props = defineProps<{
  src: string
  alt?: string
  speed?: number
  width?: number
  height?: number
}>()

const imgRef = ref<HTMLElement | null>(null)
const isLoaded = ref(false)
const hasError = ref(false)
let animation: any = null

const { parallaxImage } = useGsapAnimations()
const { getUnsplashUrl } = useImage()

const optimizedSrc = computed(() => {
  return getUnsplashUrl(props.src, props.width || 1200, props.height)
})

// Reset loading state when source changes
watch(() => props.src, () => {
  isLoaded.value = false
  hasError.value = false
})

const handleError = () => {
  hasError.value = true
  isLoaded.value = false
}

onMounted(() => {
  if (imgRef.value) {
    // Check if image is already loaded (cached)
    if ((imgRef.value as HTMLImageElement).complete) {
      isLoaded.value = true
    }
    animation = parallaxImage(imgRef.value, props.speed || 0.2)
  }
})

onBeforeUnmount(() => {
  if (animation && animation.scrollTrigger) {
    animation.scrollTrigger.kill()
  }
  animation?.kill()
})
</script>
