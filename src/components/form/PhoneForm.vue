<script setup lang="ts">
import { PhoneNumberUtil, PhoneNumberFormat } from 'google-libphonenumber';
import { Field, Form } from 'vee-validate';
import { ref } from 'vue';
import { VALIDATION_RULE as VR } from '@/plugins/validation';
import type { PhoneNumber, PhoneNumberType } from 'google-libphonenumber';

type PhoneNumberForm = {
  number1?: string;
  number2?: string;
  number3?: string;
};

const phoneNumber = ref<PhoneNumberForm>({
  number1: undefined,
  number2: undefined,
  number3: undefined,
});

const formatPhoneNumber = (phone: string) => {
  const phoneUtil = PhoneNumberUtil.getInstance();
  const parseNumber = phoneUtil.parse(phone, 'JP');
  result.value.isValid = phoneUtil.isValidNumber(parseNumber);
  result.value.formatResult = phoneUtil.format(parseNumber, PhoneNumberFormat.NATIONAL);
};

const result = ref<{ isValid: boolean | null; formatResult: string }>({
  isValid: null,
  formatResult: '',
});

const onSubmit = () => {
  if (phoneNumber.value.number1 && phoneNumber.value.number2 && phoneNumber.value.number3)
    formatPhoneNumber(phoneNumber.value.number1 + phoneNumber.value.number2 + phoneNumber.value.number3);
};
</script>
<template>
  <Form @submit="onSubmit">
    <div class="d-flex align-center">
      <v-responsive max-width="110">
        <Field v-slot="{ field, errors }" :rules="`${VR.required}|${VR.onlyNum}|${VR.max}:4`" name="電話番号1">
          <v-text-field
            v-model="phoneNumber.number1"
            variant="outlined"
            density="compact"
            label="電話番号1"
            single-line
            v-bind="field"
            :error-messages="errors"
            hide-details="auto"
          />
        </Field>
      </v-responsive>
      <p class="section-bar">-</p>
      <v-responsive max-width="110">
        <Field v-slot="{ field, errors }" :rules="`${VR.required}|${VR.onlyNum}|${VR.max}:4`" name="電話番号2">
          <v-text-field
            v-model="phoneNumber.number2"
            variant="outlined"
            density="compact"
            label="電話番号2"
            single-line
            v-bind="field"
            :error-messages="errors"
            hide-details="auto"
          />
        </Field>
      </v-responsive>
      <p class="section-bar">-</p>
      <v-responsive max-width="110">
        <Field v-slot="{ field, errors }" :rules="`${VR.required}|${VR.onlyNum}|${VR.max}:4`" name="電話番号3">
          <v-text-field
            v-model="phoneNumber.number3"
            variant="outlined"
            density="compact"
            label="電話番号3"
            single-line
            v-bind="field"
            :error-messages="errors"
            hide-details="auto"
          />
        </Field>
      </v-responsive>
      <v-btn type="submit" class="ml-2">validate</v-btn>
      <div class="ml-2">
        <p>isValid: {{ result.isValid }}</p>
        <p>formatResult: {{ result.formatResult }}</p>
      </div>
    </div>
  </Form>
</template>

<style scoped>
.section-bar {
  font-size: 30px;
  margin: 0 5px;
}
</style>
