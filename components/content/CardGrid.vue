<template>
  <section class="flex min-h-[75vh] items-center py-16">
    <div class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2
          class="flex flex-col items-center justify-center text-2xl font-bold text-white sm:text-4xl lg:text-5xl"
        >
          <span
            class="max-w-3xl font-mono text-lg tracking-normal text-primary"
          >
            Here's the best of
          </span>
          <span class="leading-relaxed"> My Work </span>
        </h2>
      </div>
      <div class="grid grid-cols-3 gap-2">
        <div
          v-for="card in props.cards"
          :key="card.name"
          class="flex flex-col gap-2 rounded border border-slate-700 bg-slate-800 p-4"
        >
          <div>
            <h3
              class="mb-2 text-lg font-bold text-white sm:text-2xl lg:text-2xl"
            >
              {{ card.name }}
            </h3>
            <span
              class="mt-6 max-w-3xl font-light leading-relaxed tracking-wide text-white/75"
            >
              {{ card.description }}
            </span>
          </div>
          <div class="flex gap-8">
            <div class="flex flex-wrap gap-2">
              <div v-for="skill in card.skills" :key="skill.name + card.name">
                <span
                  class="inline-flex items-center rounded-full px-3 py-0.5 text-sm font-medium"
                  :class="{
                    'bg-slate-700 text-white': !skill.color,
                    'bg-green-700/30 text-green-400': skill.color === 'lime',
                    'bg-blue-700/30 text-blue-400': skill.color === 'blue',
                    'bg-cyan-700/30 text-cyan-400': skill.color === 'cyan',
                    'bg-pink-700/30 text-pink-400': skill.color === 'pink',
                    'bg-yellow-700/30 text-yellow-400':
                      skill.color === 'yellow',
                  }"
                >
                  {{ skill.name }}
                </span>
              </div>
            </div>
            <NuxtLink
              :href="card.link"
              class="ml-auto transition-all duration-200 hover:text-primary"
              target="_blank"
            >
              <Icon
                name="heroicons:arrow-top-right-on-square-solid"
                class="h-6 w-6"
              />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  cards: {
    type: Array,
    required: true,
  },
});
</script>
