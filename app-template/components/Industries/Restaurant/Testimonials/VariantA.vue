<template>
  <section class="py-48 bg-[#1A1A1A] text-white px-6 md:px-24">
    <div class="max-w-4xl mx-auto text-center space-y-16">
      <div
        class="w-12 h-12 bg-[#D4AF37] rounded-full mx-auto flex items-center justify-center text-black"
      >
        <Quote :size="20" />
      </div>

      <div
        v-for="(t, idx) in testimonials"
        :key="idx"
        class="testimonial-item"
      >
        <blockquote
          class="text-4xl md:text-6xl font-serif leading-tight italic mb-12"
        >
          "{{ t.quote }}"
        </blockquote>
        <div class="flex flex-col items-center gap-4">
          <p
            class="text-xs uppercase tracking-[0.5em] font-black text-[#D4AF37]"
          >
            {{ t.author }}
          </p>
          <p class="text-[10px] uppercase tracking-widest text-white/30">
            {{ t.role }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Quote } from "lucide-vue-next";
import { onMounted } from "vue";
import { useGsapAnimations } from "~/composables/useGsapAnimations";

defineProps<{ testimonials: any[] }>();
const { staggerReveal } = useGsapAnimations();

onMounted(() => {
  staggerReveal(".testimonial-item", 0.4);
});
</script>
