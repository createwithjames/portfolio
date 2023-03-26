<template>
  <div class="min-h-screen bg-slate-900">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: {
    lang: "en",
    class: "scroll-smooth",
  },
  bodyAttrs: {
    class: "bg-slate-900 text-white",
  },
});
</script>
