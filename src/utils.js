import itemTemplate from './demo/item-template.vue';

export const defaultOptions = {
  itemTemplate,
  minLen: 2,
  maxLen: 100,
  value: null,
  // setLabel: item => item.id,
  items: () => [],
  placeholder: '',
  inputClasses: '',
  wrapperClasses: '',
  inputWrapperClasses: '',
  suggestionListClasses: '',
  suggestionGroupClasses: '',
  suggestionGroupHeaderClasses: '',
  suggestionItemWrapperClasses: '',
  suggestionItemClasses: '',
};

export default {
  options: { ...defaultOptions },
};
