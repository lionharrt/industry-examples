<template>
  <section
    class="h-screen relative flex items-center justify-center overflow-hidden bg-black"
  >
    <!-- Full-screen atmospheric video -->
    <div class="absolute inset-0 z-0 opacity-40">
      <video
        ref="videoRef"
        autoplay
        muted
        loop
        playsinline
        preload="auto"
        class="w-full h-full object-cover scale-110"
        :src="
          video ||
          'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
        "
      ></video>
    </div>

    <div
      class="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 z-1"
    ></div>

    <div class="relative z-10 text-center">
      <div ref="revealContainer" class="overflow-hidden">
        <h1
          ref="titleRef"
          class="text-[15vw] font-serif font-black italic uppercase text-[#D4AF37] leading-none translate-y-full"
        >
          {{ title }}
        </h1>
      </div>
      <p
        ref="subtitleRef"
        class="text-white text-xs uppercase tracking-[1em] mt-12 font-bold opacity-0"
      >
        {{ subtitle }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import gsap from "gsap";

defineProps<{
  title: string;
  subtitle: string;
  video?: string;
  image?: string;
}>();

const titleRef = ref(null);
const subtitleRef = ref(null);
const videoRef = ref<HTMLVideoElement | null>(null);

onMounted(() => {
  if (videoRef.value) {
    videoRef.value.play().catch((err) => {
      console.warn("Video autoplay failed:", err);
    });
  }
  gsap.to(titleRef.value, {
    y: 0,
    duration: 2,
    ease: "expo.out",
    delay: 0.5,
  });
  gsap.to(subtitleRef.value, {
    opacity: 1,
    duration: 1.5,
    ease: "power2.out",
    delay: 1.5,
  });
});
</script>
