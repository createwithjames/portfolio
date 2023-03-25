<template>
  <img :src="getImg()" :alt="{{ props.alt }}" />
</template>

<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
});

const getImg = () => {
  try {
    // place the '~/' before 'assets/'
    return require(`~/assets/images/${src}`);
  } catch (err) {
    console.warn(err);
    // return null if any error
    return null;
  }
};
</script>
