<template>
  <section class="flex items-center py-32" id="experience">
    <div class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-16">
      <div class="mx-auto flex max-w-3xl flex-col justify-center gap-8">
        <div class="text-center sm:text-left">
          <h2 class="flex flex-col text-3xl font-bold text-white sm:text-5xl">
            <span
              class="font-mono text-sm sm:text-base tracking-normal text-primary"
            >
              {{ props.pretitle }}
            </span>
            <span class="leading-relaxed"> {{ props.title }}</span>
          </h2>
        </div>
        <div class="grid max-w-3xl grid-cols-1 gap-y-8 sm:grid-cols-7 sm:gap-8">
          <ul class="tabs col-span-2 w-full">
            <li
              v-for="(tab, index) in props.tabs"
              :key="index"
              :class="{
                'border-l-cyan-300 text-cyan-300': activeTab === index,
                'border-l-slate-600 text-white/75': activeTab !== index,
              }"
              class="cursor-pointer border-l-2 border-transparent py-2 px-4 font-mono transition-all duration-200 ease-in-out hover:bg-slate-800 hover:text-primary"
              @click="activeTab = index"
            >
              {{ tab.name }}
            </li>
          </ul>
          <div
            class="prose col-span-5 text-base sm:text-lg text-white/75 prose-headings:text-white font-light"
          >
            <slot :name="props.tabs[activeTab].slug"></slot>
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
  tabs: {
    type: Array,
  },
});

const activeTab = ref(0);
</script>
