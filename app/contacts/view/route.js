import Ember from 'ember';
import {faker}  from 'ember-cli-mirage';
const { Route, RSVP, isPresent } = Ember;

export default Route.extend({

  setupController(controller, model) {
    if (isPresent(model.contactRecord)) {
      controller.set('contact', model.contactRecord);
    } else {
      controller.set('contact', {});
    }
    controller.set('contactErrors', {});
  },

  model(params) {
    if (params.id === 'new') {
      return RSVP.hash({
        img: faker.image.avatar()
      });
    }
    return RSVP.hash({
      contactRecord: this.store.find('contact', params.id),
    });
  }
});
