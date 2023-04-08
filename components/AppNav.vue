<template>
  <div
    class="fixed z-20 w-full border-b border-gray-700 px-4 py-4 sm:px-8"
    :class="{
      'bg-slate-900/75 backdrop-blur': scroll,
      'bg-transparent': !scroll,
    }"
  >
    <div class="mx-auto flex max-w-7xl items-center justify-between">
      <NuxtLink
        to="/"
        class="relative grid items-center font-medium text-primary hover:text-primary/75"
      >
        <span class="font-mono">James Phillips</span>
      </NuxtLink>
      <nav class="hidden gap-4 font-mono md:flex">
        <a
          href="#about"
          class="transision-all font-medium text-white/75 duration-200 ease-in-out hover:text-primary/75"
        >
          About Me
        </a>
        <a
          href="#experience"
          class="transision-all font-medium text-white/75 duration-200 ease-in-out hover:text-primary/75"
        >
          Experience
        </a>
        <a
          href="#work"
          class="transision-all font-medium text-white/75 duration-200 ease-in-out hover:text-primary/75"
        >
          Work
        </a>
        <a
          href="#contact"
          class="transision-all font-medium text-white/75 duration-200 ease-in-out hover:text-primary/75"
        >
          Contact
        </a>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const scroll = ref(false);

onMounted(() => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      scroll.value = true;
    } else {
      scroll.value = false;
    }
  });

  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        const section = entries[0].target;
        const nav = document.querySelector(`[href="#${section.id}"]`);
        const active = document.querySelector(".active");
        if (active) {
          active.classList.remove("active", "text-primary");
          active.classList.add("text-white/75");
        }
        console.log(nav);
        nav.classList.add("active", "text-primary");
        nav.classList.remove("text-white/75");
      }
    },
    { rootMargin: "-100px" }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});
</script>
