import { onMounted, watch } from 'vue'

export const useIndustryTheme = (industry: string) => {
  const { config } = useVariantConfig()

  // Format industry name: "yoga" -> "Yoga Example", "realestate" -> "Real Estate Example"
  const formattedIndustry = industry
    .replace('realestate', 'real estate')
    .split(/[ \-_]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
  
  useHead({
    title: `${formattedIndustry} Example`
  })

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
