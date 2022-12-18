<script setup lang="ts">
import BaseCard from '@/components/BaseCard.vue';
import GithubButton from '@/components/GithubButton.vue';
import ChipGroup from '@/components/form/ChipGroup.vue';
import ImageUploadAndCrop from '@/components/form/ImageUploadAndCrop.vue';
import PhoneForm from '@/components/form/PhoneForm.vue';
</script>
<template>
  <div>
    <h2>Form Components</h2>
    <BaseCard :title="'multiple-choice v-chip-group'">
      <template #main>
        <ChipGroup />
        <GithubButton
          link="https://github.com/daiki-gaasuu/vuetify3-ui-components/blob/main/src/views/ChipGroup.vue"
        ></GithubButton>
      </template>
    </BaseCard>
    <BaseCard :title="'PhoneForm validate by libphonenumber and vee-validate'">
      <template #main>
        <PhoneForm />
        <GithubButton
          link="https://github.com/daiki-gaasuu/vuetify3-ui-components/blob/main/src/components/form/PhoneForm.vue"
        ></GithubButton>
      </template>
    </BaseCard>
    <BaseCard :title="'Image upload and crop by vue-advanced-cropper'">
      <template #main>
        <ImageUploadAndCrop />
        <GithubButton
          link="https://github.com/daiki-gaasuu/vuetify3-ui-components/blob/main/src/components/form/ImageUploadAndCrop.vue"
        ></GithubButton>
      </template>
    </BaseCard>
  </div>
</template>

<style scoped></style>
