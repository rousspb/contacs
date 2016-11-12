import Ember from 'ember';
const { Route, RSVP } = Ember;
export default Route.extend({
  offset: 0,
  limit: 10,
  queryParams: {
    name: true
  },
  model() {
    return RSVP.hash({
      contacts: this.get('store').findAll('contact')
    });
  }
});
