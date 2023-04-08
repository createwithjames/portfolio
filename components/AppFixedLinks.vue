<template>
  <div class="hidden lg:block fixed w-10 bottom-10 left-10">
    <ul class="flex flex-col gap-4">
      <li>
        <NuxtLink href="https://github.com/createwithjames" target="_blank">
          <Icon
            name="tabler:brand-github"
            class="text-white/75 w-8 h-8 hover:text-primary transition-all duration-200"
          />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          href="https://www.linkedin.com/in/createwithjames/"
          target="_blank"
        >
          <Icon
            name="tabler:brand-linkedin"
            class="text-white/75 w-8 h-8 hover:text-primary transition-all duration-200"
          />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink href="https://twitter.com/createwithjame5" target="_blank">
          <Icon
            name="tabler:brand-twitter"
            class="text-white/75 w-8 h-8 hover:text-primary transition-all duration-200"
          />
        </NuxtLink>
      </li>
    </ul>
  </div>
  <div class="hidden lg:block fixed w-10 bottom-10 right-10">
    <NuxtLink
      href="mailto:jamesigphillips@gmail.com"
      class="text-white/75 hover:text-primary transition-all duration-200 font-mono rotate-180"
    >
      jamesigphillips@gmail.com
    </NuxtLink>
  </div>
</template>

<script setup lang="ts"></script>
