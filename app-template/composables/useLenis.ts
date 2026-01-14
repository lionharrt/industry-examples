import Lenis from 'lenis'
import { onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const useLenis = () => {
  const lenis = ref<Lenis | null>(null)

  const initLenis = () => {
    gsap.registerPlugin(ScrollTrigger)

    lenis.value = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    lenis.value.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.value?.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)
  }

  const stop = () => lenis.value?.stop()
  const start = () => lenis.value?.start()

  onUnmounted(() => {
    lenis.value?.destroy()
  })

  return {
    lenis,
    initLenis,
    stop,
    start
  }
}
