<template>
  <section
    class="section flex items-center pt-32 pb-8 bg-gradient-to-t from-primary/50 to-slate-900 flex-col"
    id="contact"
  >
    <div class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-16">
      <div class="flex flex-col justify-center gap-32">
        <div
          class="text-center prose mx-auto text-white/75 sm:text-lg font-light"
        >
          <h2 class="flex flex-col text-3xl font-bold text-white sm:text-5xl">
            <span
              class="font-mono text-sm sm:text-base tracking-normal text-primary"
            >
              {{ props.content.pretitle }}
            </span>
            <span class="leading-relaxed">{{ props.content.title }}</span>
          </h2>
          <p class="mb-16">{{ props.content.description }}</p>
          <a
            :href="props.content.link"
            class="font-mono px-8 py-4 border border-primary rounded hover:bg-primary/10 hover:no-underline"
          >
            {{ props.content.linktext }}
          </a>
        </div>
        <div class="text-white/75 text-sm text-center font-mono">
          Designed & Built by James Phillips
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  content: {
    type: Object,
  },
});
</script>
