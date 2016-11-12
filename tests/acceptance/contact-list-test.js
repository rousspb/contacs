import Ember from 'ember';
import { test } from 'qunit';
import startApp from '../helpers/start-app';
import moduleForAcceptance from '../helpers/module-for-acceptance';
import page from '../pages/contact-list';

let application;

moduleForAcceptance('Acceptance | Contact List', {
  beforeEach() {
    application = startApp();
    server.createList('contact', 10);
  },
  afterEach() {
    Ember.run(application, 'destroy');
  }
});

test('The list is printing 10 results.', (assert) => {
  page.visit();
  andThen(() => {
    assert.equal(currentURL(), '/contacts', 'I can see the url is the correct one.');
    assert.equal(page.contacts().count === 10, true, 'I can see 10 records.');
  });
});
