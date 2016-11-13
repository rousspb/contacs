import Ember from 'ember';
const { Component, get, computed } = Ember;
export default Component.extend({
  classNames: ['note-container'],
  isDeleting: computed({
    get() {
      return false;
    }
  }),
  isEditing: computed({
    get() {
      return false;
    }
  }),
  actions: {
    delete() {
      get(this, 'delete')(get(this, 'note'));
    },
    toggleDeleteRecord() {
      this.toggleProperty('isDeleting');
    },
    toggleEditRecord() {
      this.toggleProperty('isEditing');
    },
    save() {
      get(this, 'save')(get(this, 'note'));
      this.toggleProperty('isEditing');
    }
  }
});
