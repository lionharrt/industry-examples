<template>
  <div ref="container" class="overflow-hidden">
    <div ref="textElement" :class="props.class">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { useGsapAnimations } from '~/composables/useGsapAnimations'

const props = defineProps<{
  class?: string
}>()

const textElement = ref<HTMLElement | null>(null)
let splitResult: any = null
const { textReveal } = useGsapAnimations()

onMounted(async () => {
  if (textElement.value) {
    // Wait for next tick to ensure slot content is rendered
    await nextTick()
    const result = textReveal(textElement.value)
    if (result) {
      splitResult = result
    }
  }
})

onBeforeUnmount(() => {
  if (splitResult) {
    if (splitResult.animation) {
      if (splitResult.animation.scrollTrigger) {
        splitResult.animation.scrollTrigger.kill()
      }
      splitResult.animation.kill()
    }
    if (splitResult.split) {
      splitResult.split.revert()
    }
  }
})
</script>
