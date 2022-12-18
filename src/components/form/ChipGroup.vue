<script setup lang="ts">
import { ref } from 'vue';

const items = ['optionA', 'optionB', 'optionC', 'optionD', 'optionE', 'optionF', 'optionJ'];
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
