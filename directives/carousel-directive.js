// my-directive.js
import { unbind } from 'vuetify';

export default {
  directives: {
    myDirective: {
      unbind(el) {
        const parent = el.parentNode;
        if (parent) {
          unbind(el);
        }
      }
    }
  }
};