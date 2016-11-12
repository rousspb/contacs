import Ember from 'ember';
const { Component, get, computed } = Ember;
export default Component.extend({
  isDeleting: computed({
    get() {
      return false;
    }
  }),

  actions: {
    save() {
      get(this, 'save')();
    },
    cancel() {
      get(this, 'cancel')();
    },
    delete() {
      get(this, 'delete')();
      this.toggleProperty('isDeleting');
    },
    toggleDeleteRecord() {
      this.toggleProperty('isDeleting');
    }
  }
});
