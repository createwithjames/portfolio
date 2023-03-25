<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-900 to-emerald-900">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  bodyAttrs: {
    class: "bg-slate-900 text-white",
  },
});
</script>
