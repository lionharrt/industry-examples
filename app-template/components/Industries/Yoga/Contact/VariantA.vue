<template>
  <section class="py-16 md:py-32 bg-white px-6">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32">
        <div class="space-y-10 md:space-y-16 contact-yoga-info opacity-0 text-center lg:text-left">
          <div class="space-y-6 md:space-y-8">
            <h2 class="text-5xl md:text-7xl font-serif text-primary tracking-tighter leading-none">{{ title }}</h2>
            <p class="text-lg md:text-xl text-primary/40 font-light max-w-md mx-auto lg:mx-0 italic">Begin your practice with us. Reach out to schedule a private consultation or join a class.</p>
          </div>
          
          <div class="space-y-8 md:space-y-12">
            <div class="group">
              <div class="text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em] text-accent mb-3 md:mb-4">Email</div>
              <div class="text-2xl md:text-3xl font-serif text-primary break-all md:break-normal">{{ email }}</div>
            </div>
            <div class="group">
              <div class="text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em] text-accent mb-3 md:mb-4">Voice</div>
              <div class="text-2xl md:text-3xl font-serif text-primary">{{ phone }}</div>
            </div>
          </div>
        </div>
        
        <div class="bg-[#f5f1e9] p-8 md:p-16 rounded-[60px] md:rounded-[100px] contact-yoga-form opacity-0 shadow-2xl shadow-[#f5f1e9]/50">
          <form @submit.prevent class="space-y-6 md:space-y-8">
            <div class="space-y-2">
              <label class="text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em] text-primary/30 ml-6">Your Name</label>
              <input type="text" class="w-full bg-white rounded-full px-8 md:px-10 py-4 md:py-5 border-none focus:ring-2 focus:ring-accent transition-all text-sm font-medium shadow-sm">
            </div>
            <div class="space-y-2">
              <label class="text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em] text-primary/30 ml-6">Email Address</label>
              <input type="email" class="w-full bg-white rounded-full px-8 md:px-10 py-4 md:py-5 border-none focus:ring-2 focus:ring-accent transition-all text-sm font-medium shadow-sm">
            </div>
            <div class="space-y-2">
              <label class="text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em] text-primary/30 ml-6">Message</label>
              <textarea rows="4" class="w-full bg-white rounded-[30px] md:rounded-[40px] px-8 md:px-10 py-6 md:py-8 border-none focus:ring-2 focus:ring-accent transition-all text-sm font-medium shadow-sm"></textarea>
            </div>
            <button class="w-full py-5 md:py-6 rounded-full bg-primary text-white font-bold uppercase tracking-widest text-[9px] md:text-[10px] hover:bg-accent transition-all duration-700 shadow-xl shadow-primary/10">Submit Inquiry</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

defineProps<{ title: string, email: string, phone: string }>()

onMounted(() => {
  gsap.to('.contact-yoga-info', {
    scrollTrigger: {
      trigger: '.contact-yoga-info',
      start: 'top 85%',
    },
    opacity: 1,
    x: 0,
    duration: 1.5,
    ease: 'power3.out'
  })
  
  gsap.to('.contact-yoga-form', {
    scrollTrigger: {
      trigger: '.contact-yoga-form',
      start: 'top 85%',
    },
    opacity: 1,
    scale: 1,
    duration: 1.5,
    ease: 'power3.out'
  })
})
</script>
