<template>
  <section class="flex min-h-screen items-center sm:py-16">
    <div class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-16">
      <div class="flex flex-col justify-between gap-16 sm:flex-row">
        <div class="flex flex-col justify-center">
          <h2 class="flex flex-col text-4xl font-bold text-white sm:text-7xl">
            <span
              class="max-w-3xl font-mono text-base tracking-normal text-primary"
            >
              {{ props.pretitle }}
            </span>
            <span class="leading-relaxed">
              {{ props.title }}
            </span>
          </h2>
          <div
            class="max-w-lg text-lg font-light leading-relaxed tracking-wide text-white/75"
          >
            {{ props.description }}
          </div>
        </div>
        <div class="grid place-items-center">
          <div class="aspect-square overflow-hidden rounded-lg">
            <img class="object-cover" :src="props.image" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  pretitle: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
});
</script>
