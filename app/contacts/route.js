import Ember from 'ember';
const { Route, RSVP } = Ember;
export default Route.extend({
  queryParams: {
    name: {
      refreshModel: true
    }
  },
  model() {
    return RSVP.hash({
      contacts: this.get('store').findAll('contact')
    });
  },

  actions: {
    refreshModel: function() {
      this.refresh();
    }
  }
});
