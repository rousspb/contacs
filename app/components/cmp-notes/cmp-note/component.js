import Ember from 'ember';
const { Component, get } = Ember;
export default Component.extend({
  classNames: ['note-container'],

  actions: {
    delete() {
      get(this, 'delete')(get(this, 'note'));
    }
  }
});
