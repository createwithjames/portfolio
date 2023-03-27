<template>
  <section class="section flex items-center py-32" id="contact">
    <div class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-16">
      <div class="flex flex-col justify-center gap-8">
        <div class="text-center prose mx-auto text-white/75">
          <h2 class="flex flex-col text-4xl font-bold text-white sm:text-5xl">
            <span class="font-mono text-base tracking-normal text-primary">
              {{ props.pretitle }}
            </span>
            <span class="leading-relaxed">{{ props.title }}</span>
          </h2>
          <p class="-mt-8 mb-16">{{ props.description }}</p>
          <a
            :href="props.link"
            class="font-mono px-8 py-4 border border-primary rounded hover:bg-primary/10 hover:no-underline"
          >
            {{ props.linktext }}
          </a>
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
  link: {
    type: String,
  },
  linktext: {
    type: String,
  },
});
</script>
