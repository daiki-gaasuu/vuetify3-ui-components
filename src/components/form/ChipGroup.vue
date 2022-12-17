<script setup lang="ts">
import { ref } from 'vue';

const items = ['選択肢A', '選択肢B', '選択肢C', '選択肢D', '選択肢E', '選択肢F', '選択肢J'];
const selectedItems = ref<string[]>([]);
</script>
<template>
  <div>
    <v-chip-group v-model="selectedItems" multiple column>
      <v-chip v-for="item in items" :key="item" label variant="outlined" :value="item" color="green">
        {{ item }}
      </v-chip>
    </v-chip-group>
    <p>value: {{ selectedItems }}</p>
  </div>
</template>

<style scoped></style>
