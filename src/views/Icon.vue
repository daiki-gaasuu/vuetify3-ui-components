<script lang="ts" setup>
import { mdiAccount } from '@mdi/js';
import GithubButton from '@/components/GithubButton.vue';
import viteIcon from '@/components/icons/ViteIcon.vue';
</script>
<template>
  <v-icon :icon="mdiAccount"></v-icon>
  <v-icon :icon="viteIcon"></v-icon>
  <GithubButton
    link="https://github.com/daiki-gaasuu/vuetify3-ui-components/blob/main/src/views/Icon.vue"
  ></GithubButton>
</template>
