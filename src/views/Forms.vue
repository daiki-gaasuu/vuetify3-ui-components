<script setup lang="ts">
import BaseCard from '@/components/BaseCard.vue';
import ChipGroup from '@/components/form/ChipGroup.vue';
import PhoneForm from '@/components/form/PhoneForm.vue';
</script>
<template>
  <div>
    <h2>Form Components</h2>
    <BaseCard :title="'ChipGroup'">
      <template #main>
        <ChipGroup />
      </template>
    </BaseCard>
    <BaseCard :title="'PhoneForm validate by libphonenumber'">
      <template #main>
        <PhoneForm />
      </template>
    </BaseCard>
  </div>
</template>

<style scoped></style>
