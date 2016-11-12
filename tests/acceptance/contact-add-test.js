import Ember from 'ember';
import { test } from 'qunit';
import startApp from '../helpers/start-app';
import moduleForAcceptance from '../helpers/module-for-acceptance';
import page from '../pages/contact';

let application;

moduleForAcceptance('Acceptance | Contact Add', {
  beforeEach() {
    application = startApp();
    server.createList('contact', 10);
  },
  afterEach() {
    Ember.run(application, 'destroy');
  }
});

test('I can clic on a contact since contact list and then I will in the add new view..', (assert) => {
  page.visit();

  andThen(() => {
    assert.equal(currentURL(), '/contacts', 'I can see the url is the correct one.');
  });

  page.clickAddButton();
  andThen(() => {
    assert.equal(currentURL(), '/contacts/view/new', 'I can see the url is the correct one.');
  });
});

test('I can clic on a contact since contact edit and then I will in the add new view..', (assert) => {
  page
    .visit()
    .clickOnContact(1);

  andThen(() => {
    assert.equal(currentURL(), '/contacts/view/10', 'I can see the url is the correct one.');
  });

  page.clickAddButton();
  andThen(() => {
    assert.equal(currentURL(), '/contacts/view/new', 'I can see the url is the correct one.');
  });
});

test('I can not create a new contact if the required fields are empty.', (assert) => {
  page.visit();

  andThen(() => {
    assert.equal(currentURL(), '/contacts', 'I can see the url is the correct one.');
  });

  page.clickAddButton();
  andThen(() => {
    assert.equal(currentURL(), '/contacts/view/new', 'I can see the url is the correct one.');
  });
  page.fillFields();
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

test('I can create a new Contact.', (assert) => {
  page.visit();

  andThen(() => {
    assert.equal(currentURL(), '/contacts', 'I can see the url is the correct one.');
  });

  page.clickAddButton();
  andThen(() => {
    assert.equal(currentURL(), '/contacts/view/new', 'I can see the url is the correct one.');
  });
  page.fillFields();
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

  page.clickButton('Save');
  andThen(() => {
    assert.equal(page.checkFirstNameValue, '');
    assert.equal(page.checkLastNameValue, '');
    assert.equal(page.checkEmailValue, '');
    // assert.equal(page.checkBirthdayValue, '10/10/2016');
    assert.equal(page.checkAddressValue, '');
    assert.equal(page.checkAddressMobile, '');
    assert.equal(page.checkWorkValue, '');
    assert.equal(page.checkHomeValue, '');
    assert.equal(page.checkJobValue, '');
    assert.equal(page.checkCompanyValue, '');
  });
});
