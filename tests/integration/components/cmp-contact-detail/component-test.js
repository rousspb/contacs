import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('cmp-contact-detail', 'Integration | Component | cmp contact detail', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{cmp-contact-detail}}`);

  assert.equal(this.$('.details label[for="email"]:contains("Email")').length > 0, true, 'I can see the email input');
  assert.equal(this.$('.details label[for="birthday"]:contains("Birthday")').length > 0, true, 'I can see the birthday input');
  assert.equal(this.$('.details label[for="address"]:contains("Address")').length > 0, true, 'I can see the address input');
  assert.equal(this.$('.details label[for="mobile"]:contains("Mobile")').length > 0, true, 'I can see the mobile input');
  assert.equal(this.$('.details label[for="workPhone"]:contains("Work Phone")').length > 0, true, 'I can see the work phone input');
  assert.equal(this.$('.details label[for="homePhone"]:contains("Home Phone")').length > 0, true, 'I can see the address input');
  assert.equal(this.$('.details label[for="jobTitle"]:contains("Job Title")').length > 0, true, 'I can see the mobile input');
  assert.equal(this.$('.details label[for="company"]:contains("Company")').length > 0, true, 'I can see the work phone input');

});
