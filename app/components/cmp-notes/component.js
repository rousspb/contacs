import Ember from 'ember';
const { Component , get} = Ember;
export default Component.extend({
  actions: {
    delete(note){
      get(this, 'delete')(note)
    }
  }
});
