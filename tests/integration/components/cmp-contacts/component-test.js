import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('cmp-contacts', 'Integration | Component | cmp contacts', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{cmp-contacts}}`);

  assert.equal(this.$('.contacts-list').length > 0, true, 'I can see the contact class.');
});
