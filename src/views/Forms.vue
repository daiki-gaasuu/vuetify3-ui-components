<script setup lang="ts">
import BaseCard from '@/components/BaseCard.vue';
import ChipGroup from '@/components/forms/ChipGroup.vue';
</script>
<template>
  <div>
    <h2>Form Components</h2>
    <BaseCard :title="'ChipGroup'">
      <template #main>
        <ChipGroup />
      </template>
    </BaseCard>
  </div>
</template>

<style scoped></style>
