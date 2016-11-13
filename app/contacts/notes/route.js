import Ember from 'ember';

const { Route, RSVP } = Ember;

export default Route.extend({

  model(params) {
    return RSVP.hash({
      contact: this.store.find('contact', params.id)
    });
  }
});
