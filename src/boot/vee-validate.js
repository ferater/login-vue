import Vue from 'vue';
import { ValidationProvider, extend, configure } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import { messages } from 'vee-validate/dist/locale/tr.json';


configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
    dirty: ['is-dirty', 'is-dirty'], // multiple classes per flag!
    // ...
  },
});

// Add a rule.
/* extend('name', {
  validate: value => value === 'example',
  message: 'This is not the magic word'
}); */

Object.keys(rules).forEach((rule) => {
  extend(rule, {
    ...rules[rule], // copies rule configuration
    message: messages[rule], // assign message
  });
});
// Register it globally
Vue.component('ValidationProvider', ValidationProvider);
