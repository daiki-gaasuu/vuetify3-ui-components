<script setup lang="ts">
import { computed, ref } from 'vue';
import { Cropper } from 'vue-advanced-cropper';
import 'vue-advanced-cropper/dist/style.css';
import imageCompression from 'browser-image-compression';
const uploadImageData = ref<File[]>();
const previewImageData = ref<string>('');

const croppedImageData = ref<string>('');
const isCropModalOpen = ref(false);

const uploadImage = (data: File[]) => {
  uploadImageData.value = data;
  if (data && data.length) {
    isCropModalOpen.value = true;
  } else {
    resetImageData();
  }
};

const convertToFile = (src: string, file: File) => {
  // ここでバイナリにしている
  const blob = atob(src.replace(/^.*,/, ''));
  const buffer = new Uint8Array(blob.length);
  for (let i = 0; i < blob.length; i++) {
    buffer[i] = blob.charCodeAt(i);
  }
  return new File([buffer.buffer], file.name, { type: file.type });
};

const change = (value: { canvas: HTMLCanvasElement }) => {
  if (value) {
    previewImageData.value = value.canvas.toDataURL();
  }
};

const resetImageData = () => {
  uploadImageData.value = [];
  previewImageData.value = '';
  croppedImageData.value = '';
};

const crop = () => {
  croppedImageData.value = previewImageData.value;
  if (uploadImageData.value?.length) {
    console.log(convertToFile(croppedImageData.value, uploadImageData?.value[0]));
  }
  previewImageData.value = '';
  isCropModalOpen.value = false;
};

const closeCropModal = () => {
  resetImageData();
  isCropModalOpen.value = false;
};

const imageSrc = computed(() => {
  if (uploadImageData.value?.length) {
    return URL.createObjectURL(uploadImageData.value[0]);
  } else {
    return '';
  }
});
</script>
<template>
  <v-container>
    <v-row>
      <div>
        <div :class="croppedImageData ? 'upload-image-view' : 'empty-image-view'">
          <v-img v-if="croppedImageData" :src="croppedImageData"></v-img>
        </div>
      </div>
      <v-responsive class="ml-5">
        <v-file-input
          v-model="uploadImageData"
          accept="image/*"
          label="Image input"
          clearable
          @update:model-value="uploadImage"
        ></v-file-input>
        <v-dialog v-model="isCropModalOpen" close-on-back max-width="600">
          <v-card>
            <v-card-title class="text-center">Image Crop</v-card-title>
            <v-card-text v-if="uploadImageData">
              <div class="cropper-wrap">
                <Cropper
                  class="cropper"
                  :src="imageSrc"
                  :stencil-props="{
                    aspectRatio: 12 / 12,
                  }"
                  @change="change"
                ></Cropper>
                <v-img width="100" height="100" class="result" :src="previewImageData"></v-img>
              </div>
              <div class="d-flex justify-center mt-3">
                <v-btn :loading="previewImageData === ''" color="blue" @click="crop">CROP!!</v-btn>
                <v-btn class="ml-3" @click="closeCropModal">CANCEL</v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-responsive>
    </v-row>
  </v-container>
</template>

<style scoped>
.section-bar {
  font-size: 30px;
  margin: 0 5px;
}

.upload-image-view {
  background: none;
  width: 300px;
  height: 300px;
}
.empty-image-view {
  background: gray;
  width: 300px;
  height: 300px;
}

.cropper-wrap {
  position: relative;
}

.result {
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
