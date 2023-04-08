<template>
  <section class="section flex items-center justify-center py-32" id="about">
    <div class="flex flex-col justify-center gap-8">
      <div class="text-center">
        <h2 class="flex flex-col text-3xl font-bold text-white sm:text-5xl">
          <span
            class="font-mono text-sm sm:text-base tracking-normal text-primary"
          >
            {{ props.pretitle }}
          </span>
          <span class="leading-relaxed"> {{ props.title }}</span>
        </h2>
      </div>
      <div
        class="mx-auto grid max-w-3xl grid-cols-1 gap-y-8 sm:grid-cols-5 sm:gap-16"
      >
        <div
          class="col-span-2 row-start-2 flex flex-col gap-8 sm:row-start-auto"
        >
          <div
            class="relative hidden w-full overflow-hidden rounded-lg before:absolute before:inset-0 before:z-10 before:bg-primary before:bg-blend-multiply before:mix-blend-multiply before:transition-all before:duration-200 before:content-[''] hover:before:bg-inherit sm:block"
          >
            <img
              class="aspect-square h-full object-cover grayscale"
              :src="props.image"
              alt=""
              loading="lazy"
            />
          </div>
          <div class="flex flex-col gap-4">
            <h3 class="text-lg font-bold text-white">Skills</h3>
            <ul class="flex flex-col gap-4">
              <li
                v-for="skill in props.skills"
                :key="skill"
                class="flex flex-col gap-2 text-sm text-white/75"
              >
                <span class="font-mono">
                  {{ skill.name }}
                </span>
                <span>
                  <div
                    class="h-2.5 w-full rounded-full bg-gray-200/25 dark:bg-gray-700"
                  >
                    <div
                      class="h-2.5 rounded-full"
                      :class="{
                        'bg-green-400': skill.color === 'lime',
                        'bg-blue-400': skill.color === 'blue',
                        'bg-cyan-400': skill.color === 'cyan',
                        'bg-pink-400': skill.color === 'pink',
                        'bg-yellow-400': skill.color === 'yellow',
                      }"
                      :style="['width: ' + skill.level + '%']"
                    ></div>
                  </div>
                </span>
              </li>
            </ul>
          </div>
          <div class="flex flex-col gap-4">
            <h3 class="text-lg font-bold text-white">Frameworks</h3>
            <ul class="flex flex-wrap gap-4">
              <li
                v-for="framework in props.frameworks"
                :key="framework"
                class="flex flex-col gap-2 text-sm text-white/75"
              >
                <span class="font-mono">
                  {{ framework }}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-span-3 row-start-1 sm:row-start-auto">
          <div
            class="prose text-base sm:text-lg font-light leading-relaxed tracking-wide text-white/75 prose-a:text-white"
          >
            <slot />
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
  image: {
    type: String,
  },
  skills: {
    type: Array,
  },
  frameworks: {
    type: Array,
  },
});
</script>
