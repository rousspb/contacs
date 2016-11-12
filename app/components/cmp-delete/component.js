import Ember from 'ember';
const { Component, get } = Ember;
export default Component.extend({

  actions: {
    toggleDeleteRecord() {
      this.toggleProperty('isDeleting');
    },

    delete() {
      get(this, 'delete')();
    }
  }
});
