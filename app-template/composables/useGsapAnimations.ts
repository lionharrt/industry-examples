import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

// Register GSAP plugins
if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

export const useGsapAnimations = () => {
  const textReveal = (element: string | HTMLElement) => {
    if (!process.client || !element) return

    // Clean up existing split on the element if it exists to prevent double-splitting
    const el = typeof element === 'string' ? document.querySelector(element) : element
    if (el && (el as any)._splitType) {
      (el as any)._splitType.revert()
    }

    const text = new SplitType(element as any, { types: 'chars,words' })
    if (el) (el as any)._splitType = text
    
    const animation = gsap.from(text.chars, {
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.02,
      ease: 'power4.out'
    })

    return { animation, split: text }
  }

  const parallaxImage = (element: string | HTMLElement, speed: number = 0.1) => {
    if (!process.client || !element) return

    const animation = gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        invalidateOnRefresh: true
      },
      y: (index, target) => {
        const height = (target as HTMLElement).offsetHeight
        return height * speed
      },
      ease: 'none'
    })

    return animation
  }

  const staggerReveal = (elements: string | HTMLElement[], delay: number = 0.1) => {
    if (!process.client || !elements) return

    const trigger = typeof elements === 'string' ? elements : elements[0]
    
    const animation = gsap.from(elements, {
      scrollTrigger: {
        trigger: trigger as any,
        start: 'top 85%',
      },
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: delay,
      ease: 'power3.out'
    })

    return animation
  }

  return {
    textReveal,
    parallaxImage,
    staggerReveal
  }
}
