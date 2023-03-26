// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "nuxt-icon",
    "@nuxt/image-edge",
  ],
  app: {
    head: {
      title: "James Phillips",
      meta: [
        {
          name: "description",
          content:
            "Unleash your digital potential with a stunning web presence that captivates your audience. Let's work together to bring your brand to life.",
        },
      ],
    },
  },
  content: {
    markdown: {
      anchorLinks: false,
    },
    highlight: {
      // Theme used in all color schemes.
      theme: "one-dark-pro",
    },
  },
  runtimeConfig: {
    ipx: {
      dir: "../../assets",
    },
  },
  image: {
    dir: "public/img",
  },
});
