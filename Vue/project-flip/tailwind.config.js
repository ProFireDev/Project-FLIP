module.exports = {
  purge: [],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      cursor: ["disabled"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

import Vue from "vue";
import VueTailwind from "vue-tailwind";

const components = {
  //...
};

Vue.use(VueTailwind, components);

import {
  TInput,
  TTextarea,
  TSelect,
  TRadio,
  TCheckbox,
  TButton,
  TInputGroup,
  TCard,
  TAlert,
  TModal,
  TDropdown,
  TRichSelect,
  TPagination,
  TTag,
  TRadioGroup,
  TCheckboxGroup,
  TTable,
  TDatepicker,
  TToggle,
  TDialog,
} from "vue-tailwind/dist/components";

const settings = {
  // Use the following syntax
  // {component-name}: {
  //   component: {importedComponentObject},
  //   props: {
  //     {propToOverride}: {newDefaultValue}
  //     {propToOverride2}: {newDefaultValue2}
  //   }
  // }
  "t-input": {
    component: TInput,
    props: {
      classes: "border-2 block w-full rounded text-gray-800",
      // ...More settings
    },
  },
  "t-textarea": {
    component: TTextarea,
    props: {
      classes: "border-2 block w-full rounded text-gray-800",
      // ...More settings
    },
  },
  // ...Rest of the components
};

Vue.use(VueTailwind, settings);
