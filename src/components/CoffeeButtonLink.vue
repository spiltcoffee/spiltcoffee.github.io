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
  <a :href="link" :rel="rel" class="coffee-button-link">
    <CoffeeIcon :icon="text" />
    {{ text }}
    <CoffeeIcon v-if="external" icon="external" />
  </a>
</template>

<style scoped>
.coffee-button-link {
  @apply border rounded p-2 bg-gray-100 mr-1 mb-1;
}
</style>
