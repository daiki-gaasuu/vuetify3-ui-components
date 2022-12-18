<script lang="ts" setup>
const componentList = ['Icon', 'Forms'];
</script>
<template>
  <div>
    <h2>UI Component Sample Collection</h2>
    <v-list lines="one">
      <v-list-item v-for="item in componentList" :key="item" :title="item" :to="{ name: item }"></v-list-item>
    </v-list>
  </div>
</template>
