import Ember from 'ember';
import EmberValidations from 'ember-validations';
const { Mixin, computed } = Ember;

export default Mixin.create(EmberValidations, {
  noteErrors: computed({
    get() {
      return {};
    }
  }),

  validations: {
    'note.text': {
      presence: true
    }
  },

  getErrors(errorsHashes) {
    let errorKeys = Object.keys(errorsHashes);
    let i = 0;
    for (i; i < errorKeys.length; i++) {
      let val = errorKeys[i];
      let join = errorsHashes[val].join(',');
      let property = `noteErrors.${val}`;
      this.set(property, join);
    }
  }
});
