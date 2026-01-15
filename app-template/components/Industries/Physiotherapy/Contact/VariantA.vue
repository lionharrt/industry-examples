<template>
  <section class="py-16 md:py-24 bg-white px-6">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24">
        <div class="space-y-10 md:space-y-12 contact-info opacity-0 lg:-translate-x-10 text-center lg:text-left">
          <div class="space-y-4 md:space-y-6">
            <h2 class="text-4xl md:text-6xl font-serif text-primary leading-tight">{{ title }}</h2>
            <p class="text-lg md:text-xl text-primary/60 font-light">Ready to take the first step towards recovery? Reach out to us today.</p>
          </div>
          
          <div class="space-y-6 md:space-y-8 flex flex-col items-center lg:items-start">
            <div class="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <div class="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#f8f9fa] flex items-center justify-center text-accent">
                <svg viewBox="0 0 24 24" class="w-6 h-6 md:w-8 md:h-8 fill-none stroke-current" stroke-width="1.5"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div class="text-center md:text-left">
                <div class="text-[9px] md:text-xs font-bold uppercase tracking-widest text-primary/30 mb-1">Email Us</div>
                <div class="text-xl md:text-2xl font-serif text-primary">{{ email }}</div>
              </div>
            </div>
            <div class="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <div class="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#f8f9fa] flex items-center justify-center text-accent">
                <svg viewBox="0 0 24 24" class="w-6 h-6 md:w-8 md:h-8 fill-none stroke-current" stroke-width="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
              </div>
              <div class="text-center md:text-left">
                <div class="text-[9px] md:text-xs font-bold uppercase tracking-widest text-primary/30 mb-1">Call Us</div>
                <div class="text-xl md:text-2xl font-serif text-primary">{{ phone }}</div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="bg-[#f8f9fa] p-8 md:p-12 rounded-[30px] md:rounded-[40px] contact-form opacity-0 lg:translate-x-10">
          <form @submit.prevent class="space-y-4 md:space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div class="space-y-1 md:space-y-2">
                <label class="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-primary/40 ml-4">Full Name</label>
                <input type="text" class="w-full bg-white rounded-2xl px-5 md:px-6 py-3 md:py-4 border-none focus:ring-2 focus:ring-accent transition-all text-sm">
              </div>
              <div class="space-y-1 md:space-y-2">
                <label class="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-primary/40 ml-4">Email Address</label>
                <input type="email" class="w-full bg-white rounded-2xl px-5 md:px-6 py-3 md:py-4 border-none focus:ring-2 focus:ring-accent transition-all text-sm">
              </div>
            </div>
            <div class="space-y-1 md:space-y-2">
              <label class="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-primary/40 ml-4">Preferred Service</label>
              <select class="w-full bg-white rounded-2xl px-5 md:px-6 py-3 md:py-4 border-none focus:ring-2 focus:ring-accent transition-all text-sm appearance-none">
                <option>Manual Therapy</option>
                <option>Sports Rehabilitation</option>
                <option>Post-Op Recovery</option>
              </select>
            </div>
            <div class="space-y-1 md:space-y-2">
              <label class="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-primary/40 ml-4">Message</label>
              <textarea rows="4" class="w-full bg-white rounded-2xl px-5 md:px-6 py-3 md:py-4 border-none focus:ring-2 focus:ring-accent transition-all text-sm"></textarea>
            </div>
            <button class="w-full py-4 md:py-5 rounded-2xl bg-primary text-white font-bold uppercase tracking-widest text-[10px] md:text-sm hover:bg-accent transition-all duration-500 shadow-lg shadow-primary/10">Send Message</button>
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
  gsap.to('.contact-info', {
    scrollTrigger: {
      trigger: '.contact-info',
      start: 'top 85%',
    },
    opacity: 1,
    x: 0,
    duration: 1.2,
    ease: 'power3.out'
  })
  
  gsap.to('.contact-form', {
    scrollTrigger: {
      trigger: '.contact-form',
      start: 'top 85%',
    },
    opacity: 1,
    x: 0,
    duration: 1.2,
    ease: 'power3.out'
  })
})
</script>
