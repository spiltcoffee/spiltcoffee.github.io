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
  icon: {
    type: String,
    default: ""
  },
  rel: {
    type: String,
    default: "noreferer noopener"
  },
  type: {
    type: String,
    default: "link"
  }
});

const { text, link, rel, type } = toRefs(props);

const external = computed(
  () => new URL(link.value, window.origin).origin !== window.origin
);
</script>

<template>
  <a
    :href="link"
    :rel="rel"
    :target="external ? '_blank' : null"
    class="coffee-link"
    :class="{ [`coffee-link--${type}`]: type !== 'link' }"
  >
    <CoffeeIcon :icon="icon || text" />
    {{ text }}
    <CoffeeIcon v-if="external" icon="external" />
  </a>
</template>

<style>
.coffee-link {
  @apply rounded p-2 mr-1;
}
.coffee-link--button {
  @apply border bg-gray-100 mb-1;
}
</style>
