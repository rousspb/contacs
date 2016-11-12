import Ember from 'ember';
import ContactValidations from '../../mixins/validate-contact';
const { Controller, get, inject: { service }, isEmpty, set } = Ember;

export default Controller.extend(ContactValidations, {
  flashMessages: service(),

  actions: {
    save() {
      this.validate().then(() => {
        let isNew = false;
        let contact = get(this, 'contact');
        let store = get(this, 'store');
        if (isEmpty(contact.id)) {
          isNew = true;
          set(this, 'contact', store.createRecord('contact', contact));
        }
        get(this, 'contact').save().then(() => {
          if (isNew) {
            get(this, 'flashMessages').success('Record saved.');
            set(this, 'contact', {});
          } else {
            get(this, 'flashMessages').success('Record updated.');
          }
        }).catch(() => {
          get(this, 'flashMessages').danger('There was an error.');
        });
      }).catch(() => {
        this.getErrors(get(this, 'errors.contact'));
      });
    },

    cancel() {
      set(this, 'contactErrors', {});
      this.transitionToRoute('contacts');
    },

    delete() {
      get(this, 'contact').destroyRecord().then(() => {
        get(this, 'flashMessages').success('Record deleted.');
        set(this, 'contact', {});
      }).catch(() => {
        get(this, 'flashMessages').danger('There was an error deleting the record.');
      });
    }
  }
});
