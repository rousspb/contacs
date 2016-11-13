import PageObject, { collection, visitable, text } from 'ember-cli-page-object';

export default PageObject.create({
  visit: visitable('/contacts'),
  visitEdit: visitable('/contacts/view/10'),
  visitNew: visitable('/contacts/view/new'),
  clickOnContact(id) {
    click(`.contacts-list a[href*='${id}']`);
  },
  clickOnSeeNotes(id) {
    click(`.contact-wrapper a[href*='${id}']`);
  },
  clickButton(label) {
    click(`button:contains("${label}")`);
  },
  clickAddButton() {
    click(`button.add`);
  },
  clickEditNote() {
    click('.note-action .edit');
  },
  clickSave() {
    click('.note-action .save');
  },
  contacts: collection({
    itemScope: '.contacts-list  .contact',
    item: {
      firstName: text('.information .name', { at: 0 }),
      lastName: text('information .title-company', { at: 1})
    }
  }),

  notes: collection({
    itemScope: '.note-container',
    item: {
      text: text('p')
    }
  }),
  addNoteFill() {
    fillIn('.add textarea[name="name"]', 'New content name');
  },
  editNoteFill() {
    fillIn('textarea[name="edit"]', 'Edit content name');
  },
  checkNoteError: text('.add .error.text')
});
