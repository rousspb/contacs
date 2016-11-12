import Ember from 'ember';
const { Component, get, computed } = Ember;

export default Component.extend({
  tagName: 'header',

  isSearchVisible: computed({
    get() {
      return false;
    }
  }),

  actions: {
    add() {
      get(this, 'add')();
    },

    search() {
      this.toggleProperty('isSearchVisible');
    }
  }
});
