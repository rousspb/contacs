import Ember from 'ember';
import EmberValidations from 'ember-validations';
const { Mixin, computed } = Ember;

export default Mixin.create(EmberValidations, {
  contactErrors: computed({
    get() {
      return {};
    }
  }),

  validations: {
    'contact.firstName': {
      presence: true
    },
    'contact.lastName': {
      presence: true
    },
    'contact.email': {
      presence: true
    },
    'contact.jobTitle': {
      presence: true
    },
    'contact.company': {
      presence: true
    }
  },

  getErrors(errorsHashes) {
    let errorKeys = Object.keys(errorsHashes);
    let i = 0;
    for (i; i < errorKeys.length; i++) {
      let val = errorKeys[i];
      let join = errorsHashes[val].join(',');
      let property = `contactErrors.${val}`;
      this.set(property, join);
    }
  }
});
