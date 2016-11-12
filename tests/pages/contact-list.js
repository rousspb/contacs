import PageObject, { collection, visitable, text } from 'ember-cli-page-object';

export default PageObject.create({
  visit: visitable('/contacts'),

  contacts: collection({
    itemScope: '.contacts-list  .contact',
    item: {
      firstName: text('.information .name', { at: 0 }),
      lastName: text('information .title-company', { at: 1})
    }
  })
});
