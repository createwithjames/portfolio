<template>
  <section class="flex items-center py-32">
    <div class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col gap-8">
        <div class="text-center">
          <h2
            class="flex flex-col items-center justify-center text-2xl font-bold text-white sm:text-4xl lg:text-5xl"
          >
            <span
              class="max-w-3xl font-mono text-lg tracking-normal text-primary"
            >
              {{ props.pretitle }}
            </span>
            <span class="leading-relaxed"> {{ props.title }} </span>
          </h2>
        </div>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <NuxtLink
            :href="card.link"
            target="_blank"
            v-for="card in props.cards"
            class="relative flex flex-col gap-2 overflow-hidden rounded border border-slate-700 bg-slate-900 transition-all duration-200 ease-in-out hover:border-primary"
            :key="card.name"
          >
            <div v-if="card.image" class="absolute z-0 w-full">
              <img
                class="w-full object-cover"
                :src="card.image"
                width="393"
                loading="lazy"
              />
            </div>
            <div
              class="z-10 flex h-full flex-col justify-between gap-8 bg-gradient-to-t from-slate-800 via-slate-800 to-transparent p-4"
            >
              <div class="pt-40">
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
                  <div
                    v-for="skill in card.skills"
                    :key="skill.name + card.name"
                  >
                    <span
                      class="inline-flex items-center rounded-full px-3 py-0.5 text-sm font-medium"
                      :class="{
                        'bg-slate-700/30 text-white': !skill.color,
                        'bg-lime-700/30 text-lime-400': skill.color === 'lime',
                        'bg-green-700/30 text-green-400':
                          skill.color === 'green',
                        'bg-blue-700/30 text-blue-400': skill.color === 'blue',
                        'bg-fuchsia-700/30 text-fuchsia-400':
                          skill.color === 'fuchsia',
                        'bg-sky-700/30 text-sky-400': skill.color === 'sky',
                        'bg-red-700/30 text-red-400': skill.color === 'red',
                        'bg-cyan-700/30 text-cyan-400': skill.color === 'cyan',
                        'bg-pink-700/30 text-pink-400': skill.color === 'pink',
                        'bg-yellow-700/30 text-yellow-400':
                          skill.color === 'yellow',
                        'bg-indigo-700/30 text-indigo-400':
                          skill.color === 'indigo',
                      }"
                    >
                      {{ skill.name }}
                    </span>
                  </div>
                </div>
                <div
                  class="ml-auto transition-all duration-200 hover:text-primary"
                >
                  <Icon
                    name="heroicons:arrow-top-right-on-square-solid"
                    class="h-6 w-6"
                  />
                </div>
              </div>
            </div>
          </NuxtLink>
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
  cards: {
    type: Array,
    required: true,
  },
});
</script>
