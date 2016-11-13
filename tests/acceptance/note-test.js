import Ember from 'ember';
import { test } from 'qunit';
import startApp from '../helpers/start-app';
import moduleForAcceptance from '../helpers/module-for-acceptance';
import page from '../pages/note';

let application;

moduleForAcceptance('Acceptance | Note ', {
  beforeEach() {
    application = startApp();
    server.createList('contact', 10);
    server.createList('note', 10);
  },
  afterEach() {
    Ember.run(application, 'destroy');
  }
});

test('I can not add a note because note field is empty.', (assert) => {
  page
  .visit()
  .clickOnContact(1);

  andThen(() => {
    assert.equal(currentURL(), '/contacts/view/10', 'I can see the url is the correct one.');
  });
  page.clickOnSeeNotes(1);

  andThen(() => {
    assert.equal(currentURL(), '/contacts/notes/10', 'I can see the url is the correct one.');
  });
  page.clickButton('Add Note');
  andThen(() => {
    assert.equal(page.checkNoteError, 'can\'t be blank');
  });
});

test('I can add a note.', (assert) => {
  page
  .visit()
  .clickOnContact(1);

  andThen(() => {
    assert.equal(currentURL(), '/contacts/view/10', 'I can see the url is the correct one.');
  });
  page.clickOnSeeNotes(1);

  andThen(() => {
    assert.equal(currentURL(), '/contacts/notes/10', 'I can see the url is the correct one.');
  });
  page.addNoteFill();
  page.clickButton('Add Note');

  andThen(() => {
    assert.equal(page.notes().count === 1, true, 'I can see 1 records.');
    assert.equal(page.notes(0).text, 'New content name', 'I can see 1 records.');
  });
});

test('I can edit a note.', (assert) => {
  page
  .visit()
  .clickOnContact(1);

  andThen(() => {
    assert.equal(currentURL(), '/contacts/view/10', 'I can see the url is the correct one.');
  });
  page.clickOnSeeNotes(1);

  andThen(() => {
    assert.equal(currentURL(), '/contacts/notes/10', 'I can see the url is the correct one.');
  });
  page.addNoteFill();
  page.clickButton('Add Note');

  andThen(() => {
    assert.equal(page.notes(0).text, 'New content name', 'I can see 1 records.');
  });
  page.clickEditNote();
  andThen(() => {
    page.editNoteFill();
  });

  page.clickSave();
  andThen(() => {
    assert.equal(page.notes(0).text, 'Edit content name', 'I can see 1 records.');
  });
});
