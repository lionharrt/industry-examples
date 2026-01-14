import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { restaurantData } from '~/data/industries/restaurant'
import { realestateData } from '~/data/industries/realestate'
import { fashionData } from '~/data/industries/fashion'
import { architectureData } from '~/data/industries/architecture'
import { fitnessData } from '~/data/industries/fitness'
import { legalData } from '~/data/industries/legal'
import { techData } from '~/data/industries/tech'
import { hotelData } from '~/data/industries/hotel'
import { automotiveData } from '~/data/industries/automotive'
import { creativeData } from '~/data/industries/creative'
import { physiotherapyData } from '~/data/industries/physiotherapy'
import { yogaData } from '~/data/industries/yoga'

export const useNavBarData = () => {
  const route = useRoute()

  const industryDataMap: Record<string, any> = {
    '/restaurant': restaurantData,
    '/realestate': realestateData,
    '/fashion': fashionData,
    '/architecture': architectureData,
    '/fitness': fitnessData,
    '/legal': legalData,
    '/tech': techData,
    '/hotel': hotelData,
    '/automotive': automotiveData,
    '/creative': creativeData,
    '/physiotherapy': physiotherapyData,
    '/yoga': yogaData
  }

  const currentData = computed(() => industryDataMap[route.path] || null)

  const navLinks = computed(() => [
    { name: 'Home', href: route.path },
    { name: 'Experience', href: '#' },
    { name: 'Portfolio', href: '#' },
    { name: 'Contact', href: '#' }
  ])

  return {
    currentData,
    navLinks
  }
}
