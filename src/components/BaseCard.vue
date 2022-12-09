<script setup lang="ts">
defineProps<{ title: string }>();
</script>
<template>
  <v-card elevation="5" class="wrapper">
    <v-card-title class="py-0">
      {{ title }}
    </v-card-title>
    <v-container>
      <slot name="main" />
    </v-container>
  </v-card>
</template>

<style scoped>
.wrapper {
  width: 80%;
}
</style>
