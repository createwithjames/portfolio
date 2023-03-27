<template>
  <section class="flex items-center py-32 sm:pt-48">
    <div class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-16">
      <div class="flex flex-col justify-between gap-16 sm:flex-row">
        <div class="flex flex-col justify-center">
          <h1 class="flex flex-col text-4xl font-bold text-white sm:text-7xl">
            <span
              class="max-w-3xl font-mono text-base tracking-normal text-primary"
            >
              {{ props.pretitle }}
            </span>
            <span class="leading-relaxed">
              {{ props.title }}
            </span>
          </h1>
          <div
            class="max-w-lg text-base sm:text-lg font-light leading-relaxed tracking-wide text-white/75"
          >
            {{ props.description }}
          </div>
        </div>
        <div class="grid place-items-center">
          <div
            class="relative aspect-square overflow-hidden rounded-lg before:absolute before:inset-0 before:z-10 before:bg-primary before:bg-blend-multiply before:mix-blend-multiply before:transition-all before:duration-200 before:content-[''] hover:before:bg-inherit"
          >
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
