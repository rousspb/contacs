import PageObject, { collection, visitable, text, value } from 'ember-cli-page-object';

export default PageObject.create({
  visit: visitable('/contacts'),
  visitEdit: visitable('/contacts/view/10'),
  visitNew: visitable('/contacts/view/new'),
  clickOnContact(id) {
    click(`.contacts-list a[href*='${id}']`);
  },

  clickButton(label) {
    click(`button:contains("${label}")`);
  },

  clickAddButton() {
    click(`button.add`);
  },

  contacts: collection({
    itemScope: '.contacts-list  .contact',
    item: {
      firstName: text('.information .name', { at: 0 }),
      lastName: text('information .title-company', { at: 1})
    }
  }),

  clearRequired() {
    fillIn('.information input[name="name"]', '');
    fillIn('.information input[name="lastname"]', '');
    fillIn('.details input[name="email"]', '');
    fillIn('.details input[name="jobTitle"]', '');
    fillIn('.details input[name="company"]', '');
  },

  fillFields() {
    fillIn('.information input[name="name"]', 'New name');
    fillIn('.information input[name="lastname"]', 'New last name');
    fillIn('.details input[name="email"]', 'email@me.com');
    fillIn('.details input[name="birthday"]', '10/10/2016');
    fillIn('.details input[name="address"]', 'Unknown');
    fillIn('.details input[name="mobile"]', '1234567890');
    fillIn('.details input[name="workPhone"]', '1234567890');
    fillIn('.details input[name="homePhone"]', '1234567890');
    fillIn('.details input[name="jobTitle"]', 'Director');
    fillIn('.details input[name="company"]', 'Same');
  },

  checkFirstNameError: text('.information .error.firstName'),
  checkLastNameError: text('.information .error.lastName'),
  checkEmailError: text('.details .error.email'),
  checkJobError: text('.details .error.jobTitle'),
  checkCompanyError: text('.details .error.company'),

  checkFirstNameValue: value('.information input[name="name"]'),
  checkLastNameValue: value('.information input[name="lastname"]'),
  checkEmailValue: value('.details input[name="email"]'),
  // checkBirthdayValue: value('.details input[name="birthday"]'),
  checkAddressValue: value('.details input[name="address"]'),
  checkAddressMobile: value('.details input[name="mobile"]'),
  checkWorkValue: value('.details input[name="workPhone"]'),
  checkHomeValue: value('.details input[name="homePhone"]'),
  checkJobValue: value('.details input[name="jobTitle"]'),
  checkCompanyValue: value('.details input[name="company"]')
});
