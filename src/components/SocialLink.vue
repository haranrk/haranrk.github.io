<template>
  <a
    :href="link"
    :class="`text-${windiColor} underline decoration-wavy decoration${windiColor} decoration-2`"
    >{{ name }}</a
  >
</template>
<script setup lang="ts">
defineProps(["name", "link", "windiColor"]);
</script>
