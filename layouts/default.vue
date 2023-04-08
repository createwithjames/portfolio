<template>
  <header>
    <AppNav />
  </header>
  <div class="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-16">
    <AppFixedLinks />
    <main>
      <div>
        <slot />
      </div>
    </main>
  </div>
  <footer>
    <AppFooter :content="content" />
  </footer>
</template>

<script setup>
const content = ref({
  pretitle: "What next?",
  title: "Get in touch",
  description:
    "Whether you're looking for a reliable and experienced website developer to bring your vision to life or just want to say hi, my inbox is always open!",
  link: "mailto:jamesigphillips@gmail.com",
  linktext: "Say Hello",
});
</script>
