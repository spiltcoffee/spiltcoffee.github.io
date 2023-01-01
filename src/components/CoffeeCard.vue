<script setup>
import { toRefs } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ""
  }
});

const { title, description } = toRefs(props);
</script>

<template>
  <div class="coffee-card">
    <h1 class="coffee-card__title">{{ title }}</h1>
    <p class="coffee-card__description" v-if="description">{{ description }}</p>
    <div class="coffee-card__links">
      <slot></slot>
    </div>
  </div>
</template>

<style>
.coffee-card {
  @apply flex flex-col shadow m-2 bg-white;
}

.coffee-card__title {
  @apply m-3 text-xl font-bold;
}

.coffee-card__description {
  @apply m-3;
}

.coffee-card__links {
  @apply m-3 flex flex-wrap;
}
</style>
