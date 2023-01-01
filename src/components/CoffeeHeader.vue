<script setup>
import CoffeeIcon from "./CoffeeIcon.vue";
import { toRefs } from "vue";

const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ""
  }
});

const { icon, title, description } = toRefs(props);
</script>

<template>
  <header class="coffee-header">
    <div class="coffee-header__title">
      <CoffeeIcon :icon="icon" /> {{ title }}
    </div>
    <div v-if="description" class="coffee-header__description">
      {{ description }}
    </div>
  </header>
</template>

<style>
.coffee-header {
  @apply p-4 bg-blue-900;
}

.coffee-header__title {
  @apply text-2xl text-gray-100;
}

.coffee-header__description {
  @apply text-gray-300 mt-1;
}
</style>
