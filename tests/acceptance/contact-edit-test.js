import Ember from 'ember';
import { test } from 'qunit';
import startApp from '../helpers/start-app';
import moduleForAcceptance from '../helpers/module-for-acceptance';
import page from '../pages/contact';

let application;

moduleForAcceptance('Acceptance | Contact Edit', {
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

test('I can clic on a contact and then I will in the edit view.', (assert) => {
  page
    .visit()
    .clickOnContact(1);

  andThen(() => {
    assert.equal(currentURL(), '/contacts/view/10', 'I can see the url is the correct one.');
  });
});

test('I can not update the record if the required fields are empty', (assert) => {
  page
    .visit()
    .clickOnContact(1);

  andThen(() => {
    assert.equal(currentURL(), '/contacts/view/10', 'I can see the url is the correct one.');
  });
  page.clearRequired();
  page.clickButton('Save');
  andThen(() => {
    assert.equal(page.checkFirstNameError, 'can\'t be blank');
    assert.equal(page.checkLastNameError, 'can\'t be blank');
    assert.equal(page.checkEmailError, 'can\'t be blank');
    assert.equal(page.checkJobError, 'can\'t be blank');
    assert.equal(page.checkCompanyError, 'can\'t be blank');
  });
});

test('I can update my record', (assert) => {
  page
    .visit()
    .clickOnContact(1);

  andThen(() => {
    assert.equal(currentURL(), '/contacts/view/10', 'I can see the url is the correct one.');
  });
  page.fillFields();
  page.clickButton('Save');

  andThen(() => {
    assert.equal(page.checkFirstNameValue, 'New name');
    assert.equal(page.checkLastNameValue, 'New last name');
    assert.equal(page.checkEmailValue, 'email@me.com');
    assert.equal(page.checkAddressValue, 'Unknown');
    assert.equal(page.checkAddressMobile, '(123) 456-7890');
    assert.equal(page.checkWorkValue, '(123) 456-7890');
    assert.equal(page.checkHomeValue, '(123) 456-7890');
    assert.equal(page.checkJobValue, 'Director');
    assert.equal(page.checkCompanyValue, 'Same');
  });
});
