import { localize } from '@vee-validate/i18n';
import ja from '@vee-validate/i18n/dist/locale/ja.json';
import { required, integer, max } from '@vee-validate/rules';
import { configure, defineRule } from 'vee-validate';

export const VALIDATION_RULE = {
  required: 'required',
  onlyNum: 'onlyNum',
  max: 'max',
} as const;

defineRule(VALIDATION_RULE.required, required);
defineRule(VALIDATION_RULE.onlyNum, integer);
defineRule(VALIDATION_RULE.max, max);

localize({ ja });
configure({
  generateMessage: localize('ja', {}),
});
