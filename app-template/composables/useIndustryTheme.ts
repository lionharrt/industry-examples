import { onMounted, watch } from 'vue'

export const useIndustryTheme = (industry: string) => {
  const { config } = useVariantConfig()

  const updateTheme = () => {
    document.documentElement.setAttribute('data-theme', industry)
    // Here we could also handle the sub-themes (default, alt1, alt2)
    document.documentElement.setAttribute('data-variant', config.value.colorTheme)
  }

  onMounted(updateTheme)
  watch(() => config.value.colorTheme, updateTheme)

  return {
    updateTheme
  }
}
