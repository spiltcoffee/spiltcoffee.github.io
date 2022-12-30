<script setup>
import { computed, toRefs, inject } from "vue";
import { icon as buildIcon } from "@fortawesome/fontawesome-svg-core";

const props = defineProps({
  icon: {
    type: String,
    required: true
  }
});

const { icon } = toRefs(props);
const icons = inject("icons");
const iconObj = computed(() => icons[icon.value.toLowerCase()]);

const html = computed(() =>
  iconObj.value ? buildIcon(iconObj.value).html : undefined
);
</script>

<template>
  <span v-if="html" v-html="html"></span>
</template>
