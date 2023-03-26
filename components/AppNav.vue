<template>
  <div
    class="fixed w-full border-b border-gray-700 px-4 py-2 sm:px-8"
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
      <AppDropdown />
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
});
</script>
