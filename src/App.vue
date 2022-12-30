<script setup>
import { provide } from "vue";
import CoffeeIcon from "./components/CoffeeIcon.vue";
import CoffeeLink from "./components/CoffeeLink.vue";
import CoffeeButtonLink from "./components/CoffeeButtonLink.vue";
import { icons } from "./fontawesome.js";

provide("icons", icons);
</script>

<template>
  <header class="p-4 bg-blue-900">
    <div class="text-2xl text-gray-100">
      <CoffeeIcon icon="mug-hot" /> SpiltCoffee
    </div>
    <div class="text-gray-300 mt-1">A list of my current projects</div>
  </header>
  <main class="flex-1 bg-gray-100">
    <div class="flex flex-col shadow m-2 bg-white">
      <h1 class="m-3 text-xl font-bold">postdfm</h1>
      <p class="m-3">Provides an API for easily transforming Delphi Forms.</p>
      <div class="m-3 flex flex-wrap">
        <CoffeeButtonLink
          text="Github"
          link="https://github.com/spiltcoffee/postdfm"
          class="hover:bg-green-200"
        />
        <CoffeeButtonLink
          text="postdfm"
          link="https://spiltcoffee.com/postdfm/docs/postdfm"
          icon="book"
          class="hover:bg-blue-200"
        />
        <CoffeeButtonLink
          text="@postdfm/ast"
          link="https://spiltcoffee.com/postdfm/docs/@postdfm/ast"
          icon="book"
          class="hover:bg-blue-200"
        />
        <CoffeeButtonLink
          text="@postdfm/ast2dfm"
          link="https://spiltcoffee.com/postdfm/docs/@postdfm/ast2dfm"
          icon="book"
          class="hover:bg-blue-200"
        />
        <CoffeeButtonLink
          text="@postdfm/dfm2ast"
          link="https://spiltcoffee.com/postdfm/docs/@postdfm/dfm2ast"
          icon="book"
          class="hover:bg-blue-200"
        />
        <CoffeeButtonLink
          text="@postdfm/plugin"
          link="https://spiltcoffee.com/postdfm/docs/@postdfm/plugin"
          icon="book"
          class="hover:bg-blue-200"
        />
        <CoffeeButtonLink
          text="@postdfm/transformer"
          link="https://spiltcoffee.com/postdfm/docs/@postdfm/transformer"
          icon="book"
          class="hover:bg-blue-200"
        />
      </div>
    </div>
    <div class="flex flex-col shadow m-2 bg-white">
      <h1 class="m-3 text-xl font-bold">stopwatch</h1>
      <p class="m-3">
        Stopwatch I made for use with managing Virtual Reality sessions.
        Probably useful in other scenarios.
      </p>
      <div class="m-3 flex flex-wrap">
        <CoffeeButtonLink
          text="github"
          link="https://github.com/spiltcoffee/stopwatch"
          class="hover:bg-green-200"
        />
        <CoffeeButtonLink
          text="stopwatch"
          link="https://spiltcoffee.com/stopwatch"
          class="hover:bg-blue-200"
        />
      </div>
    </div>
  </main>
  <footer class="bg-blue-800 text-gray-200 p-2 text-sm flex">
    <div class="flex-1">
      <CoffeeLink text="Github" link="https://github.com/spiltcoffee" />
      <CoffeeLink
        text="Mastodon"
        link="https://mastodon.au/@spiltcoffee"
        rel="me noreferer noopener"
      />
      <CoffeeLink text="Twitter" link="https://twitter.com/spiltcoffee" />
    </div>
    <span>This website punches Nazis</span>
  </footer>
</template>
