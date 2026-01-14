<template>
  <component :is="navComponent" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useVariantConfig } from '~/composables/useVariantConfig'
import VariantA from '~/components/NavBars/VariantA.vue'
import VariantB from '~/components/NavBars/VariantB.vue'
import VariantC from '~/components/NavBars/VariantC.vue'
import VariantD from '~/components/NavBars/VariantD.vue'

const { config } = useVariantConfig()

const navComponent = computed(() => {
  switch (config.value.nav) {
    case 'B': return VariantB
    case 'C': return VariantC
    case 'D': return VariantD
    default: return VariantA
  }
})
</script>
