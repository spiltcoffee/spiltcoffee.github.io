<template>
  <footer class="coffee-footer">
    <div class="coffee-footer__links">
      <slot></slot>
    </div>
    <span>This website punches Nazis</span>
  </footer>
</template>

<style>
.coffee-footer {
  @apply bg-blue-800 text-gray-200 p-2 text-sm flex;
}

.coffee-footer__links {
  @apply flex-1;
}
</style>
