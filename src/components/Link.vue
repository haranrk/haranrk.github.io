<template>
  <a
    :href="link"
    :class="`text-${windiColor} underline decoration-${windiColor} decoration-5 hover:bg-${windiColor} hover:text-white `"
    >{{ name }}</a
  >
</template>
<script setup lang="ts">
defineProps(["name", "link", "windiColor"]);
</script>
