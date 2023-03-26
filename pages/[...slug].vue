<template>
  <div>
    <ContentDoc />
  </div>
</template>

<script setup>
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          console.log(entry.target);
        }
      });
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    }
  );

  window.addEventListener("DOMContentLoaded", (event) => {
    const sections = Array.from(document.getElementsByTagName(section));

    for (let section of sections) {
      observer.observe(section);
    }
  });
});
</script>
