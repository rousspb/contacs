import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('contacts', function() {
    this.route('view', { path: '/view/:id'});
    this.route('notes', { path: '/notes/:id'});
  });
});

export default Router;
