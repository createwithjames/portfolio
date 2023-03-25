<template>
  <section class="flex min-h-[75vh] items-center py-16">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex">
        <div class="flex-1">
          <h1 class="text-3xl font-bold text-white sm:text-5xl lg:text-6xl">
            <span
              class="max-w-3xl font-mono text-lg tracking-normal text-primary"
            >
              <slot name="pretitle" />
            </span>
            <span class="leading-relaxed">
              <slot name="title" />
            </span>
          </h1>
          <span
            class="mt-6 max-w-3xl text-lg font-light leading-relaxed tracking-wide text-white/75"
          >
            <slot name="description" />
          </span>
        </div>
        <div class="flex-1"></div>
      </div>
    </div>
  </section>
</template>
