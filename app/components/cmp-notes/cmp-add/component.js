import Ember from 'ember';
const { Component, get } = Ember;
export default Component.extend({
  classNames: ['add-note'],

  actions: {
    add() {
      get(this, 'add')();
    }
  }

});
