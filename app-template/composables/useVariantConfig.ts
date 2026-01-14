import { computed, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export interface VariantConfig {
  nav: 'A' | 'B' | 'C' | 'D'
  hero: 'A' | 'B' | 'C'
  about: 'A' | 'B' | 'C'
  services: 'A' | 'B' | 'C'
  portfolio: 'A' | 'B' | 'C'
  testimonials: 'A' | 'B' | 'C'
  team: 'A' | 'B' | 'C'
  pricing: 'A' | 'B' | 'C'
  contact: 'A' | 'B' | 'C'
  footer: 'A' | 'B' | 'C'
  blog?: 'A' | 'B' | 'C'
  bmi?: 'A' | 'B' | 'C'
  colorTheme: 'default' | 'alt1' | 'alt2'
}

export const useVariantConfig = () => {
  const router = useRouter()
  const route = useRoute()

  // Initial state from URL or defaults
  const config = useState<VariantConfig>('variant-config', () => {
    const query = route.query
    return {
      nav: (query.nav as any) || 'A',
      hero: (query.hero as any) || 'A',
      about: (query.about as any) || 'A',
      services: (query.services as any) || 'A',
      portfolio: (query.portfolio as any) || 'A',
      testimonials: (query.testimonials as any) || 'A',
      team: (query.team as any) || 'A',
      pricing: (query.pricing as any) || 'A',
      contact: (query.contact as any) || 'A',
      footer: (query.footer as any) || 'A',
      blog: (query.blog as any) || 'A',
      bmi: (query.bmi as any) || 'A',
      colorTheme: (query.colorTheme as any) || 'default'
    }
  })

  // Sync state to URL when config changes
  watch(config, (newConfig) => {
    router.replace({
      query: {
        ...route.query,
        ...newConfig
      }
    })
  }, { deep: true })

  const setVariant = (section: keyof VariantConfig, variant: any) => {
    config.value[section] = variant
  }

  return {
    config,
    setVariant
  }
}
