<script setup>
import { computed, toRefs } from "vue";
import CoffeeIcon from "./CoffeeIcon.vue";
const props = defineProps({
  text: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  rel: {
    type: String,
    default: "noreferer noopener"
  }
});

const { text, link, rel } = toRefs(props);

const external = computed(() => new URL(link.value).origin !== window.origin);
</script>

<template>
  <CoffeeIcon :icon="text" />
  <a :href="link" :rel="rel">{{ text }}</a>
  <CoffeeIcon v-if="external" icon="external" />
</template>
