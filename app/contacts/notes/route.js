import Ember from 'ember';

const { Route, RSVP } = Ember;

export default Route.extend({

  model(params) {
    return RSVP.hash({
      notes: this.store.query('note', { contact: params.id }),
      // notes: this.store.findAll('note'),
      contact: this.store.find('contact', params.id)
    });
  },
  actions: {
    refreshModel: function() {
      this.refresh();
    }
  }
});
