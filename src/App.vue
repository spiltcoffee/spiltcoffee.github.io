<script setup>
import { provide } from "vue";
import CoffeeHeader from "./components/CoffeeHeader.vue";
import CoffeeMain from "./components/CoffeeMain.vue";
import CoffeeFooter from "./components/CoffeeFooter.vue";
import CoffeeCard from "./components/CoffeeCard.vue";
import CoffeeLink from "./components/CoffeeLink.vue";
import { icons } from "./fontawesome.js";

provide("icons", icons);
</script>

<template>
  <CoffeeHeader
    icon="mug"
    title="SpiltCoffee"
    description="A list of my current projects"
  />
  <CoffeeMain>
    <CoffeeCard
      title="postdfm"
      description="Provides an API for easily transforming Delphi Forms."
    >
      <CoffeeLink
        text="Github"
        link="https://github.com/spiltcoffee/postdfm"
        type="button"
        class="hover:bg-green-200"
      />
      <CoffeeLink
        text="postdfm"
        link="https://spiltcoffee.com/postdfm/docs/postdfm"
        icon="book"
        type="button"
        class="hover:bg-blue-200"
      />
      <CoffeeLink
        text="@postdfm/ast"
        link="https://spiltcoffee.com/postdfm/docs/@postdfm/ast"
        icon="book"
        type="button"
        class="hover:bg-blue-200"
      />
      <CoffeeLink
        text="@postdfm/ast2dfm"
        link="https://spiltcoffee.com/postdfm/docs/@postdfm/ast2dfm"
        icon="book"
        type="button"
        class="hover:bg-blue-200"
      />
      <CoffeeLink
        text="@postdfm/dfm2ast"
        link="https://spiltcoffee.com/postdfm/docs/@postdfm/dfm2ast"
        icon="book"
        type="button"
        class="hover:bg-blue-200"
      />
      <CoffeeLink
        text="@postdfm/plugin"
        link="https://spiltcoffee.com/postdfm/docs/@postdfm/plugin"
        icon="book"
        type="button"
        class="hover:bg-blue-200"
      />
      <CoffeeLink
        text="@postdfm/transformer"
        link="https://spiltcoffee.com/postdfm/docs/@postdfm/transformer"
        icon="book"
        type="button"
        class="hover:bg-blue-200"
      />
    </CoffeeCard>
    <CoffeeCard
      title="stopwatch"
      description="Stopwatch I made for use with managing Virtual Reality sessions. Probably useful in other scenarios."
    >
      <CoffeeLink
        text="Github"
        link="https://github.com/spiltcoffee/stopwatch"
        type="button"
        class="hover:bg-green-200"
      />
      <CoffeeLink
        text="stopwatch"
        link="https://spiltcoffee.com/stopwatch"
        type="button"
        class="hover:bg-blue-200"
      />
    </CoffeeCard>
    <CoffeeCard
      title="votd-symbols"
      description="Helper for the symbols in the Destiny 2 raid Vow of the Disciple."
    >
      <CoffeeLink
        text="Github"
        link="https://github.com/spiltcoffee/votd-symbols"
        type="button"
        class="hover:bg-green-200"
      />
      <CoffeeLink
        text="votd-symbols"
        link="https://spiltcoffee.com/votd-symbols"
        icon="symbols"
        type="button"
        class="hover:bg-blue-200"
      />
    </CoffeeCard>
  </CoffeeMain>
  <CoffeeFooter>
    <CoffeeLink
      text="Github"
      link="https://github.com/spiltcoffee"
      class="hover:bg-green-900"
    />
    <CoffeeLink
      text="Mastodon"
      link="https://mastodon.au/@spiltcoffee"
      rel="me noreferer noopener"
      class="hover:bg-indigo-900"
    />
    <CoffeeLink
      text="Twitter"
      link="https://twitter.com/spiltcoffee"
      class="hover:bg-blue-900"
    />
  </CoffeeFooter>
</template>
