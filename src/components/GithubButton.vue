<script setup lang="ts">
import { mdiGithub } from '@mdi/js';
defineProps<{ link: string }>();
</script>
<template>
  <v-btn :href="link" class="mt-2" target="_blank">
    <v-icon :icon="mdiGithub"></v-icon>
    SOURCE HERE
  </v-btn>
</template>

<style scoped>
.wrapper {
  width: 80%;
}
</style>
