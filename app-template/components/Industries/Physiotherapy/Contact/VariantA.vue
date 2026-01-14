<template>
  <section class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-24">
        <div class="space-y-12 contact-info opacity-0 -translate-x-10">
          <div class="space-y-6">
            <h2 class="text-6xl font-serif text-primary leading-tight">{{ title }}</h2>
            <p class="text-xl text-primary/60">Ready to take the first step towards recovery? Reach out to us today.</p>
          </div>
          
          <div class="space-y-8">
            <div class="flex items-center gap-6">
              <div class="w-16 h-16 rounded-2xl bg-[#f8f9fa] flex items-center justify-center text-accent">
                <svg viewBox="0 0 24 24" class="w-8 h-8 fill-none stroke-current" stroke-width="1.5"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <div class="text-xs font-bold uppercase tracking-widest text-primary/30 mb-1">Email Us</div>
                <div class="text-2xl font-serif text-primary">{{ email }}</div>
              </div>
            </div>
            <div class="flex items-center gap-6">
              <div class="w-16 h-16 rounded-2xl bg-[#f8f9fa] flex items-center justify-center text-accent">
                <svg viewBox="0 0 24 24" class="w-8 h-8 fill-none stroke-current" stroke-width="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
              </div>
              <div>
                <div class="text-xs font-bold uppercase tracking-widest text-primary/30 mb-1">Call Us</div>
                <div class="text-2xl font-serif text-primary">{{ phone }}</div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="bg-[#f8f9fa] p-12 rounded-[40px] contact-form opacity-0 translate-x-10">
          <form @submit.prevent class="space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div class="space-y-2">
                <label class="text-[10px] font-bold uppercase tracking-widest text-primary/40 ml-4">Full Name</label>
                <input type="text" class="w-full bg-white rounded-2xl px-6 py-4 border-none focus:ring-2 focus:ring-accent transition-all">
              </div>
              <div class="space-y-2">
                <label class="text-[10px] font-bold uppercase tracking-widest text-primary/40 ml-4">Email Address</label>
                <input type="email" class="w-full bg-white rounded-2xl px-6 py-4 border-none focus:ring-2 focus:ring-accent transition-all">
              </div>
            </div>
            <div class="space-y-2">
              <label class="text-[10px] font-bold uppercase tracking-widest text-primary/40 ml-4">Preferred Service</label>
              <select class="w-full bg-white rounded-2xl px-6 py-4 border-none focus:ring-2 focus:ring-accent transition-all">
                <option>Manual Therapy</option>
                <option>Sports Rehabilitation</option>
                <option>Post-Op Recovery</option>
              </select>
            </div>
            <div class="space-y-2">
              <label class="text-[10px] font-bold uppercase tracking-widest text-primary/40 ml-4">Message</label>
              <textarea rows="4" class="w-full bg-white rounded-2xl px-6 py-4 border-none focus:ring-2 focus:ring-accent transition-all"></textarea>
            </div>
            <button class="w-full py-5 rounded-2xl bg-primary text-white font-bold uppercase tracking-widest text-sm hover:bg-accent transition-all duration-500">Send Message</button>
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
      start: 'top 80%',
    },
    opacity: 1,
    x: 0,
    duration: 1.2,
    ease: 'power3.out'
  })
  
  gsap.to('.contact-form', {
    scrollTrigger: {
      trigger: '.contact-form',
      start: 'top 80%',
    },
    opacity: 1,
    x: 0,
    duration: 1.2,
    ease: 'power3.out'
  })
})
</script>
